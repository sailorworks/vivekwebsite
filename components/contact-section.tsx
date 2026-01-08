"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useForm, ValidationError } from "@formspree/react"

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
  const [state, handleSubmit] = useForm("xdakqzrj")

  if (state.succeeded) {
    return (
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center bg-white rounded-2xl p-12 shadow-lg border border-slate-100"
          >
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-navy mb-4">Thanks for joining!</h2>
            <p className="text-slate-600 text-lg mb-8">
              Thank you for reaching out. We have received your message and will get back to you within 24 hours.
            </p>
            <Button
              onClick={() => window.location.reload()}
              className="bg-gold hover:bg-gold-dark text-navy font-semibold px-8"
            >
              Send Another Message
            </Button>
          </motion.div>
        </div>
      </section>
    )
  }

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
              <div className="aspect-video bg-slate-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.9000385638656!2d73.01752710000005!3d19.2431878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bd0008b6b97b%3A0xaf7fdf0eb3aa53dc!2sVIVEK%20PRASAD%20%26%20CO!5e0!3m2!1sen!2sin!4v1767849312815!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
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
              onSubmit={handleSubmit}
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
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm" />
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
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-red-500 text-sm"
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
                  <ValidationError
                    prefix="Service"
                    field="service"
                    errors={state.errors}
                    className="text-red-500 text-sm"
                  />
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
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={state.submitting}
                  className="w-full bg-gold hover:bg-gold-dark text-navy font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
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
