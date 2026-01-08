"use client"

import { motion } from "framer-motion"
import { Instagram, Play, Image as ImageIcon, ExternalLink } from "lucide-react"

const instagramPosts = [
  {
    id: 1,
    url: "https://www.instagram.com/p/DOy22ApDBBX/",
    type: "reel",
    thumbnail: "/insta-1.png",
    title: "Financial Expertise"
  },
  {
    id: 2,
    url: "https://www.instagram.com/reel/DOjeiwsjIdh/",
    type: "reel",
    thumbnail: "/insta-2.png",
    title: "Tax Planning Tips"
  },
  {
    id: 3,
    url: "https://www.instagram.com/reel/DNfRDRts36w/",
    type: "reel",
    thumbnail: "/insta-3.png",
    title: "Wealth Management"
  },
  {
    id: 4,
    url: "https://www.instagram.com/reel/DKosl0ouPOo/",
    type: "reel",
    thumbnail: "/insta-4.png",
    title: "Market Insights"
  },
  {
    id: 5,
    url: "https://www.instagram.com/reel/DKaNiWHOEeX/",
    type: "reel",
    thumbnail: "/insta-5.png",
    title: "Business Growth"
  }
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
            href="https://www.instagram.com/cavivekandco/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-dark transition-all duration-300 font-medium group"
          >
            <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span className="border-b border-transparent group-hover:border-gold">@cavivekandco</span>
          </a>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {instagramPosts.map((post, index) => (
              <motion.a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative block aspect-[4/5] bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Thumbnail */}
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-2">
                    {post.type === 'reel' ? (
                      <div className="bg-white/20 backdrop-blur-md p-1.5 rounded-full">
                        <Play className="h-4 w-4 fill-white" />
                      </div>
                    ) : (
                      <div className="bg-white/20 backdrop-blur-md p-1.5 rounded-full">
                        <ImageIcon className="h-4 w-4" />
                      </div>
                    )}
                    <span className="text-xs font-semibold uppercase tracking-wider opacity-80">
                      {post.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{post.title}</h3>
                  <div className="flex items-center gap-1 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span>View on Instagram</span>
                    <ExternalLink className="h-3 w-3" />
                  </div>
                </div>

                {/* Decorative border on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/30 rounded-2xl transition-colors duration-500 pointer-events-none" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
