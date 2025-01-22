"use client"

import { useEffect, useState } from "react"

export function CalendlyWidget() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const initializeCalendly = async () => {
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
        
        return new Promise((resolve) => {
          script.onload = () => {
            if (window.Calendly) {
              window.Calendly.initBadgeWidget({
                url: 'https://calendly.com/consultation-museboostcollective',
                text: 'Schedule Consultation 🔥',
                color: '#ffffff',
                textColor: '#4B5563',
                branding: false
              })
            }
            resolve()
          }
          document.body.appendChild(script)
        })
      }
    }

    initializeCalendly()

    return () => {
      if (!isClient) return
      // Cleanup
      const widget = document.querySelector('.calendly-badge-widget')
      if (widget) {
        widget.remove()
      }
    }
  }, [isClient])

  // Don't render anything on the server
  if (!isClient) return null

  return null
}
