import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Terms of Service | ScreenCapr",
    description: "Terms and conditions for using the ScreenCapr website screenshot service.",
}

export default function TermsPage() {
    const lastUpdated = "January 19, 2024"

    return (
        <div className="relative min-h-screen bg-background-dark pt-32 pb-20 px-6 overflow-hidden">
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] ambient-glow-blue opacity-10 -z-10 translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-4xl mx-auto">
                <div className="mb-16 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Terms of Service</h1>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Last Updated: {lastUpdated}</p>
                </div>

                <div className="prose prose-invert prose-slate max-w-none space-y-12">
                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-white">1. Agreement to Terms</h2>
                        <p className="text-slate-400 leading-relaxed text-lg">
                            By accessing or using the ScreenCapr API and website, you agree to be bound by these Terms of Service.
                            If you do not agree to these terms, please do not use our services.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-white">2. Use of Service</h2>
                        <p className="text-slate-400 leading-relaxed">
                            You may use our service solely for lawful purposes. You agree not to:
                        </p>
                        <ul className="list-disc pl-6 space-y-4 text-slate-400">
                            <li>Use the service to capture content that violates any laws or third-party rights.</li>
                            <li>Attempt to bypass our rate limits or security measures.</li>
                            <li>Resell our API without explicit written permission.</li>
                            <li>Use our service to automate harassment or malicious activities.</li>
                        </ul>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-white">3. API Keys & Security</h2>
                        <p className="text-slate-400 leading-relaxed">
                            If you are issued an API key, you are responsible for maintaining its confidentiality. You are responsible
                            for all activities that occur under your API key. If you suspect unauthorized use, notify us immediately.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-white">4. Payment & Refunds</h2>
                        <p className="text-slate-400 leading-relaxed">
                            Subscription fees are billed in advance on a monthly or annual basis. All fees are non-refundable except
                            as required by law or specified in a signed service level agreement.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-white">5. Limitation of Liability</h2>
                        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5">
                            <p className="text-slate-500 text-sm italic leading-relaxed">
                                ScreenCapr and its affiliates will not be liable for any indirect, incidental, special, or consequential
                                damages resulting from the use or inability to use the service, even if we have been advised of the
                                possibility of such damages.
                            </p>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-white">6. Changes to Terms</h2>
                        <p className="text-slate-400 leading-relaxed">
                            We reserve the right to modify these terms at any time. We will notify users of significant changes
                            via email or by posting a notice on our website. Continued use of the service constitutes acceptance of
                            the new terms.
                        </p>
                    </section>

                    <div className="pt-16 border-t border-white/5 text-center">
                        <p className="text-slate-500 text-sm">
                            Any questions about our terms? <a href="/contact" className="text-primary font-bold hover:underline">Support is here to help</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
