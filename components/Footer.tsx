'use client'
import { motion } from 'framer-motion'

const footerLinks: Record<string, string[]> = {
  Produit: ['Fonctionnalités', 'Tarifs', 'Changelog', 'Roadmap'],
  Services: ['E-Commerce', 'App Mobile', 'SEO', 'Marketing Digital'],
  Entreprise: ['À propos', 'Blog', 'Carrières', 'Contact'],
  Légal: ['Confidentialité', 'CGV', 'Mentions légales', 'Cookies'],
}

const socials = [
  { label: 'LinkedIn', initial: 'in' },
  { label: 'Instagram', initial: '▲' },
  { label: 'Facebook', initial: 'f' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#030309] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-12"
        >
          {/* Brand col */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center">
                <span className="text-white font-black text-base">D</span>
              </div>
              <span className="text-white font-semibold text-sm leading-tight">
                Digiclick
                <br />
                <span className="text-violet-400">Connect Pro</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[220px] mb-4">
              Transformez votre commerce en empire digital avec nos solutions premium.
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <button
                  key={s.label}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all text-xs font-bold"
                >
                  {s.initial}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white text-sm font-semibold mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-xs">
            © {year} Digiclick Connect Pro. Tous droits réservés.
          </p>
          <p className="text-gray-700 text-xs">
            Fait avec ♥ pour les commerçants ambitieux
          </p>
        </div>
      </div>
    </footer>
  )
}
