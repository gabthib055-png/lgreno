'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Starter',
    description: 'Idéal pour lancer votre présence en ligne',
    monthly: 490,
    annual: 390,
    badge: null,
    highlight: false,
    features: [
      'Site vitrine professionnel',
      'Optimisation SEO de base',
      'Intégration réseaux sociaux',
      'Formulaire de contact',
      'Hébergement inclus',
      'Support par email',
      '1 révision mensuelle',
    ],
    cta: 'Commencer',
    ctaClass:
      'bg-white/5 border border-white/15 hover:bg-white/10 text-white',
  },
  {
    name: 'Pro',
    description: 'Pour les commerces qui veulent croître rapidement',
    monthly: 990,
    annual: 790,
    badge: 'Le plus populaire',
    highlight: true,
    features: [
      'Boutique e-commerce complète',
      'Application mobile iOS & Android',
      'SEO avancé + Google Ads',
      'Dashboard analytics temps réel',
      'Automatisation email marketing',
      'Support prioritaire 7j/7',
      'Révisions illimitées',
      'Intégration paiement sécurisé',
    ],
    cta: 'Commencer avec Pro',
    ctaClass:
      'bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:shadow-lg hover:shadow-violet-500/30',
  },
  {
    name: 'Enterprise',
    description: 'Solutions sur mesure pour grandes enseignes',
    monthly: null,
    annual: null,
    badge: null,
    highlight: false,
    features: [
      'Tout ce qui est dans Pro',
      'Développement sur mesure',
      'Infrastructure dédiée',
      'Manager de compte dédié',
      'SLA garanti 99.9%',
      'Support téléphone 24/7',
      'Formation équipe incluse',
      'Intégrations ERP / CRM',
    ],
    cta: 'Nous contacter',
    ctaClass:
      'bg-white/5 border border-white/15 hover:bg-white/10 text-white',
  },
]

const CheckIcon = () => (
  <svg
    className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
)

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-[#05050f] relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-violet-900/[0.08] blur-[140px] bottom-0 right-0" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-900/[0.08] blur-[100px] top-0 left-0" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6 text-sm text-emerald-300">
            ✦ Tarifs
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Des prix transparents,
            <br />
            <span className="gradient-text">des résultats garantis</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Choisissez la formule adaptée à votre commerce. Sans frais cachés, sans mauvaise surprise.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-full p-1.5 gap-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                !annual ? 'bg-white text-black shadow' : 'text-gray-400 hover:text-white'
              }`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                annual ? 'bg-white text-black shadow' : 'text-gray-400 hover:text-white'
              }`}
            >
              Annuel
              <span className="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded-full font-bold">
                −20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className={`relative flex flex-col p-7 sm:p-8 rounded-2xl border transition-all duration-300 ${
                plan.highlight
                  ? 'border-violet-500/50 bg-gradient-to-b from-violet-900/25 to-blue-900/15'
                  : 'border-white/8 bg-white/[0.02]'
              }`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-violet-600 to-blue-600 text-white text-xs font-bold rounded-full shadow-lg shadow-violet-500/30 whitespace-nowrap">
                    ⭐ {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan name */}
              <div className="mb-5">
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                {plan.monthly !== null ? (
                  <>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-white">
                        {annual ? plan.annual : plan.monthly}€
                      </span>
                      <span className="text-gray-400 text-sm">/mois</span>
                    </div>
                    {annual && (
                      <p className="text-emerald-400 text-xs mt-1 font-medium">
                        Économisez {((plan.monthly - (plan.annual ?? 0)) * 12).toLocaleString('fr-FR')}€/an
                      </p>
                    )}
                  </>
                ) : (
                  <div className="text-4xl sm:text-5xl font-black text-white">Sur devis</div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-gray-300 text-sm">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-[1.03] ${plan.ctaClass}`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-600 text-sm mt-10"
        >
          Tous les plans incluent un essai de 14 jours — aucune carte bancaire requise pour commencer.
        </motion.p>
      </div>
    </section>
  )
}
