"use client"

import Link from "next/link"
import { Heart } from "lucide-react"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState("")
  const [scrolled, setScrolled] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const isHomePage = pathname === "/"
    const targetId = href.split("#")[1]

    if (isHomePage && targetId) {
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setActiveSection(targetId)
      }
    } else {
      window.location.href = href
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["reviews", "about", "contact"]
      let currentSection = ""

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && window.scrollY >= element.offsetTop - 100) {
          currentSection = section
        }
      }

      setActiveSection(currentSection)
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const targetId = window.location.hash.slice(1)
      setActiveSection(targetId)
    }
  }, [pathname])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-sm" : ""}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-semibold brand-name">
            MuseBoost
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={cn(
                "nav-link",
                pathname === "/" && !activeSection && "brand-gradient-text"
              )}
              onClick={(e) => handleNavClick(e, "/")}
            >
              Home
            </Link>
            <Link
              href="/#about"
              className={cn(
                "nav-link",
                activeSection === "about" && "brand-gradient-text"
              )}
              onClick={(e) => handleNavClick(e, "/#about")}
            >
              About
            </Link>
            <Link
              href="/services"
              className={cn(
                "nav-link",
                pathname === "/services" && "brand-gradient-text"
              )}
            >
              Services
            </Link>
            <Link
              href="/blog"
              className={cn(
                "nav-link",
                pathname === "/blog" && "brand-gradient-text"
              )}
            >
              Blog
            </Link>
            <Link
              href="/#contact"
              className={cn(
                "nav-link",
                activeSection === "contact" && "brand-gradient-text"
              )}
              onClick={(e) => handleNavClick(e, "/#contact")}
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/services"
              className="gradient-button px-6 py-2 font-medium flex items-center gap-2"
            >
              Get Started <Heart className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
