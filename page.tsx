import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Mail, MapPin, Phone, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Slider from "react-slick"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Navbar } from "@/components/navbar"
import CreatorsPage from "./creators"

export default function LandingPage() {
  const [fullViewImage, setFullViewImage] = useState(null)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleClick)
    })

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleClick)
      })
    }
  }, [])

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
  }

  const carouselSlides = [
    [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%208.jpg-Voo8j2OKz20jTyhvuSdqMUxdfrNgdf.jpeg",
        alt: "Model 1",
        size: "large",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%203.jpg-K1zWTfGESozdr056Ce7Vs4ndRyfIEe.jpeg",
        alt: "Model 2",
        size: "small",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%205.jpg-Blha2fqgbuMqodoPPoj4Q9dVvhy0kr.jpeg",
        alt: "Model 3",
        size: "medium",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%207.jpg-iLwjbadpdAvq0VuPWFwsO0q9xb8VcD.jpeg",
        alt: "Model 4",
        size: "small",
      },
    ],
    [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%209.jpg-KVXoSdvsj8GPiIzLL4ZYfy8UDSfgJE.jpeg",
        alt: "Model 5",
        size: "large",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%201.jpg-Lwsk7w69YMW6SuxVqXsPbhiB4a9taU.jpeg",
        alt: "Model 6",
        size: "medium",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%208.jpg-Voo8j2OKz20jTyhvuSdqMUxdfrNgdf.jpeg",
        alt: "Model 7",
        size: "small",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%203.jpg-K1zWTfGESozdr056Ce7Vs4ndRyfIEe.jpeg",
        alt: "Model 8",
        size: "medium",
      },
    ],
    [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%205.jpg-Blha2fqgbuMqodoPPoj4Q9dVvhy0kr.jpeg",
        alt: "Model 9",
        size: "large",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%207.jpg-iLwjbadpdAvq0VuPWFwsO0q9xb8VcD.jpeg",
        alt: "Model 10",
        size: "small",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%209.jpg-KVXoSdvsj8GPiIzLL4ZYfy8UDSfgJE.jpeg",
        alt: "Model 11",
        size: "medium",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%201.jpg-Lwsk7w69YMW6SuxVqXsPbhiB4a9taU.jpeg",
        alt: "Model 12",
        size: "small",
      },
    ],
    [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%208.jpg-Voo8j2OKz20jTyhvuSdqMUxdfrNgdf.jpeg",
        alt: "Model 13",
        size: "medium",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%203.jpg-K1zWTfGESozdr056Ce7Vs4ndRyfIEe.jpeg",
        alt: "Model 14",
        size: "large",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%205.jpg-Blha2fqgbuMqodoPPoj4Q9dVvhy0kr.jpeg",
        alt: "Model 15",
        size: "small",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%207.jpg-iLwjbadpdAvq0VuPWFwsO0q9xb8VcD.jpeg",
        alt: "Model 16",
        size: "medium",
      },
    ],
    [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%209.jpg-KVXoSdvsj8GPiIzLL4ZYfy8UDSfgJE.jpeg",
        alt: "Model 17",
        size: "large",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%201.jpg-Lwsk7w69YMW6SuxVqXsPbhiB4a9taU.jpeg",
        alt: "Model 18",
        size: "medium",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%208.jpg-Voo8j2OKz20jTyhvuSdqMUxdfrNgdf.jpeg",
        alt: "Model 19",
        size: "small",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%203.jpg-K1zWTfGESozdr056Ce7Vs4ndRyfIEe.jpeg",
        alt: "Model 20",
        size: "medium",
      },
    ],
  ]

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <style jsx global>{`
        .image-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          grid-auto-rows: 150px;
          gap: 10px;
        }
        .image-item {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        .image-item:hover {
          transform: scale(1.05);
        }
        .image-item.large {
          grid-column: span 2;
          grid-row: span 2;
        }
        .image-item.medium {
          grid-column: span 2;
        }
        @media (max-width: 640px) {
          .image-grid {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            grid-auto-rows: 100px;
          }
          .image-item.large, .image-item.medium {
            grid-column: span 1;
            grid-row: span 1;
          }
        }
        .full-view {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .full-view img {
          max-width: 90%;
          max-height: 90%;
          object-fit: contain;
        }
        .close-button {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          color: white;
          font-size: 30px;
          cursor: pointer;
        }
      `}</style>
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-8 md:py-16 lg:py-24 xl:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Welcome to MuseBoost Collective
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Empowering content creators to reach their full potential and maximize their earnings.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="brand-gradient">Get Started</Button>
                <Button className="brand-gradient">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-8 md:py-12 mt-[-2rem] md:mt-[-3rem]">
          <div className="container px-4 md:px-6 mx-auto">
            <Slider {...carouselSettings} className="max-w-5xl mx-auto">
              {carouselSlides.map((slide, slideIndex) => (
                <div key={slideIndex} className="px-2">
                  <div className="image-grid">
                    {slide.map((image, imageIndex) => (
                      <div
                        key={imageIndex}
                        className={`image-item ${image.size}`}
                        onClick={() => setFullViewImage(image)}
                      >
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        <section id="reviews" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900/20">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 brand-gradient-text">
              What Our Clients Say
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              <Card className={cn("bg-gray-900/20 border-white text-white")}>
                <CardContent className="p-6">
                  <p className="text-lg mb-4">
                    "MuseBoost transformed my online presence. My engagement and earnings have skyrocketed!"
                  </p>
                  <p className="font-semibold">- Sarah J., Lifestyle Creator</p>
                </CardContent>
              </Card>
              <Card className={cn("bg-gray-900/20 border-white text-white")}>
                <CardContent className="p-6">
                  <p className="text-lg mb-4">
                    "The team's expertise in content strategy has been invaluable. I've seen tremendous growth in my
                    following."
                  </p>
                  <p className="font-semibold">- Mike T., Fitness Influencer</p>
                </CardContent>
              </Card>
              <Card className={cn("bg-gray-900/20 border-white text-white")}>
                <CardContent className="p-6">
                  <p className="text-lg mb-4">
                    "Their 24/7 support and guidance have been crucial in navigating the complex world of content
                    creation."
                  </p>
                  <p className="font-semibold">- Emma L., Beauty Guru</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 brand-gradient-text">
              About Us
            </h2>
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

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900/20">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 max-w-4xl mx-auto">
              <div>
                <h3 className="text-2xl font-semibold mb-4 brand-gradient-text nav-link">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-white mr-2" />
                    <span>info@museboostcollective.io</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-white mr-2" />
                    <span>949-414-9754</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-white mr-2" />
                    <span>
                      28 Zip Street
                      <br />
                      Anaheim, CA 29708
                    </span>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {fullViewImage && (
        <div className="full-view" onClick={() => setFullViewImage(null)}>
          <button className="close-button" onClick={() => setFullViewImage(null)}>
            <X />
          </button>
          <img src={fullViewImage.src || "/placeholder.svg"} alt={fullViewImage.alt} />
        </div>
      )}
    </div>
  )
}

