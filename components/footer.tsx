"use client"
import { Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { TikTokIcon } from "./icons/tiktok-icon"
import { YelpIcon } from "./icons/yelp-icon"
import { GoogleIcon } from "./icons/google-icon"

export function Footer() {
  return (
    <footer className="w-full py-6 footer-gradient">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div className="text-white/90 space-y-2">
            <div className="flex items-center">
              <MapPin className="h-6 w-6 text-white/90 mr-2" />
              <address className="not-italic text-sm">
                <p>28 Zip Street</p>
                <p>Anaheim, CA 29708</p>
              </address>
            </div>
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-white/90 mr-2" />
              <p className="text-sm">+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-white/90 mr-2" />
              <a href="mailto:info@museboostcollective.com" className="text-sm hover:text-white transition-colors">
                info@museboostcollective.com
              </a>
            </div>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white transition-colors"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white transition-colors"
            >
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white transition-colors"
            >
              <TikTokIcon className="h-6 w-6" />
              <span className="sr-only">TikTok</span>
            </Link>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-white/80">
          <p>&copy; {new Date().getFullYear()} MuseBoost Collective. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
