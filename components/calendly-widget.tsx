"use client"

import dynamic from "next/dynamic"
import { useEffect } from "react"

interface CalendlyWidgetProps {
  className?: string;
}

function CalendlyWidgetInner({ className }: CalendlyWidgetProps) {
  useEffect(() => {
    const loadCalendly = async () => {
      // Load Calendly CSS
      const link = document.createElement("link")
      link.href = "https://assets.calendly.com/assets/external/widget.css"
      link.rel = "stylesheet"
      document.head.appendChild(link)

      // Load Calendly JS
      const script = document.createElement("script")
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      document.body.appendChild(script)

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
    }

    loadCalendly()

    return () => {
      // Cleanup if needed
      const script = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
      const link = document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]')
      script?.remove()
      link?.remove()
    }
  }, [className])

  return null
}

// Use dynamic import with ssr: false to avoid hydration issues
export const CalendlyWidget = dynamic<CalendlyWidgetProps>(() => Promise.resolve(CalendlyWidgetInner), {
  ssr: false
})
