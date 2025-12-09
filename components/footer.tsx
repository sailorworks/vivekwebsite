"use client"

import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const footerLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Disclaimer", href: "/disclaimer" },
]

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-navy py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <a href="#home" className="mb-6">
            <span className="text-2xl font-bold text-white">
              Fin<span className="text-gold">Expert</span> CA
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
            © {new Date().getFullYear()} FinExpert CA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
