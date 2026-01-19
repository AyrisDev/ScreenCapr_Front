import { ScreenshotForm } from "@/components/screenshot/ScreenshotForm"
import { Metadata } from "next"
import { Monitor, Smartphone, Tablet, CheckCircle, ArrowRight, Zap, Check, Link as LinkIcon } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "ScreenCapr | High-Performance Website Screenshot API",
  description: "Capture stunning, high-fidelity screenshots of any website at scale. Professional API for developers with JS rendering, full-page support, and retina quality.",
  keywords: ["screenshot api", "website to image", "automatic screenshot", "rest api screenshot", "full page capture api"],
}

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden bg-background-dark">
      {/* Ambient Background Decoration */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] ambient-glow-purple pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] ambient-glow-blue pointer-events-none"></div>

      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-bold text-primary uppercase tracking-widest">v2.0 is now live</span>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-white">
                High-fidelity <span className="text-primary">screenshots.</span><br />
                Zero infrastructure.
              </h1>
              <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                The fastest API to capture, store, and manage website screenshots at scale. Built for developers who value precision and speed.
              </p>
            </div>

            {/* URL Input Box */}
            <Link href="/screenshot" className="relative group max-w-xl block">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-purple-500/50 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative flex h-16 bg-surface-dark/80 border border-white/10 rounded-xl overflow-hidden backdrop-blur-md">
                <div className="flex items-center pl-5 text-slate-500">
                  <LinkIcon className="w-5 h-5" />
                </div>
                <div className="flex-1 flex items-center text-slate-600 px-4 text-base">
                  https://your-website.com
                </div>
                <div className="flex items-center pr-2">
                  <div className="bg-primary text-background-dark font-black px-6 py-3 rounded-lg flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/5">
              <div>
                <p className="text-2xl font-bold text-white">450ms</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Avg Latency</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">99.99%</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Uptime</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">12M+</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Monthly Captures</p>
              </div>
            </div>
          </div>

          {/* Right Visual (Code Card) */}
          <div className="relative hidden lg:block">
            {/* Floating Badge */}
            <div className="absolute -top-10 -right-4 z-20 bg-surface-dark border border-white/10 p-4 rounded-xl shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Capture Successful</p>
                  <p className="text-xs text-slate-500">Image generated in 0.4s</p>
                </div>
              </div>
            </div>

            {/* Main Code Card */}
            <div className="code-card p-8 rounded-2xl">
              <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                <span className="ml-4 text-xs font-mono text-slate-500">GET /v1/capture</span>
              </div>
              <pre className="font-mono text-sm leading-relaxed text-slate-300">
                <span className="text-purple-400">{"{"}</span>{"\n"}
                {"  "}<span className="text-primary">"status"</span>: <span className="text-green-400">"success"</span>,{"\n"}
                {"  "}<span className="text-primary">"data"</span>: <span className="text-purple-400">{"{"}</span>{"\n"}
                {"    "}<span className="text-primary">"request_id"</span>: <span className="text-yellow-200">"sc_9f21a8b3"</span>,{"\n"}
                {"    "}<span className="text-primary">"url"</span>: <span className="text-yellow-200">"https://screencapr.com"</span>,{"\n"}
                {"    "}<span className="text-primary">"format"</span>: <span className="text-yellow-200">"png"</span>,{"\n"}
                {"    "}<span className="text-primary">"viewport"</span>: <span className="text-purple-400">{"{"}</span>{"\n"}
                {"      "}<span className="text-primary">"width"</span>: <span className="text-orange-400">1920</span>,{"\n"}
                {"      "}<span className="text-primary">"height"</span>: <span className="text-orange-400">1080</span>{"\n"}
                {"    "}<span className="text-purple-400">{"}"}</span>,{"\n"}
                {"    "}<span className="text-primary">"cdn_url"</span>: <span className="text-green-400">"https://cdn.sc.io/res_82...png"</span>,{"\n"}
                {"    "}<span className="text-primary">"latency"</span>: <span className="text-orange-400">452</span>{"\n"}
                {"  "}<span className="text-purple-400">{"}"}</span>{"\n"}
                <span className="text-purple-400">{"}"}</span>
              </pre>
            </div>
            {/* Background Element */}
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/20 blur-[100px] -z-10 rounded-full"></div>
          </div>
        </div>
      </main>

      {/* Features Grid Area */}
      <section className="max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group p-8 rounded-2xl bg-surface-dark/40 border border-white/5 hover:border-primary/50 transition-all">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <Monitor className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Full Page Rendering</h3>
            <p className="text-slate-500 leading-relaxed">Capture entire scrollable pages with pixel perfection using our high-performance headless fleet.</p>
          </div>
          <div className="group p-8 rounded-2xl bg-surface-dark/40 border border-white/5 hover:border-primary/50 transition-all">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Custom Viewports</h3>
            <p className="text-slate-500 leading-relaxed">Test responsive designs across any screen resolution, from mobile devices to 4K monitors.</p>
          </div>
          <div className="group p-8 rounded-2xl bg-surface-dark/40 border border-white/5 hover:border-primary/50 transition-all">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Retina Ready</h3>
            <p className="text-slate-500 leading-relaxed">High-DPI rendering for crisp, professional visuals that look sharp on any display.</p>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section id="pricing" className="max-w-5xl mx-auto px-6 py-24 w-full text-center border-t border-white/5">
        <h2 className="text-4xl font-black mb-16 text-white">Simple, developer-first pricing.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free */}
          <div className="flex flex-col p-8 rounded-2xl border border-white/5 bg-surface-dark/20 text-left">
            <span className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-2">Developer</span>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-black text-white">$0</span>
              <span className="text-slate-500">/mo</span>
            </div>
            <ul className="flex flex-col gap-4 mb-8 text-sm text-slate-400">
              <li className="flex items-center gap-2"><Check className="text-primary w-4 h-4" /> 100 monthly credits</li>
              <li className="flex items-center gap-2"><Check className="text-primary w-4 h-4" /> Standard support</li>
              <li className="flex items-center gap-2"><Check className="text-primary w-4 h-4" /> Public API access</li>
            </ul>
            <button className="w-full py-3 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors font-bold mt-auto">
              Start Building
            </button>
          </div>

          {/* Pro */}
          <div className="flex flex-col p-8 rounded-2xl border border-primary/50 bg-primary/5 text-left relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-primary text-background-dark text-[10px] font-black px-2 py-1 rounded uppercase">
              Recommended
            </div>
            <span className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Pro</span>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-black text-white">$1</span>
              <span className="text-slate-500">/mo</span>
            </div>
            <ul className="flex flex-col gap-4 mb-8 text-sm text-slate-300">
              <li className="flex items-center gap-2"><Check className="text-primary w-4 h-4" /> 10,000 monthly credits</li>
              <li className="flex items-center gap-2"><Check className="text-primary w-4 h-4" /> Priority email support</li>
              <li className="flex items-center gap-2"><Check className="text-primary w-4 h-4" /> Custom webhooks</li>
              <li className="flex items-center gap-2"><Check className="text-primary w-4 h-4" /> Full-page captures</li>
            </ul>
            <button className="w-full py-3 rounded-lg bg-primary text-background-dark hover:bg-primary/90 transition-all font-bold mt-auto shadow-lg shadow-primary/20">
              Upgrade to Pro
            </button>
          </div>
        </div>
      </section>

      {/* Actual Tool Section */}
      <section id="tool" className="max-w-4xl mx-auto px-6 py-20 w-full">
        <div className="bg-surface-dark/40 border border-white/5 rounded-3xl p-8 backdrop-blur-md">
          <h2 className="text-2xl font-bold mb-8 text-white text-center">Try it now</h2>
          <ScreenshotForm />
        </div>
      </section>
    </div>
  )
}
