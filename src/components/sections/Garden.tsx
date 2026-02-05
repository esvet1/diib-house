'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Trees, Droplets, Sun, Wind } from 'lucide-react'

const features = [
  { icon: Trees, label: 'Doğal Bitkiler' },
  { icon: Droplets, label: 'Dekoratif Havuz' },
  { icon: Sun, label: 'Güneşlenme Alanı' },
  { icon: Wind, label: 'Huzurlu Atmosfer' },
]

export function Garden() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="section-padding bg-cream-50 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block text-sage-500 text-sm font-medium uppercase tracking-widest mb-4">
              Bahçe & Havuz
            </span>
            
            <h2 className="heading-lg text-stone-800 mb-6">
              Şehrin Gürültüsünden
              <br />
              <span className="text-sage-500">Uzakta Bir Vaha</span>
            </h2>

            <div className="space-y-4 text-stone-600 leading-relaxed mb-8">
              <p>
                Diib House'un avlusunda, Şanlıurfa'nın sıcağından ve gürültüsünden 
                uzaklaşabileceğiniz huzurlu bir bahçe sizi bekliyor. Yerel bitkilerle 
                süslenmiş bahçemizde, dekoratif havuzun sesi eşliğinde dinlenebilirsiniz.
              </p>
              <p>
                Sabah kahvaltınızı bahçede alabilir, gün batımında çayınızı yudumlayarak 
                tarihi atmosferin tadını çıkarabilirsiniz. Bahçemiz, aynı zamanda 
                çocuklar için güvenli bir oyun alanı da sunuyor.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-soft"
                >
                  <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-sage-600" />
                  </div>
                  <span className="text-stone-700 font-medium text-sm">
                    {feature.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-dome">
                <Image
                  src="/images/garden-main.jpg"
                  alt="Diib House bahçe"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Secondary Image */}
              <div className="absolute -bottom-8 -left-8 w-48 md:w-64 aspect-square rounded-2xl overflow-hidden shadow-dome border-4 border-cream-50">
                <Image
                  src="/images/garden-pool.jpg"
                  alt="Dekoratif havuz"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-sage-100 rounded-full -z-10" />
              <div className="absolute -bottom-4 right-20 w-16 h-16 bg-earth-100 rounded-full -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
