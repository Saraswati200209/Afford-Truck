import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Afford Truck Stop - Fuel Up, Freshen Up & Feast!",
  description:
    "Premium truck stop services with authentic Desi Dhaba food, fuel, showers, and rest areas. Serving truck drivers with Nepali hospitality 24/7 in Roscoe, Texas.",
  keywords:
    "truck stop, desi dhaba, Indian food, Nepali food, fuel station, truck parking, showers, rest area, biryani, curry, Texas, Roscoe, Afford Truck Stop",
  openGraph: {
    title: "Afford Truck Stop - Fuel Up, Freshen Up & Feast!",
    description:
      "Premium truck stop services with authentic Desi Dhaba food, fuel, showers, and rest areas. Serving truck drivers with Nepali hospitality 24/7 in Roscoe, Texas.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
