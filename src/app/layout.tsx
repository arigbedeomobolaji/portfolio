import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '@src/lib/AntdRegistry'
import './globals.css'
import { ThemeProvider } from '@src/hooks/ThemeContext'
import Navbar from '@src/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Omobolaji Paul',
  description: 'Web and Mobile Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <StyledComponentsRegistry>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
        </StyledComponentsRegistry></body>
    </html>
  )
}
