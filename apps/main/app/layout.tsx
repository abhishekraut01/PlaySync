import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SessionProvider } from './providers/SessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PlaySync - Listen Music Together',
  description: 'A modern music sync platform to listen with your loved ones',
  icons: {
    icon: '/logo.png',
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}