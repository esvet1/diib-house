'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export function Story() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section ref={ref} className="section-padding bg-cream-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-dome">
                  <Image
                    src="/images/story-1.jpg"
                    alt="Diib House taş yapı detayı"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-dome">
                  <Image
                    src="/images/story-2.jpg"
                    alt="Kubbe tavan detayı"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-dome">
                  <Image
                    src="/images/story-3.jpg"
                    alt="Bahçe havuz"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sage-100 rounded-full -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-earth-100 rounded-full -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-earth-600 text-sm font-medium uppercase tracking-widest mb-4">
              Diib House Hikayesi
            </span>
            
            <h2 className="heading-lg text-stone-800 mb-6">
              200 Yıllık Mimarinin
              <br />
              <span className="text-earth-600">Modern Yorumu</span>
            </h2>

            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                Diib House, Şanlıurfa'nın tarihi dokusunu taşıyan Old Town bölgesinde, 
                200 yıllık bir geçmişe sahip. Ermeni usta tarafından inşa edilen bu 
                yapı, taş işçiliğinin en güzel örneklerinden biri olarak günümüze 
                ulaşmıştır.
              </p>
              <p>
                Kubbe tavanları, özgün taş duvarları ve avludaki dekoratif havuzuyla 
                geleneksel Urfa mimarisinin tüm özelliklerini taşıyan Diib House, 
                modern konforla tarihi atmosferi bir araya getiriyor.
              </p>
              <p>
                Her köşesinde farklı bir hikaye barındıran bu butik otelde, 
                misafirlerimize kişiye özel ilgi ve rehberlik hizmeti sunarak 
                unutulmaz bir Şanlıurfa deneyimi yaşatmayı amaçlıyoruz.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-stone-200">
              {[
                { value: '200+', label: 'Yıllık Tarih' },
                { value: '5', label: 'Dakika Balıklıgöl' },
                { value: '100%', label: 'Taş Yapı' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-serif font-medium text-stone-800">
                    {stat.value}
                  </div>
                  <div className="text-sm text-stone-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
