import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ranking Quiz Flow Games',
  description: 'Ranking of a quiz from Flow Games',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-100 text-zinc-900">{children}</body>
    </html>
  )
}
