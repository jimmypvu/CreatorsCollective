"use client"

import Script from "next/script"
import { useEffect, useCallback, useState } from "react"

export function CalendlyWidget() {
  const [mounted, setMounted] = useState(false)

  const initCalendly = useCallback(() => {
    if (mounted && window.Calendly) {
      window.Calendly.initBadgeWidget({
        url: "https://calendly.com/consultation-museboostcollective",
        text: "Get your free Consultation",
        color: "#0069ff",
        textColor: "#ffffff",
        branding: true,
      })
    }
  }, [mounted])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Add event listener for when Calendly script loads
    window.addEventListener("calendly:ready", initCalendly)

    // Try to initialize if Calendly is already loaded
    if (window.Calendly) {
      initCalendly()
    }

    return () => {
      window.removeEventListener("calendly:ready", initCalendly)
    }
  }, [mounted, initCalendly])

  if (!mounted) return null

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
