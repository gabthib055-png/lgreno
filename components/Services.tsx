'use client'
import { motion } from 'framer-motion'

const services = [
  {
    icon: '🛒',
    title: 'Site E-Commerce',
    description:
      'Boutique en ligne professionnelle avec gestion des stocks, paiements sécurisés et expérience d\'achat optimisée pour convertir.',
    gradientFrom: 'from-violet-500/15',
    gradientTo: 'to-purple-500/5',
    border: 'border-violet-500/20 hover:border-violet-400/40',
    accent: 'text-violet-400',
  },
  {
    icon: '📱',
    title: 'Application Mobile',
    description:
      'Applications iOS & Android natives ou cross-platform qui fidélisent vos clients et boostent vos ventes partout.',
    gradientFrom: 'from-blue-500/15',
    gradientTo: 'to-cyan-500/5',
    border: 'border-blue-500/20 hover:border-blue-400/40',
    accent: 'text-blue-400',
  },
  {
    icon: '📊',
    title: 'Analytics & Reporting',
    description:
      'Tableaux de bord en temps réel pour suivre vos performances, ventes et comportements clients avec précision.',
    gradientFrom: 'from-emerald-500/15',
    gradientTo: 'to-teal-500/5',
    border: 'border-emerald-500/20 hover:border-emerald-400/40',
    accent: 'text-emerald-400',
  },
  {
    icon: '🔍',
    title: 'SEO & Visibilité',
    description:
      'Stratégie SEO avancée pour dominer les résultats Google et attirer des clients qualifiés en continu, 24h/24.',
    gradientFrom: 'from-orange-500/15',
    gradientTo: 'to-yellow-500/5',
    border: 'border-orange-500/20 hover:border-orange-400/40',
    accent: 'text-orange-400',
  },
  {
    icon: '⚡',
    title: 'Automatisation',
    description:
      'Workflows intelligents pour automatiser vos tâches répétitives : emails, gestion des stocks, commandes et relances.',
    gradientFrom: 'from-pink-500/15',
    gradientTo: 'to-rose-500/5',
    border: 'border-pink-500/20 hover:border-pink-400/40',
    accent: 'text-pink-400',
  },
  {
    icon: '📣',
    title: 'Marketing Digital',
    description:
      'Stratégies multicanales sur réseaux sociaux, Google Ads et email marketing pour maximiser votre retour sur investissement.',
    gradientFrom: 'from-amber-500/15',
    gradientTo: 'to-orange-500/5',
    border: 'border-amber-500/20 hover:border-amber-400/40',
    accent: 'text-amber-400',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#05050f] relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-violet-900/[0.08] blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-2 mb-6 text-sm text-violet-300">
            ✦ Nos Services
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Tout ce qu&apos;il faut pour
            <br />
            <span className="gradient-text">dominer le digital</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Des solutions complètes et intégrées pour transformer chaque aspect de votre présence digitale.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className={`group relative p-6 rounded-2xl bg-gradient-to-br ${s.gradientFrom} ${s.gradientTo} border ${s.border} transition-all duration-300 hover:-translate-y-1.5 cursor-default`}
            >
              <div className="text-4xl mb-4 select-none">{s.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
              <div className={`mt-4 text-sm font-semibold ${s.accent} flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                En savoir plus <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
