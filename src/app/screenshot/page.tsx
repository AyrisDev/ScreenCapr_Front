"use client"

import * as React from "react"
import { ScreenshotForm } from "@/components/screenshot/ScreenshotForm"
import { BatchScreenshotForm } from "@/components/screenshot/BatchScreenshotForm"
import { HelpCircle, History, Sparkles, ShieldCheck, Camera, Layers } from "lucide-react"

export default function ScreenshotPage() {
    const [mode, setMode] = React.useState<"single" | "batch">("single")

    return (
        <div className="relative min-h-screen flex flex-col bg-background-dark overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] ambient-glow-blue opacity-20 -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] ambient-glow-purple opacity-20 -z-10 -translate-x-1/4 translate-y-1/4"></div>

            <main className="flex-1 pt-32 pb-20 px-6 relative z-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Column: Focused Tool Area */}
                    <div className="lg:col-span-8 flex flex-col gap-8">
                        <div className="flex flex-col gap-3">
                            <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight">
                                Capture <span className="text-primary">Workspace</span>
                            </h1>
                            <p className="text-slate-400 text-lg">
                                Pro-grade rendering engine. Zero latency. Stunning results.
                            </p>
                        </div>

                        {/* Mode Switcher */}
                        <div className="flex p-1.5 bg-white/[0.03] border border-white/5 rounded-2xl w-fit gap-1">
                            <button
                                onClick={() => setMode("single")}
                                className={`flex items-center gap-2 px-6 py-2 rounded-xl text-sm font-black transition-all ${mode === "single"
                                        ? "bg-primary text-background-dark shadow-lg shadow-primary/20"
                                        : "text-slate-500 hover:text-white"
                                    }`}
                            >
                                <Camera className="w-4 h-4" />
                                Single Capture
                            </button>
                            <button
                                onClick={() => setMode("batch")}
                                className={`flex items-center gap-2 px-6 py-2 rounded-xl text-sm font-black transition-all ${mode === "batch"
                                        ? "bg-primary text-background-dark shadow-lg shadow-primary/20"
                                        : "text-slate-500 hover:text-white"
                                    }`}
                            >
                                <Layers className="w-4 h-4" />
                                Batch Mode
                            </button>
                        </div>

                        {/* The Main Forms */}
                        <div className="relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-[2.5rem] blur opacity-50"></div>
                            <div className="relative animate-in fade-in zoom-in-95 duration-500">
                                {mode === "single" ? <ScreenshotForm /> : <BatchScreenshotForm />}
                            </div>
                        </div>

                        {/* Pro Tips / Features beneath */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Sparkles className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm mb-1">Smart Rendering</h4>
                                    <p className="text-xs text-slate-500 leading-relaxed">Our engine automatically handles cookie banners and lazy-loaded assets.</p>
                                </div>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex gap-4">
                                <div className="w-10 h-10 rounded-lg bg-emerald-400/10 flex items-center justify-center text-emerald-400 shrink-0">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm mb-1">Secure & Private</h4>
                                    <p className="text-xs text-slate-500 leading-relaxed">Captured images are streamed directly to you and never stored on our servers.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Sidebar info */}
                    <div className="hidden lg:flex lg:col-span-4 flex-col gap-8">
                        {/* Quick Guide */}
                        <div className="p-8 rounded-3xl bg-surface-dark/40 border border-white/5 backdrop-blur-md">
                            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                <HelpCircle className="w-5 h-5 text-primary" />
                                Quick Guide
                            </h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[10px] font-black shrink-0 text-slate-400">1</div>
                                    <p className="text-sm text-slate-400">
                                        {mode === "single"
                                            ? "Paste the full URL including https://"
                                            : "List your URLs one per line in the box."
                                        }
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[10px] font-black shrink-0 text-slate-400">2</div>
                                    <p className="text-sm text-slate-400">Configure your viewport (e.g., <strong>1920x1080</strong> for desktop).</p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[10px] font-black shrink-0 text-slate-400">3</div>
                                    <p className="text-sm text-slate-400">Toggle <strong>Full Page</strong> for long scrolling sites.</p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[10px] font-black shrink-0 text-slate-400">4</div>
                                    <p className="text-sm text-slate-400">
                                        {mode === "single"
                                            ? "Click capture and wait for the direct stream download."
                                            : "Click Capture All and get everything in a single ZIP."
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Empty State History Placeholder */}
                        <div className="p-8 rounded-3xl border border-dashed border-white/10 flex flex-col items-center justify-center text-center py-16">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-600 mb-4">
                                <History className="w-6 h-6" />
                            </div>
                            <h4 className="text-white font-bold mb-2">Recent Activity</h4>
                            <p className="text-xs text-slate-500 max-w-[200px]">Your session history is stored locally in your browser. Start capturing to see it here.</p>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}
