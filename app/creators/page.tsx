"use client"

import { useState } from "react"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar/navbar"
import { DollarSign, UserPlus, Clock, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import "@/styles/creators.css"
import Button from "@/components/ui/button"

const creators = [
  {
    id: 1,
    name: "Jenna",
    beforeStats: "Only 500 followers with minimal engagement",
    monthlyGrowth: 1200,
    monthlyEarnings: 25000,
    timeInvested: "45",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%208.jpg-Voo8j2OKz20jTyhvuSdqMUxdfrNgdf.jpeg",
    quote:
      "Working with MuseBoost Collective has been a game-changer for my career. Their strategies helped me grow my audience exponentially and increase my earnings beyond what I thought was possible.",
  },
  {
    id: 2,
    name: "Alexis",
    beforeStats: "Struggling to maintain consistent content schedule",
    monthlyGrowth: 950,
    monthlyEarnings: 18000,
    timeInvested: "30",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%203.jpg-K1zWTfGESozdr056Ce7Vs4ndRyfIEe.jpeg",
    quote:
      "The support from MuseBoost Collective has been invaluable. They've helped me streamline my content creation process and connect with brands that align with my values.",
  },
  {
    id: 3,
    name: "Sophia",
    beforeStats: "Limited reach and engagement on posts",
    monthlyGrowth: 1500,
    monthlyEarnings: 30000,
    timeInvested: "50",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%205.jpg-Blha2fqgbuMqodoPPoj4Q9dVvhy0kr.jpeg",
    quote:
      "Since joining MuseBoost Collective, my engagement rates have skyrocketed. Their personalized strategies have helped me build a loyal and active community around my content.",
  },
  {
    id: 4,
    name: "Mia",
    beforeStats: "Low conversion rates on sponsored posts",
    monthlyGrowth: 1100,
    monthlyEarnings: 22000,
    timeInvested: "40",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%207.jpg-iLwjbadpdAvq0VuPWFwsO0q9xb8VcD.jpeg",
    quote:
      "MuseBoost Collective's expertise in brand partnerships has been a game-changer. They've helped me secure high-paying collaborations and significantly boost my conversion rates.",
  },
  {
    id: 5,
    name: "Emma",
    beforeStats: "Inconsistent brand collaborations",
    monthlyGrowth: 800,
    monthlyEarnings: 15000,
    timeInvested: "25",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%209.jpg-KVXoSdvsj8GPiIzLL4ZYfy8UDSfgJE.jpeg",
    quote:
      "The team at MuseBoost Collective has transformed my approach to brand collaborations. I'm now working with brands I love and seeing consistent growth in my earnings.",
  },
  {
    id: 6,
    name: "Olivia",
    beforeStats: "Difficulty attracting high-paying clients",
    monthlyGrowth: 1300,
    monthlyEarnings: 28000,
    timeInvested: "48",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%201.jpg-Lwsk7w69YMW6SuxVqXsPbhiB4a9taU.jpeg",
    quote:
      "MuseBoost Collective has opened doors to opportunities I never thought possible. Their network and negotiation skills have helped me land high-paying clients and elevate my brand.",
  },
  {
    id: 7,
    name: "Ava",
    beforeStats: "Lack of a clear content strategy",
    monthlyGrowth: 1000,
    monthlyEarnings: 20000,
    timeInvested: "35",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%208.jpg-Voo8j2OKz20jTyhvuSdqMUxdfrNgdf.jpeg",
    quote:
      "The content strategy developed by MuseBoost Collective has given my channel a clear direction. I'm now creating content that resonates with my audience and drives growth.",
  },
  {
    id: 8,
    name: "Isabella",
    beforeStats: "Limited audience engagement",
    monthlyGrowth: 750,
    monthlyEarnings: 16000,
    timeInvested: "20",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%203.jpg-K1zWTfGESozdr056Ce7Vs4ndRyfIEe.jpeg",
    quote:
      "MuseBoost Collective's strategies for audience engagement have been transformative. My community is more active than ever, and it's reflected in my growth and earnings.",
  },
  {
    id: 9,
    name: "Sophie",
    beforeStats: "Difficulty scaling their content creation",
    monthlyGrowth: 1600,
    monthlyEarnings: 32000,
    timeInvested: "55",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%205.jpg-Blha2fqgbuMqodoPPoj4Q9dVvhy0kr.jpeg",
    quote:
      "With MuseBoost Collective's guidance, I've been able to scale my content creation without sacrificing quality. Their tools and techniques have been invaluable in growing my channel.",
  },
  {
    id: 10,
    name: "Mila",
    beforeStats: "Struggling to find their niche",
    monthlyGrowth: 900,
    monthlyEarnings: 19000,
    timeInvested: "32",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%207.jpg-iLwjbadpdAvq0VuPWFwsO0q9xb8VcD.jpeg",
    quote:
      "MuseBoost Collective helped me identify and develop my unique niche. This focus has attracted a dedicated audience and opened up new monetization opportunities.",
  },
  {
    id: 11,
    name: "Aria",
    beforeStats: "Lack of professional guidance",
    monthlyGrowth: 1400,
    monthlyEarnings: 29000,
    timeInvested: "47",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%209.jpg-KVXoSdvsj8GPiIzLL4ZYfy8UDSfgJE.jpeg",
    quote:
      "The professional guidance from MuseBoost Collective has been instrumental in my growth. Their expertise has helped me navigate the complexities of content creation and monetization.",
  },
  {
    id: 12,
    name: "Zoe",
    beforeStats: "Difficulty managing their online presence",
    monthlyGrowth: 850,
    monthlyEarnings: 17000,
    timeInvested: "28",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/of%20girl%201.jpg-Lwsk7w69YMW6SuxVqXsPbhiB4a9taU.jpeg",
    quote:
      "MuseBoost Collective has revolutionized how I manage my online presence. Their strategies have helped me build a cohesive brand across platforms and attract a wider audience.",
  },
]

export default function CreatorsPage() {
  const [expandedCreator, setExpandedCreator] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    if (expandedCreator === id) {
      setExpandedCreator(null)
    } else {
      setExpandedCreator(id)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4 brand-gradient-text">
                About our Creators
              </h1>
              <p className="text-xl text-gray-400">
                Find out how our creators transformed their channels with MuseBoost's certified growth hacks
                ⛽🔥🔥💥💯❌
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {creators.map((creator) => (
                <div
                  key={creator.id}
                  className={`creator-card group relative cursor-pointer transition-all duration-300 ${
                    expandedCreator === creator.id ? "col-span-full md:col-span-2 lg:col-span-3" : ""
                  }`}
                  onClick={() => toggleExpand(creator.id)}
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                    <Image
                      src={creator.image || "/placeholder.svg"}
                      alt={`${creator.name}'s Portfolio`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-opacity duration-500 opacity-75 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{creator.name}</h3>
                        {expandedCreator !== creator.id ? (
                          <div className="space-y-2 creator-stats">
                            <p className="flex items-center">
                              <DollarSign className="w-5 h-5 mr-2 text-green-400" />
                              Monthly Earnings: <span className="text-green-400 ml-1">+${creator.monthlyEarnings}</span>
                            </p>
                            <p className="flex items-center">
                              <UserPlus className="w-5 h-5 mr-2 text-red-400" />
                              Monthly Growth: <span className="text-red-400 ml-1">+{creator.monthlyGrowth} fans</span>
                            </p>
                            <p className="flex items-center">
                              <Clock className="w-5 h-5 mr-2 text-blue-400" />
                              Daily Time Investment:{" "}
                              <span className="text-blue-400 ml-1">{creator.timeInvested} minutes</span>
                            </p>
                          </div>
                        ) : (
                          <div className="creator-quote">
                            <p className="text-lg italic">&ldquo;{creator.quote}&rdquo;</p>
                          </div>
                        )}
                        <div className="mt-4 flex justify-center">
                          {expandedCreator === creator.id ? (
                            <ChevronUp className="w-6 h-6" />
                          ) : (
                            <ChevronDown className="w-6 h-6" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/contact" passHref>
              <Button
                className="bg-white text-black hover:bg-gradient-to-r hover:from-teal-700 hover:to-pink-700 hover:text-white transition-all duration-300"
                title="Contact us to give your OnlyFans game a lil boost 😈"
              >
                Give your OF game a
                <span className="brand-gradient-text font-cursive text-5x1 font-bold"> Boost </span>today 🧃💪⬆️ 
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

