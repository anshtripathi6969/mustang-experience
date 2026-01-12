import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
    { name: 'Home', href: '#' },
    { name: 'The Lineup', href: '#lineup' },
    { name: 'Performance', href: '#tech' },
    { name: 'Heritage', href: '#heritage' },
    { name: 'Configurator', href: '#' }
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference text-white">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-black italic rounded-full shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                        M
                    </div>
                    <span className="text-xl font-black uppercase tracking-tighter">Mustang</span>
                </div>
                <div className="flex items-center gap-8">
                    <div className="hidden lg:flex gap-8 text-[10px] font-black uppercase tracking-[0.4em]">
                        <a href="#heritage" className="hover:text-red-600 transition-colors">Heritage</a>
                        <a href="#lineup" className="hover:text-red-600 transition-colors">Lineup</a>
                        <a href="#tech" className="hover:text-red-600 transition-colors">Technology</a>
                    </div>
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all"
                    >
                        <Menu size={20} />
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ type: "spring", damping: 35, stiffness: 250 }}
                        className="fixed inset-0 z-[110] bg-mustang-red text-white flex flex-col p-6 md:p-12 justify-between"
                    >
                        <div className="flex justify-between items-center">
                            <span className="font-black italic text-2xl">M</span>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-4 bg-black/10 rounded-full hover:bg-black/20 transition-all"
                            >
                                <X size={32} />
                            </button>
                        </div>
                        <div className="flex flex-col gap-2">
                            {NAV_LINKS.map((item, i) => (
                                <motion.a
                                    key={item.name}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 + 0.3 }}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-5xl md:text-8xl lg:text-9xl font-black uppercase italic tracking-tighter leading-none hover:translate-x-10 transition-all duration-500 block"
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </div>
                        <div className="flex flex-col md:flex-row justify-between text-xs font-bold uppercase tracking-widest border-t border-white/20 pt-8 gap-4">
                            <span>Ford Performance © 2026</span>
                            <div className="flex gap-8">
                                <span className="cursor-pointer hover:opacity-50">Instagram</span>
                                <span className="cursor-pointer hover:opacity-50">YouTube</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
