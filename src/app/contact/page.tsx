import { Metadata } from "next"
import { Mail, MessageSquare, ArrowRight, ShieldCheck, Zap } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Contact Us | ScreenCapr",
    description: "Get in touch with the ScreenCapr team for support, sales, or partnership inquiries.",
}

export default function ContactPage() {
    return (
        <div className="relative min-h-screen bg-background-dark pt-32 pb-20 px-6 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] ambient-glow-blue opacity-10 -z-10 translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
                {/* Left Side: Info */}
                <div className="space-y-12">
                    <div className="space-y-6">
                        <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
                            Let&apos;s build <br />
                            <span className="text-primary italic">something special.</span>
                        </h1>
                        <p className="text-slate-400 text-xl leading-relaxed max-w-lg">
                            Have questions about our API, pricing, or custom enterprise solutions? Our engineering team is here to help.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                        <div className="space-y-3">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                <Mail className="w-5 h-5" />
                            </div>
                            <h4 className="text-white font-bold">Email Support</h4>
                            <p className="text-sm text-slate-500">Response within 24 hours.</p>
                            <a href="mailto:support@screencapr.com" className="text-primary font-bold hover:underline block">support@screencapr.com</a>
                        </div>

                        <div className="space-y-3">
                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                                <MessageSquare className="w-5 h-5" />
                            </div>
                            <h4 className="text-white font-bold">Live Chat</h4>
                            <p className="text-sm text-slate-500">Available 9am - 6pm EST.</p>
                            <span className="text-purple-400 font-bold hover:underline block cursor-pointer">Open Messenger</span>
                        </div>
                    </div>

                    <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-md">
                        <div className="flex items-center gap-4 mb-4">
                            <ShieldCheck className="w-6 h-6 text-emerald-400" />
                            <span className="text-emerald-400 font-black text-xs uppercase tracking-widest">Enterprise Ready</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Processing over 1M screenshots per month? Talk to our architects about custom clusters and dedicated infrastructure.
                        </p>
                        <Link href="/pricing" className="text-white font-black flex items-center gap-2 group">
                            Learn about Enterprise <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-[3rem] blur-xl opacity-50"></div>
                    <div className="relative bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-xl shadow-2xl">
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-500">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="John"
                                        className="w-full bg-background-dark border border-white/10 rounded-xl px-5 py-3 text-white focus:border-primary outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-500">Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Doe"
                                        className="w-full bg-background-dark border border-white/10 rounded-xl px-5 py-3 text-white focus:border-primary outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-500">Business Email</label>
                                <input
                                    type="email"
                                    placeholder="john@company.com"
                                    className="w-full bg-background-dark border border-white/10 rounded-xl px-5 py-3 text-white focus:border-primary outline-none transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-500">Subject</label>
                                <select className="w-full bg-background-dark border border-white/10 rounded-xl px-5 py-3 text-white focus:border-primary outline-none transition-all appearance-none cursor-pointer">
                                    <option>API Support</option>
                                    <option>Billing Inquiry</option>
                                    <option>Partnership</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-500">Message</label>
                                <textarea
                                    rows={5}
                                    placeholder="Tell us about your project..."
                                    className="w-full bg-background-dark border border-white/10 rounded-xl px-5 py-3 text-white focus:border-primary outline-none transition-all resize-none"
                                ></textarea>
                            </div>

                            <button className="w-full bg-primary text-background-dark font-black py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3">
                                Send Message
                                <Zap className="w-5 h-5 fill-current" />
                            </button>

                            <p className="text-[10px] text-slate-500 text-center uppercase tracking-widest font-bold">
                                By clicking, you agree to our <Link href="/privacy" className="text-white hover:underline">Privacy Policy</Link>.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
