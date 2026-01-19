import { Metadata } from "next"
import { CheckCircle, BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Affordable Screenshot API Pricing",
    description: "Simple, transparent pricing for ScreenCapr. Start for free or upgrade to Pro for $1/mo for 10,000 monthly screenshots and advanced features.",
    keywords: ["screenshot api pricing", "cheap screenshot api", "free website capture", "developer pricing"],
}

export default function PricingPage() {
    return (
        <div className="relative min-h-screen flex flex-col overflow-x-hidden bg-background-dark">
            {/* Ambient Background Decoration - consistent with features/home */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] ambient-glow-purple pointer-events-none opacity-20"></div>
            <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] ambient-glow-blue pointer-events-none opacity-20"></div>

            <main className="flex-grow flex flex-col items-center py-32 px-6 lg:px-40 relative z-10">
                {/* Page Heading */}
                <div className="max-w-3xl text-center mb-20 space-y-6">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black tracking-widest uppercase">
                        Developer First Pricing
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-tight">
                        Simple, scalable pricing
                    </h1>
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
                        Everything you need to capture professional screenshots at scale. No hidden fees, cancel anytime.
                    </p>
                    <div className="flex justify-center pt-6">
                        <Link
                            href="/api-docs"
                            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white text-sm font-bold hover:bg-white/10 transition-all shadow-xl"
                        >
                            <BookOpen className="w-4 h-4" />
                            View Documentation
                        </Link>
                    </div>
                </div>

                {/* Pricing Grid */}
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch px-4 w-full">
                    {/* Starter Plan */}
                    <div className="flex flex-col gap-8 rounded-[2.5rem] border border-white/5 bg-white/[0.03] p-10 backdrop-blur-md shadow-2xl relative group">
                        <div className="flex flex-col gap-3">
                            <h3 className="text-slate-500 text-sm font-black uppercase tracking-widest">Starter</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-white text-6xl font-black tracking-tighter">$0</span>
                                <span className="text-slate-500 text-xl font-medium">/mo</span>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed">Perfect for hobby projects and testing.</p>
                        </div>

                        <button className="w-full h-14 rounded-2xl bg-white/10 text-white text-base font-black hover:bg-white/20 transition-all shadow-lg">
                            Get API Key
                        </button>

                        <div className="flex flex-col gap-5 pt-4 border-t border-white/5">
                            {[
                                "100 screenshots/mo",
                                "JS Rendering",
                                "Public API access",
                                "Community support"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-4 text-sm text-slate-300">
                                    <CheckCircle className="w-5 h-5 text-primary opacity-60" />
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pro Plan (Featured) */}
                    <div className="relative flex flex-col gap-8 rounded-[2.5rem] border border-primary/50 bg-primary/5 p-12 backdrop-blur-xl shadow-2xl shadow-primary/10 z-10">
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                            <span className="bg-primary text-background-dark text-[11px] font-black tracking-widest uppercase px-5 py-2 rounded-full border border-primary/20 shadow-xl">
                                Recommended
                            </span>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h3 className="text-primary text-sm font-black uppercase tracking-widest">Pro</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-white text-7xl font-black tracking-tighter">$1</span>
                                <span className="text-slate-400 text-2xl font-medium">/mo</span>
                            </div>
                            <p className="text-slate-300 text-sm leading-relaxed">Ideal for growing startups and serious builds.</p>
                        </div>

                        <button className="w-full h-16 rounded-2xl bg-primary text-background-dark text-lg font-black hover:bg-primary/90 transition-all shadow-2xl shadow-primary/30">
                            Get API Key
                        </button>

                        <div className="flex flex-col gap-6 pt-4 border-t border-primary/10">
                            {[
                                "10,000 screenshots/mo",
                                "Priority support",
                                "Custom headers & Auth",
                                "Full-page captures",
                                "Webhook notifications"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-4 text-sm text-white font-bold">
                                    <CheckCircle className="w-6 h-6 text-primary" />
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Trust Section */}
                <div className="mt-40 w-full max-w-5xl">
                    <h4 className="text-slate-500 text-xs font-black uppercase tracking-[0.3em] text-center mb-12 opacity-80">
                        Trusted by developers at leading companies
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center justify-center p-10 rounded-[2rem] border border-white/5 bg-white/[0.02] shadow-xl backdrop-blur-sm">
                            <p className="text-white text-5xl font-black mb-2">50M+</p>
                            <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Captured</p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-10 rounded-[2rem] border border-white/5 bg-white/[0.02] shadow-xl backdrop-blur-sm">
                            <p className="text-white text-5xl font-black mb-2">25k+</p>
                            <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Developers</p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-10 rounded-[2rem] border border-white/5 bg-white/[0.02] shadow-xl backdrop-blur-sm">
                            <p className="text-white text-5xl font-black mb-2">99.9%</p>
                            <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Uptime</p>
                        </div>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="mt-40 text-center">
                    <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                        Need more than 10M screenshots? Our platform is designed for enterprise scale.
                        <Link href="#" className="text-primary font-bold hover:underline inline-flex items-center ml-2">
                            Let&apos;s talk <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                    </p>
                </div>
            </main>
        </div>
    )
}
