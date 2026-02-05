'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Navigation, Clock, Footprints } from 'lucide-react'

const nearbyPlaces = [
  { name: 'Balıklıgöl', distance: '5 dk', icon: Footprints },
  { name: 'Rızvaniye Camii', distance: '7 dk', icon: Footprints },
  { name: 'Mevlid-i Halil Camii', distance: '8 dk', icon: Footprints },
  { name: 'Çarşı', distance: '3 dk', icon: Footprints },
  { name: 'Göbeklitepe', distance: '20 dk (araç)', icon: Navigation },
  { name: 'Harran', distance: '45 dk (araç)', icon: Navigation },
]

export function Location() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="section-padding bg-stone-800 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sage-400 text-sm font-medium uppercase tracking-widest mb-4">
              Konum
            </span>
            
            <h2 className="heading-lg text-white mb-6">
              Tarihin Kalbinde
              <br />
              <span className="text-sage-400">Merkezi Konum</span>
            </h2>

            <p className="text-stone-300 leading-relaxed mb-8">
              Diib House, Şanlıurfa'nın tarihi merkezi Old Town'da yer alıyor. 
              Balıklıgöl ve diğer tarihi mekanlara yürüme mesafesindeki konumumuz, 
              şehri keşfetmek için ideal bir başlangıç noktası sunuyor.
            </p>

            {/* Address Card */}
            <div className="bg-stone-700/50 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sage-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-sage-400" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-white mb-1">Adres</h3>
                  <p className="text-stone-300">
                    Old Town, Şanlıurfa
                  </p>
                  <p className="text-sage-400 text-sm mt-1">
                    Balıklıgöl'e 5 dakika yürüme mesafesi
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://maps.google.com/?q=37.1591,38.7969"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-sage-500 text-white font-medium rounded-xl hover:bg-sage-600 transition-all duration-300"
            >
              <Navigation className="w-5 h-5" />
              Google Maps'te Gör
            </a>
          </motion.div>

          {/* Nearby Places */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-serif text-xl text-white mb-6">
              Yakındaki Yerler
            </h3>

            <div className="space-y-3">
              {nearbyPlaces.map((place, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-stone-700/30 backdrop-blur-sm rounded-xl hover:bg-stone-700/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <place.icon className="w-5 h-5 text-sage-400" />
                    <span className="text-stone-200">{place.name}</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-400 text-sm">
                    <Clock className="w-4 h-4" />
                    {place.distance}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Map Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3183.0!2d38.7969!3d37.1591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDA5JzMyLjgiTiAzOMKwNDcnNDguOSJF!5e0!3m2!1str!2str!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(20%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Diib House Konum"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
