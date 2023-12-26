import type { Metadata } from 'next'
import { Baloo_2 } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

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

      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WSGW0XJGWD"
        strategy="afterInteractive"
        async
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-WSGW0XJGWD');
        `}
      </Script>

      <body className={inter.className}>{children}</body>
    </html>
  )
}
