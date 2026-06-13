'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Lead, LeadStatus } from '@/types'

const mockLeads: Lead[] = [
  { id: '1', businessName: 'Boulangerie Martin', phone: '06 12 34 56 78', city: 'Paris', status: 'to_call', assignedTo: 'Agent Sophie', createdAt: '2026-06-10', notes: 'Intéressé par e-commerce' },
  { id: '2', businessName: 'Restaurant Le Sud', phone: '06 98 76 54 32', city: 'Lyon', status: 'done', assignedTo: 'Agent Marc', createdAt: '2026-06-09', notes: 'Signé — Pack Pro' },
  { id: '3', businessName: 'Boutique Élégance', phone: '07 11 22 33 44', city: 'Marseille', status: 'to_call', assignedTo: 'Agent Sophie', createdAt: '2026-06-11' },
  { id: '4', businessName: 'Auto Services Plus', phone: '06 55 44 33 22', city: 'Bordeaux', status: 'to_call', assignedTo: 'Agent Karim', createdAt: '2026-06-12' },
  { id: '5', businessName: 'Pharmacie Centrale', phone: '06 77 88 99 00', city: 'Toulouse', status: 'done', assignedTo: 'Agent Marc', createdAt: '2026-06-08', notes: 'Signé — Pack Starter' },
  { id: '6', businessName: 'Coiffure Tendance', phone: '07 33 44 55 66', city: 'Nantes', status: 'to_call', assignedTo: 'Agent Karim', createdAt: '2026-06-13' },
]

const stats = [
  { label: 'Leads total', value: '6', color: 'from-violet-500 to-purple-600' },
  { label: 'À appeler', value: '4', color: 'from-orange-500 to-amber-600' },
  { label: 'Signés', value: '2', color: 'from-emerald-500 to-teal-600' },
  { label: 'Agents actifs', value: '3', color: 'from-blue-500 to-cyan-600' },
]

const STATUS_LABELS: Record<LeadStatus, string> = {
  to_call: 'À appeler',
  done: 'Signé',
}

const STATUS_STYLES: Record<LeadStatus, string> = {
  to_call: 'bg-orange-500/15 text-orange-300 border border-orange-500/30',
  done: 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30',
}

export default function AdminPage() {
  const [leads, setLeads] = useState<Lead[]>(mockLeads)
  const [filter, setFilter] = useState<LeadStatus | 'all'>('all')

  const filtered = filter === 'all' ? leads : leads.filter((l) => l.status === filter)

  function toggleStatus(id: string) {
    setLeads((prev) =>
      prev.map((l) =>
        l.id === id
          ? { ...l, status: l.status === 'to_call' ? 'done' : ('to_call' as LeadStatus) }
          : l
      )
    )
  }

  return (
    <div className="min-h-screen bg-[#05050f] text-white">
      {/* Header */}
      <div className="border-b border-white/5 bg-[#080812]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center">
              <span className="text-white font-black text-sm">D</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-lg leading-none">Dashboard Admin</h1>
              <p className="text-gray-500 text-xs mt-0.5">Digiclick Connect Pro</p>
            </div>
          </div>
          <a href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
            ← Retour au site
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]"
            >
              <div className={`text-3xl font-black bg-gradient-to-r ${s.color} bg-clip-text text-transparent`}>
                {s.value}
              </div>
              <div className="text-gray-400 text-sm mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Leads table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/[0.02] border border-white/[0.08] rounded-2xl overflow-hidden"
        >
          {/* Table header */}
          <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between flex-wrap gap-3">
            <h2 className="text-white font-semibold">Leads ({filtered.length})</h2>
            <div className="flex gap-2">
              {(['all', 'to_call', 'done'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    filter === f
                      ? 'bg-violet-600 text-white'
                      : 'bg-white/5 text-gray-400 hover:text-white'
                  }`}
                >
                  {f === 'all' ? 'Tous' : STATUS_LABELS[f]}
                </button>
              ))}
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-white/5">
            {filtered.map((lead) => (
              <div
                key={lead.id}
                className="px-6 py-4 flex items-center gap-4 hover:bg-white/[0.02] transition-colors flex-wrap"
              >
                <div className="flex-1 min-w-[160px]">
                  <div className="text-white text-sm font-medium">{lead.businessName}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{lead.city} · {lead.phone}</div>
                </div>
                <div className="text-gray-400 text-xs hidden sm:block">{lead.assignedTo ?? '—'}</div>
                <div className="text-gray-500 text-xs hidden md:block">{lead.createdAt}</div>
                {lead.notes && (
                  <div className="text-gray-600 text-xs hidden lg:block max-w-[200px] truncate">{lead.notes}</div>
                )}
                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${STATUS_STYLES[lead.status]}`}>
                  {STATUS_LABELS[lead.status]}
                </span>
                <button
                  onClick={() => toggleStatus(lead.id)}
                  className="text-xs text-gray-500 hover:text-violet-400 transition-colors underline underline-offset-2 whitespace-nowrap"
                >
                  Changer statut
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
