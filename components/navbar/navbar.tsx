"use client"

import Link from "next/link"
import { Heart } from "lucide-react"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

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
      const element = document.getElementById(targetId)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
          setActiveSection(targetId)
        }, 100)
      }
    }
  }, [pathname])

  return (
    <>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--accent-teal))" />
            <stop offset="100%" stopColor="hsl(var(--accent-pink))" />
          </linearGradient>
        </defs>
      </svg>
      <header
        className={`sticky-navbar px-4 lg:px-6 h-14 flex items-center justify-between ${scrolled ? "bg-black/50" : "bg-black"} hover:bg-black`}
      >
        <Link className="flex items-center justify-center group" href="/" title="MuseBoost Home">
          <span className="font-cursive text-3xl font-bold italic brand-gradient-text">Muse+</span>
          <span className="heart-icon ml-2 group-hover:heart-hover">
            <Heart className="h-5.5 w-5.5 text-white italic" strokeWidth={2} />
          </span>
          <span className="sr-only">MuseBoost Collective - Content Creators Agency</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            className={`nav-link relative ${
              pathname === "/services"
                ? "active brand-gradient-text animate-gradient-rotation after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white/70"
                : "text-white"
            }`}
            href="/services"
            title="View our Services"
          >
            Services
          </Link>
          <Link
            className={`nav-link relative ${
              pathname === "/creators"
                ? "active brand-gradient-text animate-gradient-rotation after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white/70"
                : "text-white"
            }`}
            href="/creators"
            title="Meet our Creators"
          >
            Creators
          </Link>
          <Link
            className={`nav-link relative ${
              pathname === "/blog"
                ? "active brand-gradient-text animate-gradient-rotation after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white/70"
                : "text-white"
            }`}
            href="/blog"
            title="Read our Blog"
          >
            Blog
          </Link>
          <Link
            className={`nav-link relative ${
              activeSection === "reviews"
                ? "active brand-gradient-text animate-gradient-rotation after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white/70"
                : "text-white"
            }`}
            href="/#reviews"
            onClick={(e) => handleNavClick(e, "/#reviews")}
            title="See what our Clients have to say"
          >
            Reviews
          </Link>
          <Link
            className={`nav-link relative ${
              activeSection === "about"
                ? "active brand-gradient-text animate-gradient-rotation after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white/70"
                : "text-white"
            }`}
            href="/#about"
            onClick={(e) => handleNavClick(e, "/#about")}
            title="Learn about Us"
          >
            About
          </Link>
          <Link
            className={`nav-link relative ${
              activeSection === "contact" || pathname === "/contact"
                ? "active brand-gradient-text animate-gradient-rotation after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white/70"
                : "text-white"
            }`}
            href="/contact"
            title="Get in Touch"
          >
            Contact
          </Link>
        </nav>
      </header>
    </>
  )
}
