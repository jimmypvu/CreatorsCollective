"use client"

import { useState } from "react"
import { default as Button } from "@/components/ui/button"
import { Heart, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { default as Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Navbar } from "@/components/navbar/navbar"

const services = [
  {
    title: "Content Strategy",
    description: "Content planning based on algorithmic testing to cater best to your niche and audience",
    modalContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    videoUrl: "https://www.youtube.com",
  },
  {
    title: "Brand Partnerships",
    description: "We connect you with brands that align with your values and help negotiate beneficial partnerships.",
    modalContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    videoUrl: "https://www.youtube.com",
  },
  {
    title: "Performance Analytics",
    description:
      "We provide detailed analytics and insights to help you understand and improve your content performance.",
    modalContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    videoUrl: "https://www.youtube.com",
  },
  {
    title: "Custom AI Twin",
    description:
      "Create your personalized AI twin that engages with fans 24/7 via text and voice, generating passive income even while you sleep.",
    modalContent: `Experience the future of fan engagement with your own AI twin that interacts just like you would:

• Customized AI personality that matches your style and brand
• Text and voice interactions that feel authentic
• 24/7 fan engagement (even when you're busy or sleeping)
• Built-in monetization features
• Easy 5-minute setup process
• Full training and support

Perfect for creators looking to scale their fan interaction while maintaining personal authenticity.`,
    videoUrl: "https://www.youtube.com",
  },
  {
    title: "AI Chat Team & Upsell Scripts",
    description:
      "Expert team of AI chat managers armed with proven upsell scripts to maximize your revenue through personalized fan interactions.",
    modalContent: `Leverage our dedicated team of AI chat specialists and proven conversion strategies:

• Trained AI chat managers dedicated to your account
• Proven upsell scripts customized to your brand
• Strategic conversation flows for maximum conversion
• Regular performance reviews and script optimization
• Real-time adaptation to fan responses
• Detailed conversion analytics and reporting

Our team ensures every interaction is an opportunity for growth while maintaining authentic connections with your fans.`,
    videoUrl: "https://www.youtube.com",
  },
  {
    title: "Custom Tip Menu & Pricing",
    description:
      "Data-driven pricing strategies and customized tip menus designed to maximize your earnings while maintaining fan satisfaction.",
    modalContent: `Optimize your revenue with our comprehensive pricing strategy service:

• Custom-designed tip menu based on market research
• Dynamic pricing strategies for different fan segments
• Premium package creation and positioning
• Psychological pricing techniques
• Regular market analysis and price optimization
• A/B testing of different menu layouts and prices

We help you find the perfect balance between maximizing revenue and maintaining fan loyalty.`,
    videoUrl: "https://www.youtube.com",
  },
  {
    title: "Professional Content Evolution",
    description:
      "Transform your content strategy to focus on sophisticated, mainstream-friendly content that maximizes your earning potential.",
    modalContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    videoUrl: "https://www.youtube.com",
  },
  {
    title: "Model Merch & Extras Storefront",
    description:
      "Launch your personal branded merchandise and exclusive content through our integrated storefront solution.",
    modalContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    videoUrl: "https://www.youtube.com",
  },
  {
    title: "Cross Platform Marketing Campaigns",
    description:
      "We create and manage integrated marketing campaigns across multiple social media platforms to maximize your reach and engagement.",
    modalContent: `Leverage our expertise in cross-platform marketing to expand your audience and boost your brand:

• Tailored strategies for each social media platform
• Consistent brand messaging across all channels
• Content repurposing to maximize efficiency
• Performance tracking and analytics for each platform
• Influencer collaborations and partnerships
• Paid advertising management across platforms

Our cross-platform approach ensures your content reaches the right audience on every platform, increasing your overall impact and ROI.`,
    videoUrl: "https://www.youtube.com",
  },
  {
    title: "DCAA Content and Copyright Protection",
    description:
      "We monitor clear and darknet socials for any crossposted or copyright infringed content to protect your IP and cash rights.",
    modalContent: `Protect your valuable content and intellectual property with our comprehensive DCAA Content and Copyright Protection service:

• 24/7 monitoring of clear web and darknet social platforms
• Advanced AI-powered content recognition technology
• Rapid detection of unauthorized crossposting and copyright infringement
• Immediate takedown notices for infringing content
• Legal support for enforcing your intellectual property rights
• Regular reports on detected infringements and actions taken
• Proactive measures to prevent future content theft

Our team works tirelessly to ensure your content remains exclusive and your revenue streams are protected.`,
    videoUrl: "https://www.youtube.com",
  },
  {
    title: "Custom AI Avatar for Streams and Games",
    description:
      "Create a personalized AI-powered avatar for use in Twitch streams and 3D games, enhancing your brand and audience engagement.",
    modalContent: `Elevate your streaming and gaming presence with a custom AI avatar tailored to your brand:

• Cutting-edge AI technology for realistic facial expressions and movements
• Seamless integration with popular streaming platforms like Twitch
• Compatible with major 3D game engines for unique in-game experiences
• Voice-sync capability for live interactions during streams
• Customizable appearance to match your brand identity
• Regular updates and improvements based on the latest AI advancements
• Technical support for smooth implementation and ongoing use

Perfect for content creators looking to stand out in the crowded streaming and gaming space while maintaining a consistent brand presence.`,
    videoUrl: "https://www.youtube.com",
  },
  {
    title: "Content Post Production & Studio Lease",
    description:
      "Professional post-production services and studio space rental for local creators to elevate their content quality.",
    modalContent: `Enhance your content creation process with our state-of-the-art facilities and expert post-production team:

• Fully equipped studio space for rent
• Professional lighting and sound equipment
• Green screen and versatile backdrops
• High-end editing workstations
• Expert post-production team for video and audio editing
• Color grading and visual effects services
• Voiceover recording and audio mixing

Perfect for local creators looking to take their content to the next level without the overhead of owning expensive equipment.`,
    videoUrl: "https://www.youtube.com",
  },
]

const ServiceCard = ({ service, index }) => {
  return (
    <Dialog key={index}>
      <DialogTrigger asChild>
        <div className="bg-gray-900/20 border border-white rounded-lg p-6 hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer relative">
          <a
            href={service.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-2 right-2 inline-flex items-center justify-center w-auto h-8 px-2 py-1 text-sm rounded-full bg-white/10 hover:bg-white/20 transition-all duration-500 overflow-hidden group"
            onClick={(e) => e.stopPropagation()}
            title={`Learn more about ${service.title}`}
          >
            <span className="transition-opacity duration-500 group-hover:opacity-0">Learn More</span>
            <span className="absolute transition-opacity duration-500 opacity-0 group-hover:opacity-100 text-[0.65rem]">
              🤔❓🎬↪️👀
            </span>
          </a>
          <h2 className="text-xl font-semibold mb-2 text-teal-400">{service.title}</h2>
          <p className="text-gray-300">{service.description}</p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white">
        <DialogHeader>
          <DialogTitle>{service.title}</DialogTitle>
          <DialogDescription className="text-gray-300 whitespace-pre-line">{service.modalContent}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-center mb-8 gradient-header">
              Our Services
            </h1>
            <div className="grid gap-6 lg:grid-cols-3 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/contact" passHref>
                <Button className="bg-white text-black hover:bg-gray-200" title="Schedule a free consultation">
                  Get a Consultation, 1st one's on us 🥳
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
