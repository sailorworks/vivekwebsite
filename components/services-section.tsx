"use client"

import { motion } from "framer-motion"
import { FileText, ClipboardCheck, Briefcase, Scale } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: FileText,
    title: "Taxation (ITR & GST)",
    description:
      "Comprehensive tax planning, ITR filing, and GST compliance services. We help you minimize tax liability while staying fully compliant.",
  },
  {
    icon: ClipboardCheck,
    title: "Audit & Assurance",
    description:
      "Statutory audits, internal audits, and tax audits conducted with precision. We ensure your financial statements are accurate and reliable.",
  },
  {
    icon: Briefcase,
    title: "Business Consulting",
    description:
      "Strategic business advisory, startup setup assistance, and financial planning. We help you make informed decisions for sustainable growth.",
  },
  {
    icon: Scale,
    title: "Regulatory Compliance",
    description:
      "Company law matters, ROC filings, and regulatory compliance management. Stay ahead of deadlines and avoid penalties.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-navy/10 text-navy text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 text-balance">Our Expertise</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Comprehensive chartered accountancy services tailored to meet your unique business and personal financial
            needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            >
              <Card className="group h-full border-2 border-transparent hover:border-gold/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-navy/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                    <service.icon className="h-7 w-7 text-navy group-hover:text-gold transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
