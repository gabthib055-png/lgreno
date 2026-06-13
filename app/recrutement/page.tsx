'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const perks = [
  { icon: '💰', title: 'Commission attractive', desc: 'Jusqu\'à 20% par contrat signé, versée chaque semaine.' },
  { icon: '🕐', title: 'Liberté totale', desc: 'Travaillez quand vous voulez, où vous voulez. Aucun horaire imposé.' },
  { icon: '📱', title: 'Outils fournis', desc: 'Accès à notre CRM, scripts de vente et formations en ligne.' },
  { icon: '🚀', title: 'Évolution rapide', desc: 'Les meilleurs agents deviennent Team Leader en 3 mois.' },
]

interface FormState {
  firstName: string
  lastName: string
  email: string
  phone: string
  city: string
  message: string
}

const initialForm: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  city: '',
  message: '',
}

export default function RecrutementPage() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    // Simulated submit delay
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#05050f] text-white">
      {/* Header */}
      <div className="border-b border-white/5 bg-[#080812]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center">
              <span className="text-white font-black text-sm">D</span>
            </div>
            <span className="text-white font-semibold text-sm hidden sm:block">
              Digiclick <span className="text-violet-400">Connect Pro</span>
            </span>
          </a>
          <a href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
            ← Retour au site
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-2 mb-6 text-sm text-violet-300">
            🔥 On recrute des agents commerciaux
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-4 tracking-tight">
            Rejoignez notre réseau
            <br />
            <span className="gradient-text">d&apos;agents indépendants</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Vendez nos solutions de digitalisation aux commerçants de votre région et
            gagnez des commissions élevées sans aucun investissement.
          </p>
        </motion.div>

        {/* Perks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {perks.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]"
            >
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="text-white font-semibold text-sm mb-1">{p.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10">
            <h2 className="text-xl font-bold text-white mb-6 text-center">
              Postulez en 2 minutes
            </h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-white font-bold text-lg mb-2">Candidature reçue !</h3>
                <p className="text-gray-400 text-sm">
                  Notre équipe vous contacte sous 24h pour un entretien rapide.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-xs mb-1.5">Prénom *</label>
                    <input
                      required
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Jean"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs mb-1.5">Nom *</label>
                    <input
                      required
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Dupont"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/60 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-xs mb-1.5">Email *</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jean@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/60 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-xs mb-1.5">Téléphone *</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="06 12 34 56 78"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs mb-1.5">Ville *</label>
                    <input
                      required
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Paris"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/60 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-xs mb-1.5">
                    Pourquoi voulez-vous rejoindre notre réseau ?
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Parlez-nous de votre expérience en vente..."
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/60 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full text-white font-semibold text-sm hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                >
                  {loading ? 'Envoi en cours...' : 'Envoyer ma candidature →'}
                </button>

                <p className="text-gray-600 text-xs text-center">
                  Réponse garantie sous 24h · Aucun frais d&apos;inscription
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
