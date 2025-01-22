import "@/styles/globals.css"
import { Dancing_Script } from "next/font/google"
import { Metadata } from "next"
import { CalendlyWidget } from "@/components/calendly-widget"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dancing-script",
})

export const metadata: Metadata = {
  title: "MuseBoost Collective",
  description: "Empowering creators to reach their full potential",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dancingScript.variable}`}>
      <body className={`min-h-screen bg-black text-white flex flex-col`}>
        {children}
        <CalendlyWidget className="golden-rectangle-button animate-pulse-grow" />
      </body>
    </html>
  )
}