"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const METRICS = [
    { id: 1, label: "HORSEPOWER", value: 500, unit: "HP", max: 600 },
    { id: 2, label: "TORQUE", value: 418, unit: "LB-FT", max: 500 },
    { id: 3, label: "LATERAL G", value: 1.07, unit: "G", max: 1.5 },
    { id: 4, label: "TOP SPEED", value: 180, unit: "MPH", max: 220 },
];

export default function TelemetrySection() {
    return (
        <section className="min-h-screen bg-black relative flex items-center justify-center py-20 border-t border-white/10">
            {/* Background Grid */}
            <div className="absolute inset-0 z-0 opacity-20"
                style={{ backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-white text-5xl md:text-8xl font-black italic uppercase tracking-tighter mb-4"
                    >
                        Live <span className="text-mustang-red">Telemetry</span>
                    </motion.h2>
                    <p className="text-zinc-500 font-mono tracking-widest uppercase text-xs md:text-sm">Real-time Performance Metrics</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {METRICS.map((metric) => (
                        <MetricCard key={metric.id} metric={metric} />
                    ))}
                </div>

                {/* Simulated Live Graph - NEXT LEVEL */}
                <div className="mt-20 border border-white/10 bg-black/50 p-6 rounded-3xl relative overflow-hidden h-96 shadow-[0_0_50px_rgba(220,38,38,0.1)]">
                    <div className="absolute top-6 left-6 flex items-center gap-4 z-20">
                        <div className="w-3 h-3 bg-mustang-red rounded-full animate-pulse shadow-[0_0_10px_#DC2626]" />
                        <span className="text-xs font-mono text-mustang-red font-bold uppercase tracking-widest text-glow">
                            Live Dyno Retrieval
                        </span>
                    </div>

                    {/* Grid Lines */}
                    <div className="absolute inset-0 z-0 opacity-20"
                        style={{
                            backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)',
                            backgroundSize: '40px 40px'
                        }}
                    />

                    {/* The Graph */}
                    <div className="absolute inset-0 flex items-end pt-20 pb-0 px-0">
                        <SvgGraph />
                    </div>

                    {/* Scanning Line */}
                    <motion.div
                        className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-mustang-red to-transparent z-10"
                        initial={{ left: "0%" }}
                        animate={{ left: "100%" }}
                        transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                        style={{ boxShadow: "0 0 20px 2px #DC2626" }}
                    />
                </div>
            </div>
        </section>
    );
}

function SvgGraph() {
    // A nice curve resembling a torque/hp curve
    const pathData = "M0,300 C100,280 200,100 300,80 C400,60 500,40 600,30 C700,20 800,10 1200,5";

    return (
        <svg className="w-full h-full overflow-visible" viewBox="0 0 1200 300" preserveAspectRatio="none">
            <defs>
                <linearGradient id="gradientArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#DC2626" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#DC2626" stopOpacity="0" />
                </linearGradient>
            </defs>

            {/* Filled Area */}
            <motion.path
                d={`${pathData} L1200,300 L0,300 Z`}
                fill="url(#gradientArea)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            />

            {/* The Line */}
            <motion.path
                d={pathData}
                fill="none"
                stroke="#DC2626"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                style={{ filter: "drop-shadow(0 0 15px #DC2626)" }}
            />
        </svg>
    )
}

interface Metric {
    id: number;
    label: string;
    value: number;
    unit: string;
    max: number;
}

function MetricCard({ metric }: { metric: Metric }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: metric.id * 0.1 }}
            className="border border-white/10 bg-zinc-900/80 backdrop-blur-md p-8 rounded-2xl relative overflow-hidden group hover:border-mustang-red transition-all duration-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]"
        >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-mustang-red/20 rounded-full blur-3xl group-hover:bg-mustang-red/40 transition-all duration-500" />

            <div className="relative z-10">
                <h3 className="text-zinc-500 font-mono text-xs tracking-[0.2em] mb-2 flex justify-between">
                    {metric.label}
                    <span className="text-mustang-red opacity-0 group-hover:opacity-100 transition-opacity">●</span>
                </h3>
                <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-5xl md:text-6xl font-black text-white italic tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                        <CountUp end={metric.value} decimals={metric.value % 1 !== 0 ? 2 : 0} />
                    </span>
                    <span className="text-mustang-red font-bold text-sm tracking-widest">{metric.unit}</span>
                </div>

                {/* Progress Bar */}
                <div className="h-1.5 bg-zinc-800 w-full rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(metric.value / metric.max) * 100}%` }}
                        transition={{ duration: 1.5, ease: "circOut", delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-mustang-red to-red-500 shadow-[0_0_10px_#DC2626]"
                    />
                </div>
            </div>
        </motion.div>
    );
}

function CountUp({ end, decimals = 0 }: { end: number, decimals?: number }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000;
        const stepTime = 20;
        const steps = duration / stepTime;
        const increment = end / steps;

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [end]);

    return <>{count.toFixed(decimals)}</>;
}
