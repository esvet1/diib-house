'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Users, Bed, Bath, Wifi } from 'lucide-react'

const rooms = [
  {
    slug: 'vip-cift-kisilik-oda',
    name: 'VIP Çift Kişilik Oda',
    description: 'Tarihi atmosferin modern konforla buluştuğu, romantik bir kaçamak için ideal oda.',
    price: 1500,
    capacity: 2,
    image: '/images/room-vip.jpg',
    features: ['Kubbe Tavan', 'Jakuzi', 'Klima', 'WiFi'],
  },
  {
    slug: 'aile-odasi',
    name: 'Aile Odası',
    description: 'Geniş ve konforlu alanıyla aileler için tasarlanmış, bahçe manzaralı oda.',
    price: 2000,
    capacity: 3,
    image: '/images/room-family.jpg',
    features: ['3 Kişilik', 'Bahçe Manzaralı', 'Klima', 'WiFi'],
  },
]

export function RoomsPreview() {
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
            Konaklama
          </span>
          <h2 className="heading-lg text-stone-800 mb-4">
            Odalarımız
          </h2>
          <p className="text-stone-600">
            Tarihi dokunun modern konforla buluştuğu, her biri özenle tasarlanmış 
            odalarımızda konforlu bir konaklama deneyimi yaşayın.
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link href={`/odalar/${room.slug}`} className="group block">
                <div className="card-stone h-full">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
                    
                    {/* Price Badge */}
                    <div className="absolute top-4 right-4 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full">
                      <span className="text-stone-800 font-medium">
                        {room.price.toLocaleString('tr-TR')} ₺
                      </span>
                      <span className="text-stone-500 text-sm">/gece</span>
                    </div>

                    {/* Capacity Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-stone-900/80 backdrop-blur-sm rounded-full flex items-center gap-2">
                      <Users className="w-4 h-4 text-white" />
                      <span className="text-white text-sm">{room.capacity} Kişi</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-2xl text-stone-800 mb-2 group-hover:text-earth-600 transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-stone-600 mb-4 line-clamp-2">
                      {room.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {room.features.map((feature, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-stone-100 text-stone-600 text-sm rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-stone-800 font-medium group-hover:text-earth-600 transition-colors">
                        Detayları Gör
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/odalar"
            className="inline-flex items-center gap-3 px-8 py-4 bg-stone-800 text-white font-medium rounded-xl hover:bg-stone-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            Tüm Odaları İncele
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
