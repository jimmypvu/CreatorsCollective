"use client"

import { useEffect } from "react"

export function FloatingButton() {
  useEffect(() => {
    // The Calendly widget is now initialized in the layout.tsx file
    // This component no longer needs to handle the initialization
  }, [])

  return null // This component no longer renders anything visible
}

