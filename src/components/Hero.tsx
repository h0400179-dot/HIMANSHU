import { motion } from 'motion/react';
import { ArrowRight, Zap, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center pt-24 pb-12 px-6">
      {/* Background elements */}
      <div className="absolute inset-0 circuit-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 blur-[120px] -z-10 rounded-full translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-orange/5 blur-[120px] -z-10 rounded-full -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-y-1"
          >
            <div className="h-0.5 w-8 gold-gradient mr-3" />
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-brand-glow">
              Automate Your Growth
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-medium tracking-tight leading-[1.05]"
          >
            Turn Attention Into <br />
            <span className="gold-text-gradient">Revenue — Automatically</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed"
          >
            We build AI-powered growth systems that attract, engage, and convert your audience into paying customers on autopilot.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button className="gold-gradient hover:opacity-90 py-4 px-8 rounded-full font-medium flex items-center justify-center transition-all group shadow-lg shadow-brand-gold/20 text-base">
              Get Your AI System
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/5 border border-white/10 hover:bg-white/10 py-4 px-8 rounded-full font-medium flex items-center justify-center transition-all backdrop-blur-sm text-base">
              <Calendar className="mr-2 w-4 h-4 text-brand-gold" />
              Book Free Strategy Call
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex items-center space-x-2 text-sm text-white/40 pt-4"
          >
            <Zap className="w-4 h-4 text-brand-glow" />
            <p>Automate lead capture, responses, and conversions with AI</p>
          </motion.div>
        </div>

        {/* Right Visual Placeholder */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[400px]">
          <div className="relative w-full aspect-square max-w-[450px] flex items-center justify-center">
            {/* Outer Decorative Rings */}
            {[1, 1.2, 1.4].map((scale, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.1, scale: scale }}
                transition={{ duration: 1.5, delay: i * 0.2 }}
                className="absolute inset-0 rounded-full border border-brand-gold/30"
              />
            ))}

            {/* Central Placeholder Mesh Orb */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative w-2/3 h-2/3 rounded-full border border-white/10 bg-black/40 backdrop-blur-3xl shadow-[0_0_50px_rgba(245,158,11,0.1)] overflow-hidden flex items-center justify-center"
            >
              {/* Internal Circuitry Pattern */}
              <div className="absolute inset-0 circuit-grid opacity-20 rotate-45" />
              
              {/* Core Glow */}
              <div className="w-1/3 h-1/3 rounded-full gold-gradient blur-2xl opacity-40 animate-pulse" />
              
              {/* Scanning Line */}
              <motion.div 
                animate={{ y: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 h-1 gold-gradient opacity-20 blur-sm z-10"
              />
              
              {/* Text indicator */}
              <div className="z-20 flex flex-col items-center">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-glow/60 mb-1">Integrating</span>
                <span className="text-xs uppercase tracking-[0.2em] font-display text-white/40">3D AI Avatar</span>
              </div>
            </motion.div>

            {/* Floating Orbitals */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 z-30"
            >
              <div className="absolute top-0 left-1/2 -ml-2 w-4 h-4 glass-panel rounded-full border-brand-gold/40 shadow-lg shadow-brand-gold/20" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
