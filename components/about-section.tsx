"use client"

import { motion } from "framer-motion"
import { Shield, Award, Users } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Regulated",
    description: "Fully compliant with ICAI standards and government regulations",
  },
  {
    icon: Award,
    title: "Ethical",
    description: "Committed to the highest standards of professional ethics",
  },
  {
    icon: Users,
    title: "Expert",
    description: "Team of qualified CAs with diverse industry experience",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-navy/10 text-navy text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 text-balance">
              Your Trusted Partner in <span className="text-gold">Financial Excellence</span>
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              With over 15 years of experience, FinExpert CA has been at the forefront of providing exceptional
              chartered accountancy services. Our commitment to excellence and client success has made us one of the
              most trusted names in the industry.
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              We believe in building long-term relationships with our clients, understanding their unique needs, and
              delivering tailored solutions that drive growth and ensure compliance.
            </p>

            {/* Feature Pills */}
            <div className="grid sm:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-50 border border-slate-100"
                >
                  <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center mb-3">
                    <feature.icon className="h-6 w-6 text-navy" />
                  </div>
                  <h3 className="font-semibold text-navy mb-1">{feature.title}</h3>
                  <p className="text-sm text-slate-500">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/professional-chartered-accountant-in-modern-office.jpg"
                alt="Professional chartered accountant team"
                className="w-full h-auto object-cover"
              />
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center">
                    <Award className="h-7 w-7 text-navy" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-navy">ICAI Certified</div>
                    <div className="text-slate-500">Institute of Chartered Accountants</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-navy/10 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
