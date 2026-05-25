import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Digiclick Connect Pro — Digitalisez votre commerce',
  description:
    'Solutions digitales premium pour transformer votre commerce : e-commerce, applications mobiles, SEO et marketing digital.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
