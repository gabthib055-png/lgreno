// Types partagés — status typé en union pour éviter l'erreur TypeScript
// Type 'string' is not assignable to type '"to_call" | "done"'

export type LeadStatus = 'to_call' | 'done'

export interface Lead {
  id: string
  businessName: string
  phone: string
  city: string
  status: LeadStatus
  assignedTo?: string
  createdAt: string
  notes?: string
}

export interface Agent {
  id: string
  name: string
  email: string
  city: string
  leadsCount: number
  doneCount: number
}

export interface RecruitmentApplication {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  city: string
  message: string
  submittedAt: string
}
