"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Camera, ChevronRight, Menu, X } from "lucide-react"

export function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const navLinks = [
    { name: "Features", href: "/features" },
    { name: "API Docs", href: "/api-docs" },
    { name: "Pricing", href: "/pricing" },
  ]

  // Close menu when pathname changes
  React.useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-background-dark/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-primary/20">
            <Camera className="text-background-dark font-black w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tight text-white leading-none">ScreenCapr</span>
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest mt-1">v2.0 Beta</span>
          </div>
        </Link>

        {/* Desktop Navigation - Pill Style */}
        <nav className="hidden lg:flex items-center bg-white/[0.03] border border-white/5 px-2 py-1.5 rounded-2xl gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-bold px-5 py-2 rounded-xl transition-all ${isActive
                  ? "bg-white/10 text-white shadow-sm ring-1 ring-white/10"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/screenshot"
            className={`hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-xl font-black text-sm transition-all ${pathname === "/screenshot"
              ? "bg-white/5 text-white border border-white/10"
              : "bg-primary text-background-dark hover:scale-105 shadow-xl shadow-primary/20"
              }`}
          >
            {pathname === "/screenshot" ? "Workspace" : "Get Started"}
            <ChevronRight className="w-4 h-4" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white transition-colors hover:bg-white/10"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-primary" /> : <Menu className="w-5 h-5 text-primary" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 top-20 bg-background-dark/95 backdrop-blur-2xl transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"}`}>
        <nav className="flex flex-col p-6 gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xl font-black p-6 rounded-2xl transition-all flex items-center justify-between group ${isActive ? "bg-primary/10 text-primary" : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                {link.name}
                <ChevronRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isActive ? "opacity-100" : "opacity-0"}`} />
              </Link>
            )
          })}
          <div className="mt-8 pt-8 border-t border-white/5">
            <Link
              href="/screenshot"
              className="flex items-center justify-center gap-2 w-full py-5 rounded-2xl bg-primary text-background-dark font-black text-lg shadow-xl shadow-primary/20"
            >
              {pathname === "/screenshot" ? "Go to Workspace" : "Get Started Now"}
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}