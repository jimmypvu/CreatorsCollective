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

    // Load Calendly CSS
    const loadCalendlyCSS = () => {
      if (!document.querySelector('link[href*="calendly"]')) {
        const link = document.createElement("link")
        link.href = "https://assets.calendly.com/assets/external/widget.css"
        link.rel = "stylesheet"
        document.head.appendChild(link)
      }
    }

    // Load Calendly JS
    const loadCalendlyJS = () => {
      return new Promise<void>((resolve) => {
        if (!document.querySelector('script[src*="calendly"]')) {
          const script = document.createElement("script")
          script.src = "https://assets.calendly.com/assets/external/widget.js"
          script.async = true
          script.onload = () => resolve()
          document.body.appendChild(script)
        } else {
          resolve()
        }
      })
    }

    // Initialize widget
    const initWidget = () => {
      if (window.Calendly) {
        // Remove any existing widget first
        const existingWidget = document.querySelector('.calendly-badge-widget')
        if (existingWidget) {
          existingWidget.remove()
        }

        // Initialize new widget
        window.Calendly.initBadgeWidget({
          url: 'https://calendly.com/consultation-museboostcollective',
          text: 'Schedule Consultation ',
          color: '#ffffff',
          textColor: '#4B5563',
          branding: false
        })
      }
    }

    const initialize = async () => {
      try {
        loadCalendlyCSS()
        await loadCalendlyJS()
        
        // Small delay to ensure everything is loaded
        setTimeout(initWidget, 100)
      } catch (error) {
        console.error('Error initializing Calendly:', error)
      }
    }

    initialize()

    return () => {
      const widget = document.querySelector('.calendly-badge-widget')
      if (widget) {
        widget.remove()
      }
    }
  }, [isClient])

  return null
}
