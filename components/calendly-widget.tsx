"use client"

import { useEffect, useState } from "react"

declare global {
  interface Window {
    Calendly?: any
  }
}

export function CalendlyWidget() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    let scriptLoaded = false
    let linkLoaded = false

    const initializeCalendly = () => {
      if (window.Calendly && scriptLoaded && linkLoaded) {
        // Remove any existing widget first
        const existingWidget = document.querySelector('.calendly-badge-widget')
        if (existingWidget) {
          existingWidget.remove()
        }

        // Initialize new widget
        window.Calendly.initBadgeWidget({
          url: 'https://calendly.com/consultation-museboostcollective',
          text: 'Schedule Consultation 🔥',
          color: '#ffffff',
          textColor: '#4B5563',
          branding: false
        })
      }
    }

    // Load Calendly CSS
    if (!document.querySelector('link[href*="calendly"]')) {
      const link = document.createElement("link")
      link.href = "https://assets.calendly.com/assets/external/widget.css"
      link.rel = "stylesheet"
      link.onload = () => {
        linkLoaded = true
        initializeCalendly()
      }
      document.head.appendChild(link)
    } else {
      linkLoaded = true
    }

    // Load Calendly JS
    if (!document.querySelector('script[src*="calendly"]')) {
      const script = document.createElement("script")
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      script.onload = () => {
        scriptLoaded = true
        initializeCalendly()
      }
      document.body.appendChild(script)
    } else {
      scriptLoaded = true
    }

    if (scriptLoaded && linkLoaded) {
      initializeCalendly()
    }

    return () => {
      const widget = document.querySelector('.calendly-badge-widget')
      if (widget) {
        widget.remove()
      }
    }
  }, [isClient])

  return null
}
