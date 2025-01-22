"use client"

import { useEffect } from "react"

export function CalendlyWidget() {
  useEffect(() => {
    // Remove any existing Calendly elements
    const existingWidget = document.querySelector('.calendly-badge-widget')
    if (existingWidget) {
      existingWidget.remove()
    }

    // Load Calendly CSS
    if (!document.querySelector('link[href*="calendly"]')) {
      const link = document.createElement("link")
      link.href = "https://assets.calendly.com/assets/external/widget.css"
      link.rel = "stylesheet"
      document.head.appendChild(link)
    }

    // Load Calendly JS
    if (!document.querySelector('script[src*="calendly"]')) {
      const script = document.createElement("script")
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      document.body.appendChild(script)

      script.onload = () => {
        if (window.Calendly) {
          window.Calendly.initBadgeWidget({
            url: 'https://calendly.com/consultation-museboostcollective',
            text: 'Schedule Consultation ',
            color: '#ffffff',
            textColor: '#4B5563',
            branding: false
          })
        }
      }
    }

    return () => {
      // Cleanup
      const widget = document.querySelector('.calendly-badge-widget')
      if (widget) {
        widget.remove()
      }
    }
  }, [])

  return null
}
