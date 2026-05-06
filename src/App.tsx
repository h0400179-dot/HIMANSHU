import Hero from './components/Hero';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-black">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 border-b border-white/5 backdrop-blur-md bg-brand-black/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center shadow-lg shadow-brand-gold/20">
              <span className="font-display font-bold text-black text-xl">I</span>
            </div>
            <span className="font-display font-bold text-2xl tracking-tighter">IVORIX<span className="text-brand-glow">AI</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-white/60">
            <a href="#" className="hover:text-brand-glow transition-colors">Growth Systems</a>
            <a href="#" className="hover:text-brand-glow transition-colors">Case Studies</a>
            <a href="#" className="hover:text-brand-glow transition-colors">Pricing</a>
            <button className="py-2 px-6 rounded-full border border-brand-gold/30 hover:border-brand-gold text-brand-gold transition-all">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />
      
      {/* Footer Micro Trace */}
      <footer className="py-12 px-6 border-t border-white/5 opacity-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs tracking-widest uppercase gap-4">
          <p>© 2026 IVORIX AI SYSTEMS — PRIVATE & CONFIDENTIAL</p>
          <div className="flex gap-8">
             <span>Terms of Intel</span>
             <span>Growth Protocols</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

