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
      try {
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
          
          await new Promise<void>((resolve) => {
            script.onload = () => resolve()
            document.body.appendChild(script)
          })
        }

        // Initialize widget after script is loaded
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
      } catch (error) {
        console.error('Error initializing Calendly:', error)
      }
    }

    // Initialize Calendly
    initializeCalendly()

    // Cleanup function
    return () => {
      if (!isClient) return
      const widget = document.querySelector('.calendly-badge-widget')
      if (widget) {
        widget.remove()
      }
    }
  }, [isClient])

  return null
}
