import "@/styles/globals.css"
import { Dancing_Script } from "next/font/google"
import Script from "next/script"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dancing-script",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dancingScript.variable}`}>
      <head>
        <title>MuseBoost Collective</title>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="beforeInteractive" />
      </head>
      <body className={`min-h-screen bg-black text-white flex flex-col`}>
        {children}
        <Script id="calendly-widget" strategy="afterInteractive">
          {`
            window.onload = function() {
              Calendly.initBadgeWidget({
                url: 'https://calendly.com/consultation-museboostcollective',
                text: 'Get your free Consultation',
                color: '#0069ff',
                textColor: '#ffffff',
                branding: false
              });
            }
          `}
        </Script>
      </body>
    </html>
  )
}



import './globals.css'