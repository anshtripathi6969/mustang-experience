"use client";

import { useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LineupSection from "@/components/LineupSection";
import HeritageSection from "@/components/HeritageSection";
import TechGrid from "@/components/TechGrid";
import Footer from "@/components/Footer";
import Image from "next/image";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [hasStarted, setHasStarted] = useState(false);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="bg-black text-white font-sans selection:bg-mustang-red selection:text-white">
      <AnimatePresence mode="wait">
        {!hasStarted && <Preloader onStart={() => setHasStarted(true)} />}
      </AnimatePresence>

      <Navbar />

      <main>
        <Hero />
        <LineupSection />
        <HeritageSection />
        <TechGrid />


        {/* Final CTA */}
        <section className="h-screen relative flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image src="https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=1200" fill className="object-cover brightness-[0.2]" alt="CTA Background" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative z-10 text-center px-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-[10rem] font-black uppercase italic tracking-tighter leading-none mb-12"
            >
              Own the <br /> <span className="text-mustang-red">Road.</span>
            </motion.h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-12 py-6 bg-mustang-red text-white font-black uppercase tracking-widest text-xs rounded-full hover:scale-110 hover:bg-red-700 transition-all cursor-pointer shadow-[0_0_40px_rgba(220,38,38,0.4)]">
                Build Your Mustang
              </button>
              <button className="px-12 py-6 bg-white/5 backdrop-blur-md border border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-white/20 transition-all cursor-pointer">
                Find Dealer
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Progress Bar */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-1.5 bg-mustang-red origin-left z-[1000] shadow-[0_0_20px_rgba(220,38,38,0.5)]"
        style={{ scaleX: smoothProgress }}
      />
    </div>
  );
}
