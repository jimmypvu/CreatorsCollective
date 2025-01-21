"use client"

import { Button } from "@/components/ui/button"

export function CalendlyButton() {
  const openCalendly = () => {
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/consultation-museboostcollective",
      })
    }
  }

  return (
    <Button onClick={openCalendly} className="bg-white text-black hover:bg-gray-200">
      Schedule Consultation 🔥🔥🔥
    </Button>
  )
}

