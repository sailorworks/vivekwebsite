"use client"

import Image from "next/image"
import { Twitter, Linkedin, Instagram } from "lucide-react"

const footerLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Disclaimer", href: "/disclaimer" },
]

const socialLinks = [
  { 
    name: "LinkedIn", 
    icon: Linkedin, 
    href: "https://www.linkedin.com/in/ca-vivek-prasad?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
  },
  { 
    name: "Instagram", 
    icon: Instagram, 
    href: "https://www.instagram.com/cavivekandco?igsh=ZjlpN3psN3VqcDc=" 
  },
  { 
    name: "Twitter", 
    icon: Twitter, 
    href: "https://x.com/CAVivek123" 
  },
]

export function Footer() {
  return (
    <footer className="bg-navy py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <a href="#home" className="flex flex-col items-center gap-4 mb-6 group">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-gold/30 bg-white transition-transform group-hover:scale-105">
                <Image
                  src="/logosized.png"
                  alt="Vivek Prasad & Co. Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-gold/30 bg-white transition-transform group-hover:scale-105">
                <Image
                  src="/calogoup.png"
                  alt="CA Logo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              VIVEK PRASAD & CO.
            </span>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold/20 flex items-center justify-center transition-colors group"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5 text-slate-300 group-hover:text-gold transition-colors" />
              </a>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            {footerLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-400 hover:text-gold transition-colors text-sm">
                {link.name}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-slate-700 mb-8" />

          {/* Copyright */}
          <p className="text-slate-500 text-sm text-center">
            © {new Date().getFullYear()} Vivek Prasad & Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
