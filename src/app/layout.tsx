import type { Metadata } from 'next'
import { Baloo_2 } from 'next/font/google'
import './globals.css'

const inter = Baloo_2({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hotseat game',
  description: 'This is an 18+ rated game',
  openGraph: {
    title: 'Hotseat game',
    description: 'This is an 18+ rated game',
    images : 'https://hotseat-game.vercel.app/meta.png'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
