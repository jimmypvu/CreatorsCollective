import { Navbar } from "@/components/navbar/navbar"
import { Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32" id="about">
          <div className="container px-4 md:px-6 mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-center mb-8 brand-gradient-text">
              About MuseBoost Collective
            </h1>
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div>
                <p className="text-lg mb-4">
                  At MuseBoost Collective, we're passionate about empowering content creators to reach their full
                  potential. Our team of industry experts provides tailored strategies, cutting-edge tools, and
                  unwavering support to help you grow your audience, increase your revenue, and build a lasting brand.
                </p>
                <p className="text-lg">
                  With years of experience in the digital landscape, we understand the unique challenges and
                  opportunities that content creators face. We're committed to staying ahead of industry trends and
                  leveraging innovative techniques to ensure our clients' success.
                </p>
                <div className="mt-6">
                  <Link href="/contact" passHref>
                    <Button className="brand-gradient">Contact Us</Button>
                  </Link>
                </div>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="MuseBoost Collective Team"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

