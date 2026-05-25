'use client'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Sophie Marchand',
    role: 'Gérante',
    company: 'Boulangerie Artisanale Paris',
    initials: 'SM',
    avatarGradient: 'from-violet-500 to-purple-600',
    rating: 5,
    quote:
      'Digiclick Connect Pro a complètement transformé notre boulangerie. Nous vendons maintenant en ligne dans tout Paris et nos revenus ont triplé en 6 mois. L\'équipe est vraiment au top !',
  },
  {
    name: 'Jean-Paul Rossini',
    role: 'Propriétaire',
    company: 'Restaurant Le Provençal',
    initials: 'JR',
    avatarGradient: 'from-blue-500 to-cyan-600',
    rating: 5,
    quote:
      'L\'application mobile que nous a fournie Digiclick est incroyable. Nos clients réservent directement, commandent en avance et les avis Google ont explosé. Meilleur investissement de l\'année.',
  },
  {
    name: 'Amina Benali',
    role: 'Directrice',
    company: 'Boutique Mode Lyon',
    initials: 'AB',
    avatarGradient: 'from-emerald-500 to-teal-600',
    rating: 5,
    quote:
      'Le SEO et la boutique en ligne ont changé notre business. On reçoit maintenant des commandes de toute la France. L\'accompagnement est personnalisé et les résultats sont là dès le premier mois.',
  },
]

const StarIcon = () => (
  <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[#080812] relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[700px] h-[300px] rounded-full bg-blue-900/[0.08] blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
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
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6 text-sm text-blue-300">
            ✦ Témoignages clients
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Ils ont fait confiance
            <br />
            <span className="gradient-text">à Digiclick Connect Pro</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Des centaines de commerçants ont déjà transformé leur activité avec nos solutions.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="p-6 rounded-2xl bg-white/[0.025] border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <StarIcon key={j} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed flex-grow mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.avatarGradient} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-gray-500 text-xs">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-8 text-gray-600"
        >
          {['Google Reviews ⭐ 4.9/5', 'Trustpilot ⭐ 4.8/5', '500+ clients', '3 ans d\'expérience'].map((badge) => (
            <span key={badge} className="text-sm font-medium">
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
