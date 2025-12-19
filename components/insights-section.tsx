"use client"

import { motion } from "framer-motion"
import { Instagram, ExternalLink } from "lucide-react"

const placeholderPosts = [
  { id: 1, query: "financial tips infographic blue" },
  { id: 2, query: "tax planning advice graphic" },
  { id: 3, query: "business growth chart professional" },
  { id: 4, query: "GST filing tips infographic" },
  { id: 5, query: "investment advice professional graphic" },
  { id: 6, query: "financial literacy tips modern" },
  { id: 7, query: "ITR filing guide infographic" },
  { id: 8, query: "startup finance tips graphic" },
  { id: 9, query: "wealth management advice professional" },
]

export function InsightsSection() {
  return (
    <section id="insights" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-navy/10 text-navy text-sm font-medium mb-4">
            Knowledge Bank
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 text-balance">Latest Financial Insights</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-4">
            Follow us for daily tips, tax updates, and financial wisdom.
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-dark transition-colors font-medium"
          >
            <Instagram className="h-5 w-5" />
            @finexpert.ca
          </a>
        </motion.div>

        {/* Instagram Feed Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            {placeholderPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative aspect-square group cursor-pointer overflow-hidden rounded-lg"
              >
                <img
                  src={`/.jpeg?height=300&width=300&query=${post.query}`}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <ExternalLink className="h-6 w-6 mx-auto mb-2" />
                    <span className="text-sm font-medium">View Post</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Developer Note */}
          <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-amber-800 text-sm text-center">
              <strong>Note:</strong> This placeholder grid will be replaced with your actual Instagram widget code.
              Simply swap this section with your embedded feed widget.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
