"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Reviews", href: "#reviews" },
  { name: "Insights", href: "#insights" },
  { name: "Contact", href: "#contact" },
]

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (!isMobile) {
      setIsMobileMenuOpen(false)
    }
  }, [isMobile])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLElement> | null, href: string) => {
    if (e) e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleMobileScroll = (href: string) => {
    setIsMobileMenuOpen(false)
    // Wait for sheet close animation
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        // Recalculate offset position manually to be safe
        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.scrollY - headerOffset
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        })
      }
    }, 300)
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-navy/95 backdrop-blur-md shadow-lg" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-gold/30 bg-white">
              <Image
                src="/logosized.png"
                alt="Vivek Prasad & Co. Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xl lg:text-2xl font-bold text-white tracking-tight">
              VIVEK PRASAD & CO.
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-slate-200 hover:text-gold transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              className="bg-gold hover:bg-gold-dark text-navy font-semibold px-6"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden text-white p-2"
                aria-label="Toggle menu"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-navy/95 backdrop-blur-md border-slate-700 p-0">
               <div className="p-6">
                <SheetTitle className="text-white text-lg font-bold mb-6">Menu</SheetTitle>
                 <ScrollArea className="h-[calc(100vh-100px)]">
                  <div className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault()
                          handleMobileScroll(link.href)
                        }}
                        className="text-slate-200 hover:text-gold transition-colors font-medium py-3 px-2 rounded-lg hover:bg-white/5 text-lg"
                      >
                        {link.name}
                      </a>
                    ))}
                    <div className="pt-4">
                      <Button
                        className="w-full bg-gold hover:bg-gold-dark text-navy font-semibold py-6 text-lg"
                        onClick={() => handleMobileScroll("#contact")}
                      >
                        Book Consultation
                      </Button>
                    </div>
                  </div>
                 </ScrollArea>
               </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
