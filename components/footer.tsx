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
          <div className="text-white space-y-2">
            <div className="flex items-center">
              <MapPin className="h-6 w-6 text-white mr-2" />
              <address className="not-italic text-sm">
                <p>28 Zip Street</p>
                <p>Anaheim, CA 29708</p>
              </address>
            </div>
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-white mr-2" />
              <span className="text-sm">info@museboostcollective.io</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-white mr-2" />
              <span className="text-sm">949-414-9754</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition-colors duration-300"
              title="Follow us on Instagram"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition-colors duration-300"
              title="Follow us on Twitter"
            >
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition-colors duration-300"
              title="Follow us on TikTok"
            >
              <TikTokIcon className="h-6 w-6" />
              <span className="sr-only">TikTok</span>
            </Link>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition-colors duration-300"
              title="Connect with us on LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
          <div className="text-white text-sm">
            <p className="text-white text-sm">© {new Date().getFullYear()} MuseBoost Collective</p>
            <div className="flex space-x-4 mt-2">
              <Link className="hover:underline underline-offset-4" href="#" title="Read our Terms of Service">
                Terms of Service
              </Link>
              <Link className="hover:underline underline-offset-4" href="#" title="Read our Privacy Policy">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

