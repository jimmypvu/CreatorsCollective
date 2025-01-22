"use client"

import { useEffect } from "react"
import { createPortal } from "react-dom"

interface CalendlyWidgetProps {
  className?: string;
}

export function CalendlyWidget({ className }: CalendlyWidgetProps) {
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
      script.onload = () => {
        window.Calendly?.initBadgeWidget({
          url: "https://calendly.com/consultation-museboostcollective",
          text: "Get your free Consultation",
          color: "#0069ff",
          textColor: "#ffffff",
          branding: true,
        })

        // Add custom class to Calendly button after it's created
        setTimeout(() => {
          const calendlyButton = document.querySelector('.calendly-badge-widget')
          if (calendlyButton && className) {
            calendlyButton.className += ' ' + className
          }
        }, 100)
      }
      document.body.appendChild(script)
    }

    return () => {
      // Cleanup
      const script = document.querySelector('script[src*="calendly"]')
      const link = document.querySelector('link[href*="calendly"]')
      const widget = document.querySelector('.calendly-badge-widget')
      script?.remove()
      link?.remove()
      widget?.remove()
    }
  }, [className])

  return createPortal(null, document.getElementById('calendly-widget') || document.body)
}
