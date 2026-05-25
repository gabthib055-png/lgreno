'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#05050f]">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[700px] h-[700px] rounded-full bg-violet-700/[0.15] blur-[140px] -top-48 -left-32 animate-blob" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-700/[0.12] blur-[120px] top-1/2 -right-32 animate-blob animation-delay-2000" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-700/[0.1] blur-[100px] -bottom-32 left-1/3 animate-blob animation-delay-4000" />
      </div>

      {/* Dot grid */}
      <div className="absolute inset-0 bg-grid-pattern" />

      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05050f]/10 to-[#05050f]" />

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto pt-20 pb-16">
        {/* Live badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-10 text-sm text-gray-300 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Solutions digitales premium pour commerces ambitieux
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.04] tracking-tight"
        >
          Transformez votre
          <br />
          <span className="gradient-text">commerce en empire</span>
          <br />
          digital
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Digiclick Connect Pro propulse votre commerce dans l&apos;ère digitale avec des solutions
          e-commerce, applications mobiles et stratégies marketing sur mesure.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#pricing"
            className="group px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-violet-500/30 transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center"
          >
            Commencer maintenant
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#services"
            className="px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto text-center"
          >
            Voir nos services
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-20 grid grid-cols-3 gap-4 sm:gap-10 max-w-lg mx-auto"
        >
          {[
            { value: '500+', label: 'Commerces digitalisés' },
            { value: '98%', label: 'Clients satisfaits' },
            { value: '3×', label: 'Croissance moyenne' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-4xl font-black text-white">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1 leading-tight">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex flex-col items-center gap-2 text-gray-600"
        >
          <span className="text-xs uppercase tracking-widest">Découvrir</span>
          <div className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
