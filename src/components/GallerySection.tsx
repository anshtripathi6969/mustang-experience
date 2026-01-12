"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const IMAGES = [
    { src: "/ford1.jpg", alt: "Mustang Gallery 1", span: "md:col-span-1" },
    { src: "/ford2.jpg", alt: "Mustang Gallery 2", span: "md:col-span-2" },
    { src: "/ford3.jpg", alt: "Mustang Gallery 3", span: "md:col-span-2" },
    { src: "/ford4.jpg", alt: "Mustang Gallery 4", span: "md:col-span-1" },
    { src: "/ford5.jpg", alt: "Mustang Gallery 5", span: "md:col-span-1" },
    { src: "/ford7.jpg", alt: "Mustang Gallery 6", span: "md:col-span-2" },
];

export default function GallerySection() {
    return (
        <section className="min-h-screen bg-black relative py-32 overflow-hidden">
            {/* Background noise and gradient to ensure blend */}
            <div className="absolute inset-0 bg-black z-0" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-20"
                >
                    <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-white mb-4">
                        The <span className="text-mustang-red">Collection</span>
                    </h2>
                    <div className="h-1 w-20 bg-mustang-red" />
                </motion.div>

                {/* The Wall */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
                    {IMAGES.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            viewport={{ margin: "-50px" }}
                            className={`relative aspect-[4/3] ${img.span} group overflow-hidden rounded-md`}
                        >
                            {/* The Image */}
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />

                            {/* Overlay Gradient for seamless blend */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                            {/* Border Glow on Hover */}
                            <div className="absolute inset-0 border border-white/0 group-hover:border-mustang-red/50 transition-colors duration-500 pointer-events-none" />

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
