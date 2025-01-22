import Script from "next/script"
import { CalendlyInitializer } from "./calendly-initializer"

export function CalendlyWidget() {
  return (
    <>
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        strategy="afterInteractive"
      />
      <link 
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <CalendlyInitializer />
    </>
  )
}
