import type React from "react"
import type { Metadata } from "next"
import { Merriweather, Inter } from "next/font/google"
import { ReadingProvider } from "@/context/reading-context"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import "./globals.css"

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "BookNest - Discover Your Next Favorite Read",
  description: "Browse, read, and review books in our cozy online reading community",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merriweather.variable} font-sans antialiased`}>
        <ReadingProvider>
          <Navbar />
          {children}
          <Footer />
        </ReadingProvider>
      </body>
    </html>
  )
}
