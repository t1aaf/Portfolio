import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { Navbar } from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tariq Hassan - Full Stack Developer",
  description: "Portfolio of Tariq Hassan, a Full Stack Developer with 2 years of experience",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200">
          <Navbar />
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

