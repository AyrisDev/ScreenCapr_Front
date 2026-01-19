import { Metadata } from "next"
import { Maximize, FileDown, Zap, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Powerful Website Screenshot Features",
    description: "Explore the advanced capabilities of ScreenCapr, including full-page capture, JS rendering, retina quality, and batch processing for any website URL.",
    keywords: ["full page screenshot", "api features", "retina screenshots", "js rendering", "batch screenshot api"],
}

export default function FeaturesPage() {
    return (
        <div className="relative min-h-screen flex flex-col overflow-x-hidden bg-background-dark">
            {/* Ambient Background Decoration */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] ambient-glow-purple pointer-events-none opacity-20"></div>
            <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] ambient-glow-blue pointer-events-none opacity-20"></div>

            <main className="flex flex-col items-center py-32 px-6 lg:px-40 relative z-10">
                {/* Page Heading */}
                <div className="max-w-[960px] w-full mb-20 text-center lg:text-left">
                    <h1 className="text-white text-5xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
                        Powerful Features for <span className="text-primary">Modern Teams</span>
                    </h1>
                    <p className="text-slate-400 text-xl max-w-2xl leading-relaxed">
                        The developer-first screenshot API for capturing everything on the web at scale. Fast, reliable, and
                        stunningly clear.
                    </p>
                </div>

                {/* Bento Grid Section */}
                <div className="max-w-[1100px] w-full grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Box 1: Long Scrolling Mobile (Vertical Rectangle) */}
                    <div className="md:col-span-4 md:row-span-2 glass-card rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group border border-white/5 bg-surface-dark/40 backdrop-blur-md">
                        <div className="z-10">
                            <h3 className="text-2xl font-bold mb-3 text-white">Capture the whole story</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">Automated mobile viewport capture with long-scrolling support.</p>
                        </div>
                        <div className="mt-12 relative h-[450px] w-full flex justify-center translate-y-8 group-hover:translate-y-4 transition-transform duration-700">
                            {/* Mockup Frame */}
                            <div className="w-56 h-full bg-[#050505] rounded-[3rem] border-[8px] border-[#222] relative overflow-hidden ring-1 ring-white/10 shadow-2xl">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#222] rounded-b-2xl z-20"></div>
                                <div className="w-full h-[900px] bg-gradient-to-b from-primary/20 via-background-dark to-primary/10 p-3 pt-10">
                                    <div className="w-full h-full rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-3 p-4">
                                        <div className="w-full h-4 bg-white/10 rounded-full"></div>
                                        <div className="w-2/3 h-4 bg-white/10 rounded-full"></div>
                                        <div className="w-full h-40 bg-primary/20 rounded-2xl"></div>
                                        <div className="w-full h-4 bg-white/10 rounded-full"></div>
                                        <div className="w-full h-4 bg-white/10 rounded-full"></div>
                                        <div className="w-full h-4 bg-white/10 rounded-full"></div>
                                        <div className="w-full h-40 bg-white/10 rounded-2xl"></div>
                                        <div className="w-full h-4 bg-white/10 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Box 2: API Terminal (Square) */}
                    <div className="md:col-span-8 md:row-span-1 glass-card rounded-3xl p-8 flex flex-col gap-6 overflow-hidden border border-white/5 bg-surface-dark/40 backdrop-blur-md">
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-2xl font-bold text-white">Lightning Fast API</h3>
                                <p className="text-slate-400 text-sm">Low latency endpoints with instant processing.</p>
                            </div>
                            <div className="hidden sm:flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                <span className="text-primary text-xs font-black uppercase tracking-widest">200 OK</span>
                            </div>
                        </div>
                        <div className="bg-black/60 rounded-2xl border border-white/10 p-6 font-mono text-sm leading-relaxed relative shadow-inner">
                            <div className="flex gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500/40"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/40"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/40"></div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-slate-300">
                                    <span className="text-primary">curl</span> -X POST {"\""}https://api.screencapr.com/api/screenshot{"\""} \
                                </div>
                                <div className="text-slate-500 pl-4">
                                    -H {"\""}Content-Type: application/json{"\""} \
                                </div>
                                <div className="text-slate-300 pl-4">
                                    -d &apos;{"{"}&quot;url&quot;: &quot;https://github.com&quot;{"}"}&apos; --output screenshot.png
                                </div>
                                <div className="mt-4 text-emerald-400/90 bg-emerald-400/5 p-2 rounded border border-emerald-400/10">
                                    {"// Binary PNG Stream Recieved (200 OK)"}
                                    <span className="animate-pulse bg-primary/60 inline-block w-2 h-4 ml-2 align-middle"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Box 3: Core Features Icons (Horizontal wide) */}
                    <div className="md:col-span-8 md:row-span-1 glass-card rounded-3xl p-8 border border-white/5 bg-surface-dark/40 backdrop-blur-md">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                            {/* Feature Item */}
                            <div className="flex flex-col gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-500">
                                    <Maximize className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg mb-1">Full Page Capture</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">Capture every pixel from top to bottom automatically.</p>
                                </div>
                            </div>
                            {/* Feature Item */}
                            <div className="flex flex-col gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-500">
                                    <FileDown className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg mb-1">PDF Export</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">High-fidelity documents with selectable text and links.</p>
                                </div>
                            </div>
                            {/* Feature Item */}
                            <div className="flex flex-col gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-500">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg mb-1">Retina Quality</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">Crystal clear 2x resolution for high-DPI displays.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Showcase Gallery */}
                <div className="max-w-[1100px] w-full mt-24">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-3xl font-bold text-white">Trusted by top agencies</h3>
                        <Link href="#" className="text-primary text-sm font-black flex items-center gap-2 hover:translate-x-1 transition-transform">
                            View Showcase <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Dashboard UI", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRl8Ev_cPA78HCdahKV-0K3GwURKVXYXLWc-fxtbPNHCBb0FhuFnv5fwy3lK42iVehEQbNuuMx-eIV24rja9HhrOH-OHRbHG3tSaIYihlmp8iE9a_ah7tggfPUpasXr6xH1f8Ev5kGXoO5n3pLOjaT9YviotIWI6Tdg_5iP93zEUr4TDRpxrk7ki0nsnAye2cyJPhu7YVPs15i3w1QkM4BH3-36pDTFGur9Pga4lKg0zgK1EmwhQzxJVMGqsHh10azDExg3LwcF5vf" },
                            { title: "Creative Agency", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDARD9SM7uSZtO-7jD6tfOZU34PNB8M9cXYui85juYRpDUDFDz43o-_9n9rDl7WNk4ckQu2DjiXKgowh_fnerM6WmSD28Y4IgCXsFsWVd28Eqhw4juv7-BODrfwPd5mNu1rtGyYlWaJ_KZhRbQhdNZCiKlLvehah2F1Kl9eoXk9cOIZa3bW4T4Lg2hSEg97DUvV6aLFJ0Zizm-SaECTLAV8-b5aTYWm8rbEiszjmCpNgofWGcct7IZDnr4bMaQNI5CSDxOWfbL-b0w7" },
                            { title: "E-commerce", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBmI0Q-Wp9uWh8V6UyRl6lhEWpf6ilG5QbjvUnS5lExe67DtJyh_x3dv_GBJauDPSl2pqQ3hSUDCR8p5SAH8fp9zLbMZqyvBrf_JWck8KquvO4xicGhneXefgy2SW8W3DgJ-Eoe03gfmtQyG4uhBc7sRR-J7zU0ayO214TodMF_ZK4wJY7Lwx7DgE0S6szX8aum_3-vtugnYgF_1o2AWQcjZx2KGMLCezXSZ7rL0cXmkx5XIsaveNsSvk--_zp4oKcFCVvH1FPirTD" },
                            { title: "Web3 / Crypto", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdmdPMbH47DwaU8ATWrZmXv-quiXZ4B10KpwlSBzyrhPlSxW5J1AR2jKTYea3Yn9_uunuJ3IWHI-Wh0iuivyuVfe8S_fdr_gtrbepjYrbHUBmz_aAvhc5KP9UB1HzzcaOBJpyCPveT2-q2SyFCVOl777nJ7wb3gVoZ9PGpWI2XvY8lMy1PoG1Ga-y_P010H83DCm1adxlEIAR1LF4B9LCtEPIzB2yOaN2ikF_UGwgnt-dzF91yqO3sVKzAGWqZ119YbbreRn9oFD92" }
                        ].map((item, i) => (
                            <div key={i} className="aspect-[4/3] rounded-2xl bg-white/5 border border-white/10 overflow-hidden relative group shadow-lg">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                    style={{ backgroundImage: `url("${item.img}")` }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                                <div className="absolute inset-0 p-6 flex items-end">
                                    <p className="text-xs uppercase tracking-widest font-black text-white/90">{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="max-w-[960px] w-full mt-32 text-center relative">
                    <div className="p-16 rounded-[2.5rem] bg-surface-dark/40 border border-white/5 backdrop-blur-xl relative overflow-hidden shadow-2xl">
                        <div className="absolute -top-24 -left-24 w-80 h-80 bg-primary/10 blur-[100px] rounded-full"></div>
                        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-primary/5 blur-[100px] rounded-full"></div>

                        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-8 opacity-50" />
                        <h2 className="text-4xl font-black mb-6 text-white leading-tight">Ready to start capturing?</h2>
                        <p className="text-slate-400 mb-12 max-w-xl mx-auto text-lg">
                            Join 2,000+ developers building the future of web archiving and monitoring with ScreenCapr.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <button className="bg-primary text-background-dark font-black px-10 py-4 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20">
                                Get Free API Key
                            </button>
                            <button className="bg-white/5 border border-white/10 text-white font-black px-10 py-4 rounded-xl hover:bg-white/10 transition-all">
                                Read Documentation
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
