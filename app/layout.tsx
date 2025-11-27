import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alexander Lajer Therapy',
  description: 'Integrative Therapy for Children, Adolescents & Young Adults in North London',
  icons: {
    icon: '/images/favicon1.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RR5SPZ07T9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RR5SPZ07T9');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}

