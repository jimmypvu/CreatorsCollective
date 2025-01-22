"use client"

import { default as Button } from "@/components/ui/button"

export function CalendlyButton() {
  const openCalendly = () => {
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/consultation-museboostcollective",
      })
    }
  }

  return (
    <Button onClick={openCalendly} className="text-white hover:bg-gradient-to-r hover:from-teal-700 hover:to-pink-700 z-index-1000">
      Schedule Consultation 🔥🔥🔥
    </Button>
  )
}

export default CalendlyButton
