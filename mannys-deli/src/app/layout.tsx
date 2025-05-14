import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { OrderOnlineButton } from "@/components/OrderOnlineButton"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Manny's Deli",
  description:
    "Authentic multicultural cuisine featuring flavors from US, Ecuador, Mexico, Guatemala, El Salvador, and Honduras",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <OrderOnlineButton />
        <Footer />
      </body>
    </html>
  )
}
