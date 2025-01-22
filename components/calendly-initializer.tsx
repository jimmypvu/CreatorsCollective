"use client"

import { useEffect } from "react"

export function CalendlyInitializer() {
  useEffect(() => {
    const initWidget = () => {
      window.Calendly?.initBadgeWidget({
        url: "https://calendly.com/consultation-museboostcollective",
        text: "Get your free Consultation",
        color: "#0069ff",
        textColor: "#ffffff",
        branding: true,
      })
    }

    if (window.Calendly) {
      initWidget()
    } else {
      window.addEventListener("calendly:ready", initWidget)
      return () => window.removeEventListener("calendly:ready", initWidget)
    }
  }, [])

  return null
}
