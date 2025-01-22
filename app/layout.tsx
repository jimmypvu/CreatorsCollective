import "@/styles/globals.css"
import { Dancing_Script } from "next/font/google"
import Script from "next/script"
import { Metadata } from "next"

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
        <Script 
          src="https://assets.calendly.com/assets/external/widget.js" 
          strategy="lazyOnload"
        />
        <Script
          id="calendly-widget"
          strategy="lazyOnload"
        >
          {`
            Calendly.initBadgeWidget({
              url: 'https://calendly.com/consultation-museboostcollective',
              text: 'Get your free Consultation',
              color: '#0069ff',
              textColor: '#ffffff',
              branding: true
            });
          `}
        </Script>
        <link 
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
          precedence="default"
        />
      </body>
    </html>
  )
}