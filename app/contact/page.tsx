import { ContactForm } from "@/components/contact-form"
import { default as CalendlyButton } from "@/components/calendly-button"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar/navbar"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-1 flex items-center justify-center pb-12">
        <div className="w-full max-w-4xl pt-12 mb-12 px-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 mt-6 gradient-header">
            Contact Us
          </h1>
          <div className="space-y-8">
            <ContactForm className="bg-gray-900/20 border-white" />
            <div className="text-center">
              <p className="mb-4 text-lg">Ready to elevate your OF game??🔝🔝
                <br></br>
                Get a free Consultation now🍄⬆️</p>
              <CalendlyButton />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
