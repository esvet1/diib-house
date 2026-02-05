import { Metadata } from 'next'
import { MapPin, Phone, Mail, Instagram, Clock, Navigation } from 'lucide-react'

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Diib House butik otel iletişim bilgileri. WhatsApp rezervasyon, telefon, adres ve konum bilgileri.',
  openGraph: {
    title: 'İletişim | Diib House',
    description: 'Diib House butik otel iletişim bilgileri. WhatsApp rezervasyon, telefon, adres ve konum bilgileri.',
  },
}

const contactInfo = [
  {
    icon: MapPin,
    title: 'Adres',
    content: 'Old Town, Şanlıurfa',
    subtext: "Balıklıgöl'e 5 dk yürüme",
  },
  {
    icon: Phone,
    title: 'Telefon',
    content: '+90 (XXX) XXX XXXX',
    link: 'tel:+905XXXXXXXXX',
  },
  {
    icon: Mail,
    title: 'E-posta',
    content: 'info@diibhouse.com',
    link: 'mailto:info@diibhouse.com',
  },
  {
    icon: Instagram,
    title: 'Instagram',
    content: '@diibhouse',
    link: 'https://instagram.com/diibhouse',
  },
  {
    icon: Clock,
    title: 'Çalışma Saatleri',
    content: '7/24 Hizmet',
    subtext: 'Rezervasyon için her zaman ulaşabilirsiniz',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-stone-100">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block text-earth-600 text-sm font-medium uppercase tracking-widest mb-4">
              İletişim
            </span>
            <h1 className="heading-xl text-stone-800 mb-4">
              Bize Ulaşın
            </h1>
            <p className="text-stone-600 text-lg">
              Rezervasyon ve bilgi için bize ulaşabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-20 bg-cream-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div>
              <h2 className="heading-md text-stone-800 mb-8">
                İletişim Bilgileri
              </h2>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-earth-100 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-earth-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-stone-800 mb-1">
                        {item.title}
                      </h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          target={item.link.startsWith('http') ? '_blank' : undefined}
                          rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-stone-600 hover:text-earth-600 transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-stone-600">{item.content}</p>
                      )}
                      {item.subtext && (
                        <p className="text-stone-500 text-sm mt-0.5">{item.subtext}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-10 p-6 bg-earth-600 rounded-2xl text-white">
                <h3 className="font-serif text-xl mb-3">
                  WhatsApp ile Hızlı Rezervasyon
                </h3>
                <p className="text-earth-100 text-sm mb-6">
                  WhatsApp üzerinden hızlı ve kolay rezervasyon yapabilirsiniz.
                </p>
                <a
                  href="https://wa.me/905XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#25D366] text-white font-medium rounded-xl flex items-center justify-center gap-3 hover:bg-[#128C7E] transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp ile İletişime Geç
                </a>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="heading-md text-stone-800 mb-8">
                Konum
              </h2>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-dome">
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
              <a
                href="https://maps.google.com/?q=37.1591,38.7969"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-earth-600 font-medium hover:text-earth-700 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                Google Maps'te Aç
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-stone-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="tel:+905XXXXXXXXX"
              className="p-6 bg-stone-700/50 rounded-2xl text-center hover:bg-stone-700 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-sage-400" />
              </div>
              <h3 className="font-serif text-lg text-white mb-2">Hemen Ara</h3>
              <p className="text-stone-400 text-sm">Telefon ile bilgi al</p>
            </a>
            <a
              href="https://wa.me/905XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-[#25D366]/20 rounded-2xl text-center hover:bg-[#25D366]/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3 className="font-serif text-lg text-white mb-2">WhatsApp</h3>
              <p className="text-stone-400 text-sm">Hızlı rezervasyon</p>
            </a>
            <a
              href="mailto:info@diibhouse.com"
              className="p-6 bg-stone-700/50 rounded-2xl text-center hover:bg-stone-700 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-sage-400" />
              </div>
              <h3 className="font-serif text-lg text-white mb-2">E-posta</h3>
              <p className="text-stone-400 text-sm">Bize yazın</p>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
