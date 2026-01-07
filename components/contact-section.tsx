"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 99608 12453",
    href: "tel:+919960812453",
  },
  {
    icon: Mail,
    label: "Email",
    value: "canivedandco@gmail.com",
    href: "mailto:canivedandco@gmail.com",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "N/16, Rajlaxmi Compound, Kalher, Thane",
    href: "#",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Sat: 10:00 AM - 7:00 PM",
    href: "#",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-navy/10 text-navy text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 text-balance">
            Let&apos;s Discuss Your Financial Goals
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Ready to take control of your finances? Reach out to us for a free consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <item.icon className="h-6 w-6 text-navy group-hover:text-gold transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-1">{item.label}</div>
                    <div className="text-navy font-medium">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="rounded-xl overflow-hidden border border-slate-200">
              <div className="aspect-video bg-slate-100 flex items-center justify-center">
                <div className="text-center text-slate-500">
                  <MapPin className="h-12 w-12 mx-auto mb-2 text-slate-400" />
                  <p className="font-medium">Google Map Embed</p>
                  <p className="text-sm">Replace with your map embed code</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100"
            >
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="border-slate-200 focus:border-gold focus:ring-gold"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="border-slate-200 focus:border-gold focus:ring-gold"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service of Interest</Label>
                  <Select name="service">
                    <SelectTrigger className="border-slate-200 focus:border-gold focus:ring-gold">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="taxation">Taxation (ITR & GST)</SelectItem>
                      <SelectItem value="audit">Audit & Assurance</SelectItem>
                      <SelectItem value="consulting">Business Consulting</SelectItem>
                      <SelectItem value="compliance">Regulatory Compliance</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your requirements..."
                    rows={5}
                    required
                    className="border-slate-200 focus:border-gold focus:ring-gold resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gold hover:bg-gold-dark text-navy font-semibold">
                  Send Message
                </Button>

                <p className="text-sm text-slate-500 text-center">We typically respond within 24 hours.</p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
