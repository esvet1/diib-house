'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Users, Check, ArrowRight, Bed, Bath, Wifi, Wind, Coffee, Car } from 'lucide-react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import type { Room } from '@/types'

interface RoomDetailProps {
  room: Room
}

const iconMap: Record<string, React.ElementType> = {
  'yatak': Bed,
  'banyo': Bath,
  'wifi': Wifi,
  'klima': Wind,
  'kahvaltı': Coffee,
  'park': Car,
}

export function RoomDetail({ room }: RoomDetailProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const slides = room.images.map(src => ({ src }))

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <>
      {/* Breadcrumb */}
      <section className="pt-28 pb-8 bg-stone-100">
        <div className="container-custom">
          <Link
            href="/odalar"
            className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Tüm Odalar
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-12">
        <div className="container-custom">
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden">
            <Image
              src={room.images[0] || '/images/room-placeholder.jpg'}
              alt={room.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
            
            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="container-custom">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white/90">
                      {room.capacity} Kişi Kapasite
                    </span>
                  </div>
                  <h1 className="font-serif text-4xl md:text-5xl text-white">
                    {room.name}
                  </h1>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="font-serif text-2xl text-stone-800 mb-4">
                  Oda Hakkında
                </h2>
                <p className="text-stone-600 leading-relaxed mb-8">
                  {room.description}
                </p>

                {/* Features */}
                <h3 className="font-serif text-xl text-stone-800 mb-4">
                  Oda Özellikleri
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
                  {room.features.map((feature, index) => {
                    const Icon = iconMap[feature.toLowerCase()] || Check
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 bg-stone-50 rounded-xl"
                      >
                        <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-sage-600" />
                        </div>
                        <span className="text-stone-700 text-sm font-medium">
                          {feature}
                        </span>
                      </div>
                    )
                  })}
                </div>

                {/* Gallery */}
                <h3 className="font-serif text-xl text-stone-800 mb-4">
                  Fotoğraf Galerisi
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {room.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => openLightbox(index)}
                      className="relative aspect-square rounded-xl overflow-hidden group"
                    >
                      <Image
                        src={image}
                        alt={`${room.name} - ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors" />
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="sticky top-28"
              >
                <div className="bg-white rounded-2xl p-6 shadow-dome">
                  {/* Price */}
                  <div className="text-center pb-6 border-b border-stone-100 mb-6">
                    <div className="text-sm text-stone-500 mb-1">Gecelik Fiyat</div>
                    <div className="text-4xl font-serif font-medium text-stone-800">
                      {room.price.toLocaleString('tr-TR')} ₺
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <a
                      href={`https://wa.me/905XXXXXXXXX?text=Merhaba%20Diib%20House%2C%20${encodeURIComponent(room.name)}%20i%C3%A7in%20rezervasyon%20yapmak%20istiyorum.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 bg-[#25D366] text-white font-medium rounded-xl flex items-center justify-center gap-3 hover:bg-[#128C7E] transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp ile Rezervasyon
                    </a>
                    <a
                      href="tel:+905XXXXXXXXX"
                      className="w-full py-4 bg-stone-100 text-stone-800 font-medium rounded-xl flex items-center justify-center gap-3 hover:bg-stone-200 transition-all duration-300"
                    >
                      Hemen Ara
                    </a>
                  </div>

                  {/* Info */}
                  <div className="mt-6 pt-6 border-t border-stone-100 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-stone-500">Giriş</span>
                      <span className="text-stone-800">14:00</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-stone-500">Çıkış</span>
                      <span className="text-stone-800">12:00</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-stone-500">Kapasite</span>
                      <span className="text-stone-800">{room.capacity} Kişi</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={lightboxIndex}
      />
    </>
  )
}
