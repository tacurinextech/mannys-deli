import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Playfair_Display, Open_Sans } from "next/font/google"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { OrderOnlineButton } from "@/components/OrderOnlineButton"

const inter = Inter({ subsets: ["latin"] })

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Manny's Deli",
  description:
    "Experience the best of American and Latin American cuisine at La Esquina Deli. Daily rotating buffet, fresh sandwiches, empanadas, and more. Order online for delivery!",
  keywords: "deli, Latin American food, American cuisine, buffet, empanadas, sandwiches, catering",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${openSans.variable}`}>
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <OrderOnlineButton />
        <Footer />
      </body>
    </html>
  )
}
