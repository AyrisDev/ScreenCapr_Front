import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Privacy Policy | ScreenCapr",
    description: "Learn how ScreenCapr handles and protects your data.",
}

export default function PrivacyPage() {
    const lastUpdated = "January 19, 2024"

    return (
        <div className="relative min-h-screen bg-background-dark pt-32 pb-20 px-6 overflow-hidden">
            <div className="absolute top-0 left-0 w-[600px] h-[600px] ambient-glow-purple opacity-10 -z-10 -translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-4xl mx-auto">
                <div className="mb-16 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Privacy Policy</h1>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Last Updated: {lastUpdated}</p>
                </div>

                <div className="prose prose-invert prose-slate max-w-none space-y-12">
                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-white">1. Introduction</h2>
                        <p className="text-slate-400 leading-relaxed text-lg">
                            At ScreenCapr ("we," "our," or "us"), we prioritize your privacy. This Privacy Policy explains how we collect,
                            use, and protect your information when you use our screenshot API and related services. By using our service,
                            you agree to the terms outlined in this policy.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-white">2. Data We Collect</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                                <h4 className="text-white font-bold mb-3">Service Data</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    We collect URLs submitted for capture, viewport settings, and API request metadata to facilitate our service
                                    and monitor system health.
                                </p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                                <h4 className="text-white font-bold mb-3">Account Information</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    If you create an account, we collect your name, email address, and billing information (via our payment processors).
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-white">3. Zero-Storage Policy</h2>
                        <div className="p-8 rounded-3xl bg-primary/10 border border-primary/20">
                            <p className="text-primary font-bold text-lg leading-relaxed">
                                Critically, ScreenCapr does not store the captured screenshots on our servers after they are streamed to the client.
                                Screenshots are processed in memory and immediately delivered to you.
                            </p>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-white">4. How We Use Data</h2>
                        <ul className="list-disc pl-6 space-y-4 text-slate-400">
                            <li>To provide, maintain, and improve our API service.</li>
                            <li>To process payments and prevent fraudulent transactions.</li>
                            <li>To provide customer support and respond to your inquiries.</li>
                            <li>To communicate with you about service updates or security alerts.</li>
                        </ul>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-white">5. Third-Party Services</h2>
                        <p className="text-slate-400 leading-relaxed">
                            We use trusted third-party services for essential operations, including Stripe for payment processing
                            and Vercel for hosting our application. Each provider maintains its own privacy standards.
                        </p>
                    </section>

                    <div className="pt-16 border-t border-white/5 text-center">
                        <p className="text-slate-500 text-sm">
                            Questions about this policy? <a href="/contact" className="text-primary font-bold hover:underline">Contact our privacy team</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
