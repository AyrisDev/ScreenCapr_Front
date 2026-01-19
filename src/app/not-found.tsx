import Link from "next/link"
import { Camera, Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-background-dark px-6 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl ambient-glow-blue opacity-10 -z-10 blur-[120px]"></div>

            <div className="text-center space-y-8 animate-in fade-in zoom-in duration-700">
                <div className="relative inline-block">
                    <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full animate-pulse"></div>
                    <div className="relative w-24 h-24 bg-surface-dark border border-white/10 rounded-3xl flex items-center justify-center shadow-2xl">
                        <Camera className="w-12 h-12 text-primary group-hover:rotate-12 transition-transform" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded-lg border-2 border-background-dark shadow-xl uppercase tracking-tighter">
                        404 Error
                    </div>
                </div>

                <div className="space-y-4">
                    <h1 className="text-6xl font-black text-white tracking-tighter">Page <span className="text-primary italic">Not Captured.</span></h1>
                    <p className="text-slate-500 text-lg max-w-md mx-auto">
                        The page you're looking for doesn't exist or has been moved to another dimension.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                    <Link
                        href="/"
                        className="flex items-center gap-2 px-8 py-4 bg-primary text-background-dark font-black rounded-xl hover:scale-105 transition-all shadow-xl shadow-primary/20"
                    >
                        <Home className="w-5 h-5" />
                        Return Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-black rounded-xl hover:bg-white/10 transition-all"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Go Back
                    </button>
                </div>
            </div>

            <div className="absolute bottom-12 text-[10px] font-black uppercase tracking-[0.3em] text-slate-800">
                ScreenCapr Protocol 404 // Out of Range
            </div>
        </div>
    )
}
