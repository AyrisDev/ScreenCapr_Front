import { Metadata } from "next"
import {
  Camera, Search, Home, Lock, Zap,
  Code2, RefreshCw, AlertTriangle,
  ChevronRight, ChevronDown, Copy,
  Play, Github, Share2, Activity,
  Layers, Download
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "API Documentation & Reference",
  description: "Comprehensive documentation for the ScreenCapr REST API. Learn how to take single and batch screenshots with direct streaming and custom options.",
  keywords: ["api documentation", "screenshot api reference", "rest api guide", "screenshot endpoints", "developer docs"],
}

export default function ApiDocsPage() {
  return (
    <div className="relative min-h-screen bg-background-dark flex flex-col pt-16">
      <div className="flex flex-1 overflow-hidden">
        {/* SideNavBar (Left Column) */}
        <aside className="sticky top-16 hidden lg:flex h-[calc(100vh-64px)] w-64 flex-col border-r border-white/5 bg-sidebar-dark/50 backdrop-blur-md overflow-y-auto">
          <div className="flex flex-col gap-8 p-8">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Getting Started</span>
              <div className="flex flex-col gap-1 mt-3">
                <Link href="#introduction" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                  <Home className="w-4 h-4" />
                  Introduction
                </Link>
                <Link href="#base-url" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                  <Zap className="w-4 h-4" />
                  Base URL
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Endpoints</span>
              <div className="flex flex-col gap-1 mt-3">
                <Link href="#single-screenshot" className="flex items-center gap-3 px-3 py-2 text-sm font-bold text-primary bg-primary/10 rounded-lg">
                  <Camera className="w-4 h-4" />
                  Single Screenshot
                </Link>
                <Link href="#batch-screenshots" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                  <Layers className="w-4 h-4" />
                  Batch Screenshots
                </Link>
                <Link href="#health-check" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                  <Activity className="w-4 h-4" />
                  Health Check
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Advanced</span>
              <div className="flex flex-col gap-1 mt-3">
                <Link href="#errors" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                  <AlertTriangle className="w-4 h-4" />
                  Error Codes
                </Link>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content (Center Column) */}
        <main className="flex-1 overflow-y-auto scroll-smooth">
          <div className="mx-auto max-w-4xl px-8 py-12 lg:px-16">
            {/* Page Heading */}
            <div id="introduction" className="flex flex-col gap-6 mb-16">
              <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">API Reference</h1>
              <p className="text-xl leading-relaxed text-slate-400">
                ScreenCapr provides a high-performance REST API for capturing website screenshots.
                Unlike other services, we stream results directly to you with zero storage overhead.
              </p>
            </div>

            <section id="base-url" className="mb-20">
              <h2 className="text-2xl font-black text-white mb-6">Base URL</h2>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-surface-dark/50 border border-white/5">
                <code className="text-primary font-mono text-sm">
                  {process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.screencapr.com'}
                </code>
                <button className="ml-auto p-2 text-slate-500 hover:text-primary rounded-lg">
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </section>

            {/* Single Screenshot Section */}
            <section id="single-screenshot" className="mb-24">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-3xl font-black text-white">Single Screenshot</h2>
                <span className="bg-primary/10 px-3 py-1 rounded-full text-xs font-black text-primary border border-primary/20">POST</span>
              </div>
              <p className="text-slate-400 mb-8 text-lg">
                Capture a single URL and receive the raw binary image data instantly.
              </p>

              <div className="bg-surface-dark/30 rounded-2xl border border-white/5 mb-10 overflow-hidden">
                <div className="bg-white/[0.02] px-6 py-3 border-b border-white/5 font-mono text-xs text-slate-500">
                  /api/screenshot
                </div>
                <div className="p-8">
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-6">Body Parameters</h3>
                  <div className="space-y-6">
                    {[
                      { name: "url", type: "string", required: true, desc: "The URL of the website to capture (must include http/https)." },
                      { name: "options.width", type: "number", range: "100-3840", default: "1920", desc: "Viewport width." },
                      { name: "options.height", type: "number", range: "100-2160", default: "1080", desc: "Viewport height." },
                      { name: "options.fullPage", type: "boolean", default: "false", desc: "Capture entire scrollable content." },
                      { name: "options.format", type: "enum", options: "png, jpeg", default: "png", desc: "Image format." },
                      { name: "options.quality", type: "number", range: "1-100", default: "80", desc: "JPEG quality (if format is jpeg)." },
                      { name: "options.timeout", type: "number", range: "5000-60000", default: "30000", desc: "Capture timeout in ms." },
                    ].map((param, i) => (
                      <div key={i} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8 py-4 border-b border-white/5 last:border-0 hover:bg-white/[0.01] transition-colors rounded-lg px-2">
                        <div className="w-40 flex-shrink-0">
                          <span className="font-mono font-bold text-primary">{param.name}</span>
                          <div className="text-[10px] text-slate-500 mt-1 uppercase font-black tracking-tighter">
                            {param.type} {param.range && `(${param.range})`}
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-slate-400">
                            {param.required && <span className="text-red-400 font-black text-[9px] mr-2 uppercase border border-red-400/20 px-1.5 rounded">Required</span>}
                            {param.desc}
                          </p>
                          <p className="text-[10px] text-slate-600 mt-2 font-bold uppercase italic">Default: {param.default}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-500">Success Response</h3>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-emerald-400/5 border border-emerald-400/10">
                  <Download className="w-5 h-5 text-emerald-400" />
                  <div>
                    <p className="text-sm font-bold text-emerald-400">200 OK</p>
                    <p className="text-xs text-slate-500">Returns raw binary data with <code className="text-slate-300 italic">image/png</code> or <code className="text-slate-300 italic">image/jpeg</code> header.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Batch Screenshot Section */}
            <section id="batch-screenshots" className="mb-24 pt-24 border-t border-white/5">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-3xl font-black text-white">Batch Screenshots</h2>
                <span className="bg-primary/10 px-3 py-1 rounded-full text-xs font-black text-primary border border-primary/20">POST</span>
              </div>
              <p className="text-slate-400 mb-8 text-lg">
                Capture up to 10 URLs simultaneously and receive a single ZIP file containing all results.
              </p>
              <div className="bg-surface-dark/30 rounded-2xl border border-white/5 p-8 mb-10">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-32 flex-shrink-0 font-mono font-bold text-primary">urls</div>
                    <div className="flex-1">
                      <span className="text-red-400 font-black text-[9px] mr-2 uppercase border border-red-400/20 px-1.5 rounded">Required</span>
                      <p className="text-sm text-slate-400">Array of strings. Max 10 URLs.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-32 flex-shrink-0 font-mono font-bold text-primary">options</div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-400">Same shared options as single screenshot.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-emerald-400/5 border border-emerald-400/10">
                <Download className="w-5 h-5 text-emerald-400" />
                <div>
                  <p className="text-sm font-bold text-emerald-400">200 OK</p>
                  <p className="text-xs text-slate-500">Returns binary ZIP data with <code className="text-slate-300 italic">application/zip</code> header.</p>
                </div>
              </div>
            </section>

            {/* Health Check */}
            <section id="health-check" className="mb-24 pt-24 border-t border-white/5">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-3xl font-black text-white">Health Check</h2>
                <span className="bg-white/5 px-3 py-1 rounded-full text-xs font-black text-slate-400 border border-white/10 uppercase">GET</span>
              </div>
              <p className="text-slate-400 mb-8">Monitor server health, uptime, and resource usage.</p>
              <div className="bg-black/40 rounded-2xl border border-white/10 p-8 font-mono text-sm shadow-xl">
                <pre className="text-slate-300 italic">
                  {`{
  "status": "ok",
  "timestamp": "2024-01-19T14:48:00Z",
  "uptime": 3600,
  "memory": {
    "used": 142,
    "total": 512,
    "percentage": 27
  },
  "activeBrowsers": 2
}`}
                </pre>
              </div>
            </section>

            {/* Errors */}
            <section id="errors" className="mb-24 pt-24 border-t border-white/5">
              <h2 className="text-3xl font-black text-white mb-8">Error Handling</h2>
              <p className="text-slate-400 mb-10">When something goes wrong, the API returns a standard JSON error structure.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { code: "400", title: "Bad Request", desc: "Validation failed for provided parameters." },
                  { code: "408", title: "Timeout", desc: "Screenshot took longer than defined limit." },
                  { code: "429", title: "Rate Limit", desc: "Maximum requests per window exceeded." },
                  { code: "500", title: "Server Error", desc: "Unexpected error during capture process." },
                ].map((err, i) => (
                  <div key={i} className="p-6 rounded-2xl border border-white/5 bg-surface-dark/20">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-red-400 font-mono font-black">{err.code}</span>
                      <h4 className="text-white font-bold">{err.title}</h4>
                    </div>
                    <p className="text-sm text-slate-500">{err.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>

        {/* Code Playground (Right Column) */}
        <aside className="sticky top-16 hidden xl:flex h-[calc(100vh-64px)] w-[420px] flex-col border-l border-white/5 bg-black/40 backdrop-blur-xl">
          <div className="flex flex-col h-full">
            <div className="px-8 py-6 bg-white/[0.02] border-b border-white/5">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-4">Live Request Example</h3>
              <div className="flex gap-4">
                <button className="px-4 py-1.5 text-xs font-black text-primary bg-primary/10 rounded-lg border border-primary/20 tracking-widest uppercase">cURL</button>
                <button className="px-4 py-1.5 text-xs font-bold text-slate-500 hover:text-white transition-all uppercase">Node.js</button>
              </div>
            </div>

            <div className="flex-1 p-8 font-mono text-[11px] leading-relaxed overflow-y-auto">
              <div className="space-y-4 text-slate-400">
                <div className="flex gap-4">
                  <span className="text-slate-700 select-none">01</span>
                  <span>curl -X <span className="text-primary font-bold">POST</span> {process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.screencapr.com'}/api/screenshot \</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-700 select-none">02</span>
                  <span className="pl-4">-H <span className="text-green-400">"Content-Type: application/json"</span> \</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-700 select-none">03</span>
                  <span className="pl-4">-d <span className="text-orange-400">{"'{"}</span></span>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-700 select-none">04</span>
                  <span className="pl-10">"url": <span className="text-green-400">"https://google.com"</span>,</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-700 select-none">05</span>
                  <span className="pl-10">"options": <span className="text-orange-400">{"{"}</span></span>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-700 select-none">06</span>
                  <span className="pl-16">"width": <span className="text-primary italic">1920</span>,</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-700 select-none">07</span>
                  <span className="pl-16">"fullPage": <span className="text-primary italic">true</span></span>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-700 select-none">08</span>
                  <span className="pl-10"><span className="text-orange-400">{"}"}</span></span>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-700 select-none">09</span>
                  <span className="pl-4"><span className="text-orange-400">{"}'"}</span> \</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-700 select-none">10</span>
                  <span className="pl-4">--output <span className="text-white font-bold">google_shot.png</span></span>
                </div>
              </div>

              <div className="mt-16 bg-primary/5 rounded-2xl border border-primary/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Streaming API</span>
                </div>
                <p className="text-slate-400 leading-relaxed text-[11px]">
                  Unlike traditional APIs, ScreenCapr does not store your images.
                  The response body is the <strong>actual binary file</strong>, allowing you to stream it directly to storage or your frontend.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}