'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Lead, LeadStatus } from '@/types'

const myLeads: Lead[] = [
  { id: '1', businessName: 'Boulangerie Martin', phone: '06 12 34 56 78', city: 'Paris', status: 'to_call', createdAt: '2026-06-10', notes: 'Intéressé par e-commerce' },
  { id: '2', businessName: 'Boutique Élégance', phone: '07 11 22 33 44', city: 'Marseille', status: 'to_call', createdAt: '2026-06-11' },
  { id: '3', businessName: 'Pharmacie Centrale', phone: '06 77 88 99 00', city: 'Toulouse', status: 'done', createdAt: '2026-06-08', notes: 'Signé — Pack Starter' },
]

const STATUS_LABELS: Record<LeadStatus, string> = {
  to_call: 'À appeler',
  done: 'Signé ✓',
}

const STATUS_STYLES: Record<LeadStatus, string> = {
  to_call: 'bg-orange-500/15 text-orange-300 border border-orange-500/30',
  done: 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30',
}

export default function AgentPage() {
  const [leads, setLeads] = useState<Lead[]>(myLeads)
  const [notes, setNotes] = useState<Record<string, string>>({})

  function markDone(id: string) {
    setLeads((prev) =>
      prev.map((l) => (l.id === id ? { ...l, status: 'done' as LeadStatus } : l))
    )
  }

  function markToCall(id: string) {
    setLeads((prev) =>
      prev.map((l) => (l.id === id ? { ...l, status: 'to_call' as LeadStatus } : l))
    )
  }

  const toCallCount = leads.filter((l) => l.status === 'to_call').length
  const doneCount = leads.filter((l) => l.status === 'done').length

  return (
    <div className="min-h-screen bg-[#05050f] text-white">
      {/* Header */}
      <div className="border-b border-white/5 bg-[#080812]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center">
              <span className="text-white font-black text-sm">D</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-lg leading-none">Espace Agent</h1>
              <p className="text-gray-500 text-xs mt-0.5">Digiclick Connect Pro</p>
            </div>
          </div>
          <a href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
            ← Retour au site
          </a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Welcome + stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-black text-white mb-1">Bonjour, Agent 👋</h2>
          <p className="text-gray-400 text-sm">Voici vos leads du jour.</p>

          <div className="grid grid-cols-3 gap-4 mt-5">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-center">
              <div className="text-2xl font-black text-white">{leads.length}</div>
              <div className="text-gray-500 text-xs mt-1">Leads assignés</div>
            </div>
            <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 text-center">
              <div className="text-2xl font-black text-orange-300">{toCallCount}</div>
              <div className="text-gray-500 text-xs mt-1">À appeler</div>
            </div>
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
              <div className="text-2xl font-black text-emerald-300">{doneCount}</div>
              <div className="text-gray-500 text-xs mt-1">Signés</div>
            </div>
          </div>
        </motion.div>

        {/* Leads list */}
        <div className="space-y-4">
          {leads.map((lead, i) => (
            <motion.div
              key={lead.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className={`p-5 rounded-2xl border transition-all ${
                lead.status === 'done'
                  ? 'bg-white/[0.01] border-white/5 opacity-70'
                  : 'bg-white/[0.03] border-white/10'
              }`}
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-white font-semibold">{lead.businessName}</h3>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${STATUS_STYLES[lead.status]}`}>
                      {STATUS_LABELS[lead.status]}
                    </span>
                  </div>
                  <div className="text-gray-400 text-sm mt-1">
                    📍 {lead.city} &nbsp;·&nbsp; 📞{' '}
                    <a href={`tel:${lead.phone}`} className="hover:text-violet-400 transition-colors">
                      {lead.phone}
                    </a>
                  </div>
                  {lead.notes && (
                    <p className="text-gray-500 text-xs mt-1.5 italic">{lead.notes}</p>
                  )}
                </div>

                <div className="flex gap-2 flex-shrink-0">
                  {lead.status === 'to_call' ? (
                    <button
                      onClick={() => markDone(lead.id)}
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-full text-white text-xs font-semibold transition-colors"
                    >
                      ✓ Marquer signé
                    </button>
                  ) : (
                    <button
                      onClick={() => markToCall(lead.id)}
                      className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-gray-400 text-xs font-semibold transition-colors"
                    >
                      Remettre en attente
                    </button>
                  )}
                </div>
              </div>

              {/* Notes field */}
              {lead.status === 'to_call' && (
                <div className="mt-3">
                  <input
                    type="text"
                    placeholder="Ajouter une note..."
                    value={notes[lead.id] ?? ''}
                    onChange={(e) => setNotes((prev) => ({ ...prev, [lead.id]: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-violet-500/50 transition-colors"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
