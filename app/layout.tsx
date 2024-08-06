import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CV - Faezov',
  description: 'CV - Faezov',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
