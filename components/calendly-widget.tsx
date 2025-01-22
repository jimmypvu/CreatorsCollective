"use client"

import Script from "next/script"
import { useEffect, useCallback } from "react"

export function CalendlyWidget() {
  const initCalendly = useCallback(() => {
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initBadgeWidget({
        url: "https://calendly.com/consultation-museboostcollective",
        text: "Get your free Consultation",
        color: "#0069ff",
        textColor: "#ffffff",
        branding: true,
      })
    }
  }, [])

  useEffect(() => {
    // Add event listener for when Calendly script loads
    window.addEventListener("calendly:ready", initCalendly)

    // Try to initialize if Calendly is already loaded
    if (typeof window !== 'undefined' && window.Calendly) {
      initCalendly()
    }

    return () => {
      window.removeEventListener("calendly:ready", initCalendly)
    }
  }, [initCalendly])

  return (
    <>
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        strategy="afterInteractive"
      />
      <link 
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
    </>
  )
}
