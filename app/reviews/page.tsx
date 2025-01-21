"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar/navbar"
import Link from "next/link"
import { YelpIcon } from "@/components/icons/yelp-icon"
import { GoogleIcon } from "@/components/icons/google-icon"

const reviews = [
  {
    name: "Sarah J.",
    role: "Lifestyle Creator",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%208.jpg-Voo8j2OKz20jTyhvuSdqMUxdfrNgdf.jpeg",
    comment:
      "MuseBoost Collective totally changed the game for me! My followers are way more engaged now, and I'm making way more money than I ever thought possible. It's like they sprinkled magic dust on my account or something!",
    video: "/placeholder.webm",
  },
  {
    name: "Morgan T.",
    role: "Fitness Influencer",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%203.jpg-K1zWTfGESozdr056Ce7Vs4ndRyfIEe.jpeg",
    comment:
      "These guys really know their stuff! They helped me figure out what content my followers actually want to see. Now my channel's growing like crazy, and I'm having a blast doing it!",
    video: "/placeholder.webm",
  },
  {
    name: "Emma L.",
    role: "Beauty Guru",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%205.jpg-Blha2fqgbuMqodoPPoj4Q9dVvhy0kr.jpeg",
    comment:
      "MuseBoost Collective is like having a bestie who's always there to help. They've got my back 24/7, helping me navigate all the crazy twists and turns of being a content creator. And the best part? My bank account is loving it too!",
    video: "/placeholder.webm",
  },
  {
    name: "Alex R.",
    role: "Tech Reviewer",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%207.jpg-iLwjbadpdAvq0VuPWFwsO0q9xb8VcD.jpeg",
    comment:
      "I used to just talk about phones and laptops, but MuseBoost Collective showed me how to branch out. Now I'm covering all sorts of cool tech stuff, and my viewers are eating it up! My channel's never been this poppin'!",
    video: "/placeholder.webm",
  },
  {
    name: "Olivia P.",
    role: "Travel Vlogger",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%209.jpg-KVXoSdvsj8GPiIzLL4ZYfy8UDSfgJE.jpeg",
    comment:
      "Thanks to MuseBoost Collective, I'm not just traveling anymore - I'm living the dream! They hooked me up with some amazing brand deals, and now I'm making more money than I ever did at my 9-to-5. Pinch me, I must be dreaming!",
    video: "/placeholder.webm",
  },
  {
    name: "Charlie M.",
    role: "Gaming Streamer",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%201.jpg-Lwsk7w69YMW6SuxVqXsPbhiB4a9taU.jpeg",
    comment:
      "MuseBoost Collective taught me how to turn my gaming addiction into cold, hard cash! My streams are lit now, and my viewers can't get enough. Plus, those sweet, sweet subscription numbers keep going up!",
    video: "/placeholder.webm",
  },
]

export default function ReviewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32" id="reviews">
          <div className="container px-4 md:px-6 mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-center mb-8 brand-gradient-text">
              What Our Clients Say
            </h1>
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
                        style={{ objectPosition: "center" }}
                      />
                      <div>
                        <p className="font-semibold">{review.name}</p>
                        <p className="text-sm text-gray-400">{review.role}</p>
                      </div>
                    </div>
                    <p className="text-lg mb-4 flex-grow">{review.comment}</p>
                    <video className="w-full rounded-lg mt-auto" controls>
                      <source src={review.video} type="video/webm" />
                      Your browser does not support the video tag.
                    </video>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div id="yelp-and-google-reviews" className="flex space-x-4 mt-8 justify-center">
            <Link href="https://www.yelp.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <YelpIcon className="h-4 w-4 mr-1" />
              Yelp
            </Link>
            <Link
              href="https://www.google.com/business"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <GoogleIcon className="h-4 w-4 mr-1" />
              Google
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

