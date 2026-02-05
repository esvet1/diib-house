'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { galleryCategories } from '@/lib/utils'

// Demo images - in production, these would come from the database
const galleryImages = [
  { src: '/images/gallery/room-1.jpg', category: 'rooms', title: 'VIP Oda' },
  { src: '/images/gallery/room-2.jpg', category: 'rooms', title: 'Aile Odası' },
  { src: '/images/gallery/room-3.jpg', category: 'rooms', title: 'Oda Detayı' },
  { src: '/images/gallery/garden-1.jpg', category: 'garden', title: 'Bahçe' },
  { src: '/images/gallery/garden-2.jpg', category: 'garden', title: 'Havuz' },
  { src: '/images/gallery/garden-3.jpg', category: 'garden', title: 'Avlu' },
  { src: '/images/gallery/arch-1.jpg', category: 'architecture', title: 'Taş Duvar' },
  { src: '/images/gallery/arch-2.jpg', category: 'architecture', title: 'Kubbe Tavan' },
  { src: '/images/gallery/arch-3.jpg', category: 'architecture', title: 'Kemer' },
  { src: '/images/gallery/urfa-1.jpg', category: 'urfa', title: 'Balıklıgöl' },
  { src: '/images/gallery/urfa-2.jpg', category: 'urfa', title: 'Çarşı' },
  { src: '/images/gallery/urfa-3.jpg', category: 'urfa', title: 'Göbeklitepe' },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  const slides = filteredImages.map(img => ({ src: img.src }))

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-stone-100">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block text-earth-600 text-sm font-medium uppercase tracking-widest mb-4">
              Galeri
            </span>
            <h1 className="heading-xl text-stone-800 mb-4">
              Fotoğraf Galerisi
            </h1>
            <p className="text-stone-600 text-lg">
              Diib House'un tarihi atmosferini, odalarını, bahçesini ve 
              Şanlıurfa'nın güzelliklerini keşfedin.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-cream-50">
        <div className="container-custom">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-stone-800 text-white'
                    : 'bg-white text-stone-600 hover:bg-stone-100'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <button
                  onClick={() => openLightbox(index)}
                  className="relative aspect-square rounded-xl overflow-hidden group w-full"
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-colors duration-300" />
                  
                  {/* Title Overlay */}
                  <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-medium">{image.title}</span>
                  </div>
                </button>
              </motion.div>
            ))}
          </motion.div>
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
