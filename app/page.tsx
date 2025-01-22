"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { default as Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Mail, MapPin, Phone, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Navbar } from "@/components/navbar/navbar"
import { YelpIcon } from "@/components/icons/yelp-icon"
import { GoogleIcon } from "@/components/icons/google-icon"
import { carouselSlides } from "@/data/carouselSlides"
import { reviews } from "@/data/reviews"

export default function LandingPage() {
  const [mounted, setMounted] = useState(false)
  const [fullViewImage, setFullViewImage] = useState<{ src: string; alt: string } | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    handleHashChange() // Handle hash on initial load
    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
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
    adaptiveHeight: false,
    fade: true,
    lazyLoad: 'progressive' as const,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          fade: false,
        }
      }
    ]
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {mounted && (
        <>
          <style jsx global>{`
            .image-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
              grid-auto-rows: 200px;
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
                grid-auto-rows: 150px;
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
            .aspect-w-16 {
              position: relative;
              padding-bottom: 56.25%;
            }
            .aspect-w-16 > * {
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
            }
          `}</style>
          <Navbar />
          <main className="flex-1">
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
              <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                      Welcome to{" "}
                      <span className="font-cursive font-bold italic brand-gradient-text text-4xl sm:text-4xl md:text-5xl lg:text-6xl">
                        MuseBoost
                      </span>{" "}
                      Collective
                    </h1>
                    <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl dark:text-gray-400">
                      Empowering content creators to reach their full potential and maximize their earnings
                    </p>
                  </div>
                  <div className="flex space-x-6">
                    <Button
                      className="bg-white text-gray-900 hover:bg-gradient-to-r hover:from-teal-700 hover:to-pink-700 hover:text-white transition-all duration-300 sm:font-bold"
                      onClick={() => {
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                      }}
                      title="Contact us to get started"
                    >
                      Get Started 🚀📈
                    </Button>
                    <Button
                      className="bg-white text-gray-900 hover:bg-gradient-to-r hover:from-teal-700 hover:to-pink-700 hover:text-white transition-all duration-300 sm:font-bold"
                      onClick={() => {
                        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                      }}
                      title="Who we are and what we do 💁"
                    >
                      Learn More 🧐
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            <section className="w-full pt-8 pb-4 md:pt-12 md:pb-6 mt-[-2rem] md:mt-[-3rem]">
              <div className="container px-4 md:px-6 mx-auto">
                <div className="aspect-w-16">
                  <Slider {...carouselSettings} className="h-full max-w-5xl mx-auto">
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
                                fill
                                className="rounded-lg object-cover"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                {...(slideIndex === 0 && imageIndex === 0
                                  ? { priority: true }
                                  : { loading: "lazy" })}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </section>

            <section id="reviews" className="w-full py-8 md:py-16 lg:py-24 bg-gray-900/20">
              <div className="container px-4 md:px-6 mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 gradient-header">
                  What Our Clients Say
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                  {reviews.map((review, index) => (
                    <Card key={index} className={cn("bg-gray-900/20 border-white text-white")}>
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex items-center mb-4">
                          <Image
                            src={review.image || "/placeholder.svg"}
                            alt={`${review.name}'s profile`}
                            width={60}
                            height={60}
                            className="rounded-full mr-4 object-cover w-[60px] h-[60px]"
                          />
                          <div>
                            <p className="font-semibold">{review.name}</p>
                            <p className="text-sm text-gray-400">{review.role}</p>
                          </div>
                        </div>
                        <p className="text-lg mb-4 flex-grow">{review.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div id="yelp-and-google-reviews" className="flex space-x-4 mt-4 justify-center">
                <Link
                  href="https://www.yelp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-gray-300"
                  title="Read our Yelp reviews"
                >
                  <YelpIcon className="h-4 w-4 mr-1" />
                  Yelp
                </Link>
                <Link
                  href="https://www.google.com/business"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-gray-300"
                  title="Read our Google reviews"
                >
                  <GoogleIcon className="h-4 w-4 mr-1" />
                  Google
                </Link>
              </div>
            </section>

            <section id="about" className="w-full py-12 md:py-24 lg:py-32">
              <div className="container px-4 md:px-6 mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 gradient-header">
                  About Us
                </h2>
                <div className="grid gap-6 lg:grid-cols-2 items-center">
                  <div>
                    <p className="text-lg mb-4">
                      At MuseBoost Collective, we're passionate about empowering content creators to reach their full
                      earning potential. CONTENT has, is, and will still be the wave to ride for at least several more
                      decades, and our mission is to get each and every creator we work with to catch the wave ASAP and ride
                      it into an early, kushy retirement 😮‍💨💨😌 Our team of industry experts provides tried and proven
                      content strategies, growth hacks that feel illegal to know, and customized, bleeding-edge AI and
                      marketing solutions to give you the edge you need in today's content economy. We give you the
                      unwavering support to help you grow your audience, increase your revenue, and build a lasting brand
                      and strong, steady stream of digital income 💦💵💦💰💦💵🥴🫠
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
                      fill
                      className="rounded-lg object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900/20">
              <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
                  <div className="lg:w-1/3">
                    <h3 className="text-2xl font-semibold mb-4 brand-gradient-text">Get in Touch</h3>
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
                  <div className="lg:w-2/3">
                    <ContactForm />
                  </div>
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
        </>
      )}
    </div>
  )
}
