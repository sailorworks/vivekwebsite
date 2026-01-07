"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"

export function HeroSection() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_45%,rgba(255,255,255,0.03)_45%,rgba(255,255,255,0.03)_55%,transparent_55%)] bg-[length:20px_20px]" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-gold/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-slate-500/10 to-transparent" />
      </div>

      {/* Geometric Shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 border border-gold/20 rotate-45 hidden lg:block" />
      <div className="absolute bottom-20 right-10 w-48 h-48 border border-slate-500/20 rotate-12 hidden lg:block" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-medium mb-6">
              Trusted Chartered Accountants
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6 text-balance"
          >
            Simplifying Tax & <span className="text-gold">Maximizing Your Wealth</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-base md:text-xl text-slate-300 mb-8 md:mb-10 max-w-2xl mx-auto text-pretty"
          >
            Expert Chartered Accountant services dedicated to your financial growth and compliance. We make complex
            finances simple.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-dark text-navy font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
            >
              Request Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-400 text-slate-200 hover:bg-slate-800 hover:text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg bg-transparent"
              onClick={(e) => handleSmoothScroll(e, "#services")}
            >
              Explore Services
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-slate-700/50 max-w-2xl mx-auto"
          >
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gold">5+</div>
              <div className="text-slate-400 text-xs sm:text-sm mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gold">100+</div>
              <div className="text-slate-400 text-xs sm:text-sm mt-1">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gold">98%</div>
              <div className="text-slate-400 text-xs sm:text-sm mt-1">Success Rate</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
          <ChevronDown className="h-8 w-8 text-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
