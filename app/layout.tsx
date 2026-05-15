import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DevHealth — Posture & Break Reminders for Developers',
  description: 'Smart reminders based on coding activity with exercises designed for developers\u2019 common pain points. Stay healthy while you code.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0b386936-bd53-483f-b143-afa8b34761c0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
