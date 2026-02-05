'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Ahmet Y.',
    location: 'İstanbul',
    rating: 5,
    comment: 'Tarihi atmosferi ve butik hizmet anlayışıyla mükemmel bir deneyimdi. Balıklıgöl\'e yürüme mesafesi çok büyük avantaj. Kesinlikle tavsiye ederim.',
  },
  {
    name: 'Sarah M.',
    location: 'Almanya',
    rating: 5,
    comment: 'Amazing experience! The stone architecture and dome ceilings are breathtaking. The hosts were incredibly helpful and the location is perfect for exploring Urfa.',
  },
  {
    name: 'Fatma K.',
    location: 'Ankara',
    rating: 5,
    comment: 'Ailemle birlikte kaldık ve çok memnun kaldık. Bahçesi, havuzu, odaların temizliği ve konforu harikaydı. Urfa\'ya geldiğimizde tek adresimiz.',
  },
]

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="section-padding bg-stone-100">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-earth-600 text-sm font-medium uppercase tracking-widest mb-4">
            Misafir Yorumları
          </span>
          <h2 className="heading-lg text-stone-800 mb-4">
            Konuklarımız Ne Diyor?
          </h2>
          <p className="text-stone-600">
            Diib House'ta konaklayan misafirlerimizin deneyimlerini okuyun.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-soft h-full">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8 w-8 h-8 bg-earth-500 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-stone-600 leading-relaxed mb-6">
                  "{testimonial.comment}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                  <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center">
                    <span className="text-stone-600 font-medium">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-stone-800">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-stone-500">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
