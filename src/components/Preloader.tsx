"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Power } from "lucide-react";

export default function Preloader({ onStart }: { onStart: () => void }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.1),transparent_70%)]" />

            <motion.div
                className="relative z-10 flex flex-col items-center gap-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="text-center">
                    <h1 className="text-[15vw] md:text-[8rem] font-black uppercase italic tracking-tighter leading-[0.8] text-white/5 select-none">
                        Start
                    </h1>
                    <p className="text-zinc-500 font-bold uppercase tracking-[0.5em] text-xs mt-4">
                        Ignition Sequence
                    </p>
                </div>

                <motion.button
                    className="w-24 h-24 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center relative group cursor-pointer outline-none"
                    onClick={onStart}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.div
                        className="absolute inset-0 rounded-full bg-mustang-red blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                    />
                    <div className={`w-full h-full rounded-full border-2 border-dashed border-white/20 absolute animate-spin-slow transition-all duration-700 ${isHovered ? 'border-mustang-red opacity-100' : 'opacity-30'}`} style={{ animationDuration: '10s' }} />
                    <Power className={`w-8 h-8 transition-colors duration-300 ${isHovered ? 'text-mustang-red' : 'text-zinc-600'}`} />
                </motion.button>

                <div className="h-1 w-32 bg-zinc-900 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-mustang-red"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}
