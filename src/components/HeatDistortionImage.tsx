"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader, Vector2 } from 'three';

const HeatShaderMaterial = {
    uniforms: {
        uTexture: { value: null },
        uTime: { value: 0 },
        uMouse: { value: new Vector2(0.5, 0.5) },
        uResolution: { value: new Vector2(1, 1) },
        uStrength: { value: 0.5 }
    },
    vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    fragmentShader: `
    uniform sampler2D uTexture;
    uniform float uTime;
    uniform vec2 uMouse;
    uniform vec2 uResolution;
    uniform float uStrength;
    varying vec2 vUv;

    // Simplex noise function
    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
    float snoise(vec2 v){
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
               -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy) );
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
      m = m*m ;
      m = m*m ;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    void main() {
      vec2 uv = vUv;
      
      // Heat haze effect
      float noise = snoise(vec2(uv.x * 10.0, uv.y * 10.0 - uTime * 2.0));
      float distortion = noise * 0.01 * uStrength * (1.0 - uv.y); // Stronger near bottom
      
      // Mouse interaction
      float dist = distance(uv, uMouse);
      float mouseEffect = smoothstep(0.4, 0.0, dist) * 0.02;
      
      vec2 distortedUV = uv + vec2(distortion + mouseEffect * sin(uTime * 5.0), 0.0);
      
      vec4 color = texture2D(uTexture, distortedUV);
      gl_FragColor = color;
    }
  `
};

function Scene({ imageUrl }: { imageUrl: string }) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const meshRef = useRef<any>(null);
    const texture = useLoader(TextureLoader, imageUrl);
    const uniforms = useMemo(
        () => ({
            uTexture: { value: texture },
            uTime: { value: 0 },
            uMouse: { value: new Vector2(0.5, 0.5) },
            uStrength: { value: 1.0 }
        }),
        [texture]
    );

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.material.uniforms.uTime.value = state.clock.getElapsedTime();
            const { x, y } = state.pointer;
            // Normalize pointer to 0-1 range for UVs
            const u = (x + 1) / 2;
            const v = (y + 1) / 2;
            meshRef.current.material.uniforms.uMouse.value.lerp(new Vector2(u, v), 0.1);
        }
    });

    return (
        <mesh ref={meshRef}>
            <planeGeometry args={[2, 2, 32, 32]} />
            <shaderMaterial
                uniforms={uniforms}
                vertexShader={HeatShaderMaterial.vertexShader}
                fragmentShader={HeatShaderMaterial.fragmentShader}
                transparent
            />
        </mesh>
    );
}

export default function HeatDistortionImage({ src, alt }: { src: string, alt: string }) {
    return (
        <div className="w-full h-full relative">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Scene imageUrl={src} />
            </Canvas>
            <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover opacity-0 pointer-events-none" />
        </div>
    );
}
