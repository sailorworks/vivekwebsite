"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "I highly appreciate the professionalism of my Chartered Accountant. He is excellent at analyzing and resolving financial miscommunication and explains complex financial matters in a simple and clear way. He has created an organized office system that helps track every rupee spent and monitor all financial activities through well-structured, software-based processes. I highly recommend his services.",
    name: "Shivkumar Pandey",
    designation: "JD Control Power and Solutions",
  },
  {
    quote:
      "CA Vivek Prasad has been a trusted partner for Leaderskey India Pvt Ltd right from our incorporation journey. Their team guided us seamlessly through company registration, GST and income tax compliance, and periodic filings, allowing us to focus fully on our core business. We highly appreciate their prompt support, clear communication, and practical solutions, and would strongly recommend their services to any growing company.",
    name: "Director",
    designation: "Leaders Key USW Associates Pvt Ltd",
  },
  {
    quote:
      "Aashapura Hardware has relied on Vivek Prasad & CO for over a year now, and their services have been outstanding. From GST compliance and TDS deductions to preparing our balance sheets and tax planning, they deliver everything on time with clear explanations tailored to our hardware retail operations. Their proactive approach to identifying cost-saving opportunities has directly boosted our profitability. We wholeheartedly recommend CA Vivek Prasad to fellow business owners seeking reliable accounting support.",
    name: "Devendra Prajapati",
    designation: "Business Owner, Aashapura Hardware",
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
                <CardContent className="p-6 md:p-8">
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
