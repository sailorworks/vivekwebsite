"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "FinExpert CA transformed our approach to taxation. Their strategic planning saved us significant costs while keeping us fully compliant. Highly recommended!",
    name: "Rajesh Sharma",
    designation: "CEO, TechStart Solutions",
  },
  {
    quote:
      "The team's professionalism and expertise in audit services is unmatched. They identified key areas for improvement that we had overlooked for years.",
    name: "Priya Mehta",
    designation: "Director, Mehta Enterprises",
  },
  {
    quote:
      "From startup registration to ongoing compliance, FinExpert has been our trusted partner. Their guidance has been invaluable for our business growth.",
    name: "Amit Patel",
    designation: "Founder, GreenLeaf Organics",
  },
]

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-navy/10 text-navy text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 text-balance">What Our Clients Say</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our valued clients have to say about working with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
            >
              <Card className="h-full bg-white border border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <Quote className="h-10 w-10 text-gold/50 mb-4" />
                  <p className="text-slate-600 leading-relaxed mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-navy">{testimonial.name}</div>
                      <div className="text-sm text-slate-500">{testimonial.designation}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
