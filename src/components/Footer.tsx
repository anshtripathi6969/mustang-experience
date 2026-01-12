import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black py-24 px-6 border-t border-white/10 overflow-hidden relative text-white">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black italic uppercase opacity-[0.03] pointer-events-none whitespace-nowrap select-none">
                CRUZ
            </div>
            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-20">
                    <div className="col-span-2">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-mustang-red flex items-center justify-center font-black italic rounded-full text-xl text-white">M</div>
                            <span className="text-4xl font-black tracking-tighter uppercase italic">Mustang</span>
                        </div>
                        <p className="text-zinc-500 max-w-md text-lg italic leading-relaxed">
                            A symbol of unbridled performance for over six decades. We don&apos;t just build cars; we build icons. Join the movement.
                        </p>
                    </div>
                    <div>
                        <h5 className="font-black uppercase tracking-[0.3em] text-[10px] text-zinc-600 mb-8">Navigation</h5>
                        <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-zinc-400">
                            <li className="hover:text-mustang-red cursor-pointer transition-colors">Heritage</li>
                            <li className="hover:text-mustang-red cursor-pointer transition-colors">Specs</li>
                            <li className="hover:text-mustang-red cursor-pointer transition-colors">Events</li>
                            <li className="hover:text-mustang-red cursor-pointer transition-colors">Store</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-black uppercase tracking-[0.3em] text-[10px] text-zinc-600 mb-8">Global HQ</h5>
                        <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest mb-2">Ford Motor Company</p>
                        <p className="text-zinc-600 text-sm leading-relaxed">1 American Rd, Dearborn, <br /> MI 48126, USA</p>
                        <div className="mt-8 flex gap-6">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer text-white">
                                    <ArrowUpRight size={14} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-zinc-800 text-[10px] font-black uppercase tracking-[0.5em]">© 2026 Mustang Performance Labs. All Rights Reserved.</p>
                    <div className="flex gap-10 text-[10px] text-zinc-800 font-black uppercase tracking-widest items-center">
                        <a
                            href="https://github.com/anshtripathi6969"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer bg-gradient-to-r from-red-600 via-red-400 to-red-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(220,38,38,1)] hover:drop-shadow-[0_0_25px_rgba(220,38,38,1)] hover:scale-105 transition-all duration-300"
                        >
                            Built by Ansh Tripathi
                        </a>
                        <span className="cursor-pointer hover:text-zinc-500">Privacy</span>
                        <span className="cursor-pointer hover:text-zinc-500">Legal</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
