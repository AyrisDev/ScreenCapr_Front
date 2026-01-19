import Link from "next/link"
import { Camera, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 px-6 bg-background-dark/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1 border-r border-white/5 pr-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <Camera className="w-5 h-5 text-background-dark font-bold" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">ScreenCapr</span>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">
            The high-performance screenshot infrastructure for modern web applications at scale.
          </p>
        </div>

        <div className="space-y-4">
          <h5 className="font-bold text-white text-sm uppercase tracking-widest">Product</h5>
          <ul className="flex flex-col gap-3 text-sm text-slate-500">
            <li><Link href="/features" className="hover:text-primary transition-colors">Features</Link></li>
            <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
            <li><Link href="/api-docs" className="hover:text-primary transition-colors">Documentation</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h5 className="font-bold text-white text-sm uppercase tracking-widest">Support</h5>
          <ul className="flex flex-col gap-3 text-sm text-slate-500">
            <li><Link href="/contact" className="hover:text-primary transition-colors">Help Center</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            <li><Link href="/api-docs#health-check" className="hover:text-primary transition-colors">Status</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h5 className="font-bold text-white text-sm uppercase tracking-widest">Legal</h5>
          <ul className="flex flex-col gap-3 text-sm text-slate-500">
            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            <li><Link href="https://twitter.com/screencapr" className="hover:text-primary transition-colors">Twitter (X)</Link></li>
            <li><Link href="https://github.com/screencapr" className="hover:text-primary transition-colors">GitHub</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
        <p>© 2024 ScreenCapr Inc. All rights reserved. Built with precision for developers.</p>
        <Link
          href="https://ayris.tech"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-1.5 text-slate-500 hover:text-primary transition-all duration-300"
        >
          <span className="font-medium">Created by</span>
          <span className="font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:to-primary transition-all duration-300">
            ayristech
          </span>
          <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
        </Link>
      </div>
    </footer>
  )
}