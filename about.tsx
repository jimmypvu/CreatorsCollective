import { Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="/">
          <Heart className="h-6 w-6 text-primary" />
          <span className="sr-only">MuseBoost Collective - Content Creators Agency</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/creators">
            Creators
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#reviews">
            Reviews
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32" id="about">
          <div className="container px-4 md:px-6 mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-center mb-8 text-primary">
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
      <footer className="w-full py-6 bg-primary-dark">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-300">© 2025 MuseBoost Collective. All rights reserved.</p>
            <nav className="flex gap-4">
              <Link className="text-sm hover:underline underline-offset-4 text-gray-300" href="#">
                Terms of Service
              </Link>
              <Link className="text-sm hover:underline underline-offset-4 text-gray-300" href="#">
                Privacy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

