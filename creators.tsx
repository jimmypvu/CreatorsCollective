import { Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CreatorsPage() {
  const models = [
    {
      id: 1,
      name: "Jenna",
      specialty: "Fashion",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%208.jpg-Voo8j2OKz20jTyhvuSdqMUxdfrNgdf.jpeg",
    },
    {
      id: 2,
      name: "Alexis",
      specialty: "Commercial",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%203.jpg-K1zWTfGESozdr056Ce7Vs4ndRyfIEe.jpeg",
    },
    {
      id: 3,
      name: "Sophia",
      specialty: "Runway",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%205.jpg-Blha2fqgbuMqodoPPoj4Q9dVvhy0kr.jpeg",
    },
    {
      id: 4,
      name: "Mia",
      specialty: "Print",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%207.jpg-iLwjbadpdAvq0VuPWFwsO0q9xb8VcD.jpeg",
    },
    {
      id: 5,
      name: "Emma",
      specialty: "Fitness",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%209.jpg-KVXoSdvsj8GPiIzLL4ZYfy8UDSfgJE.jpeg",
    },
    {
      id: 6,
      name: "Olivia",
      specialty: "Lifestyle",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%201.jpg-Lwsk7w69YMW6SuxVqXsPbhiB4a9taU.jpeg",
    },
  ]

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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-center mb-8 text-primary">
              Our Creators
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {models.map((model) => (
                <div key={model.id} className="relative overflow-hidden rounded-lg aspect-w-3 aspect-h-4">
                  <Image
                    src={model.image || "/placeholder.svg"}
                    alt={`${model.name} - ${model.specialty} Model`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h2 className="text-2xl font-bold text-white">{model.name}</h2>
                    <p className="text-sm text-gray-300">{model.specialty}</p>
                  </div>
                </div>
              ))}
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

