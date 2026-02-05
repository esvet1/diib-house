import { Metadata } from 'next'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Clock, MapPin, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'Diib House butik otelinin hikayesi. 200 yıllık Ermeni ustanın mimarisi, taş yapı ve kubbe tavanlar. Şanlıurfa Old Town\'da butik konaklama deneyimi.',
  openGraph: {
    title: 'Hakkımızda | Diib House',
    description: 'Diib House butik otelinin hikayesi. 200 yıllık tarihi dokusuyla butik konaklama deneyimi.',
  },
}

const values = [
  {
    icon: Clock,
    title: '200+ Yıllık Tarih',
    description: 'Eşsiz mimari miras ve otantik atmosfer',
  },
  {
    icon: MapPin,
    title: 'Merkezi Konum',
    description: "Balıklıgöl'e 5 dakika yürüme mesafesi",
  },
  {
    icon: Users,
    title: 'Butik Hizmet',
    description: 'Kişiye özel ilgi ve rehberlik',
  },
  {
    icon: Award,
    title: 'Premium Kalite',
    description: 'Modern konfor tarihi atmosferde',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-stone-100">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block text-earth-600 text-sm font-medium uppercase tracking-widest mb-4">
              Hakkımızda
            </span>
            <h1 className="heading-xl text-stone-800 mb-4">
              Diib House Hikayesi
            </h1>
            <p className="text-stone-600 text-lg">
              200 yıllık tarihi dokusuyla, Şanlıurfa'nın en özel butik oteli.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-cream-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Images */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-dome">
                <Image
                  src="/images/about-main.jpg"
                  alt="Diib House tarihi yapı"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 md:w-64 aspect-square rounded-2xl overflow-hidden shadow-dome border-4 border-cream-50">
                <Image
                  src="/images/about-detail.jpg"
                  alt="Taş işçiliği detayı"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-earth-100 rounded-full -z-10" />
            </div>

            {/* Content */}
            <div>
              <h2 className="heading-lg text-stone-800 mb-6">
                Tarihin İzinde
                <br />
                <span className="text-earth-600">Modern Konfor</span>
              </h2>

              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  Diib House, 19. yüzyılın başlarında, Şanlıurfa'nın yetenekli 
                  Ermeni ustalarından biri tarafından inşa edildi. O dönemin 
                  en güzel örneklerinden biri olan bu yapı, özgün taş işçiliği, 
                  kubbe tavanları ve avludaki dekoratif havuzuyla dikkat çekiyor.
                </p>
                <p>
                  200 yılı aşkın süredir ayakta olan bu tarihi yapı, 2023 yılında 
                  özenli bir restorasyon sürecinden geçirilerek butik otele dönüştürüldü. 
                  Restorasyon sırasında orijinal mimari özellikler korundu, modern 
                  konfor öğeleri ise zarif bir şekilde entegre edildi.
                </p>
                <p>
                  Bugün Diib House, Şanlıurfa'yı ziyaret eden misafirlere tarihi 
                  bir atmosferde konforlu bir konaklama deneyimi sunuyor. Her köşesinde 
                  farklı bir hikaye barındıran bu özel mekanda, geçmişin büyüsünü 
                  yaşayabilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-stone-800 text-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg text-white mb-4">
              Değerlerimiz
            </h2>
            <p className="text-stone-300">
              Misafirlerimize en iyi deneyimi sunmak için ilkelerimiz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-sage-400" />
                </div>
                <h3 className="font-serif text-xl text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-stone-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 bg-cream-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <h2 className="heading-lg text-stone-800 mb-6">
                Ermeni Ustanın
                <br />
                <span className="text-earth-600">Mimari Dokunuşu</span>
              </h2>

              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  Diib House'un mimarisi, Şanlıurfa'nın geleneksel taş ev mimarisinin 
                  en güzel örneklerinden biri olarak kabul edilir. Kubbe tavanlar, 
                  kemerli geçişler ve özgün taş işçiliği, dönemin ustalarının 
                  ustalığını gözler önüne seriyor.
                </p>
                <p>
                  Yapının en dikkat çekici özelliklerinden biri, avludaki dekoratif 
                  havuzudur. Bu havuz, yazın sıcak günlerinde serinlik sağlarken, 
                  aynı zamanda geleneksel Urfa evlerinin vazgeçilmez bir parçasıdır.
                </p>
                <p>
                  Restorasyon sürecinde, orijinal taş duvarlar, kubbe tavanlar ve 
                  süslemeler özenle korundu. Modern konfor öğeleri ise bu tarihi 
                  dokuya zarar vermeden entegre edildi.
                </p>
              </div>

              {/* Features List */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  'Kubbe Tavanlar',
                  'Orijinal Taş Duvarlar',
                  'Dekoratif Havuz',
                  'Kemerli Geçişler',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-earth-500" />
                    <span className="text-stone-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Images */}
            <div className="order-1 lg:order-2 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-dome">
                    <Image
                      src="/images/arch-dome.jpg"
                      alt="Kubbe tavan"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-dome">
                    <Image
                      src="/images/arch-stone.jpg"
                      alt="Taş işçiliği"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-dome">
                    <Image
                      src="/images/arch-pool.jpg"
                      alt="Dekoratif havuz"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-earth-600">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-white mb-4">
              Diib House Deneyimini Yaşayın
            </h2>
            <p className="text-earth-100 mb-8">
              Tarihi atmosferde modern konforu keşfedin.
            </p>
            <a
              href="https://wa.me/905XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-medium rounded-xl hover:bg-[#128C7E] transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp ile Rezervasyon
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
