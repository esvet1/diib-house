'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Instagram, Clock, ArrowUp } from 'lucide-react'

const quickLinks = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/odalar', label: 'Odalarımız' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/blog', label: 'Blog' },
  { href: '/iletisim', label: 'İletişim' },
]

const roomLinks = [
  { href: '/odalar/vip-cift-kisilik-oda', label: 'VIP Çift Kişilik Oda' },
  { href: '/odalar/aile-odasi', label: 'Aile Odası' },
]

const blogLinks = [
  { href: '/blog/urfa-gezi-rehberi', label: 'Urfa Gezi Rehberi' },
  { href: '/blog/balikligol', label: 'Balıklıgöl' },
  { href: '/blog/urfa-mutfagi', label: 'Urfa Mutfağı' },
  { href: '/blog/gobeklitepe', label: 'Göbeklitepe' },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-stone-900 text-stone-300">
      {/* Main Footer */}
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-stone-700 flex items-center justify-center">
                  <span className="text-white font-serif text-xl font-medium">D</span>
                </div>
                <span className="font-serif text-2xl font-medium text-white">
                  Diib House
                </span>
              </div>
            </Link>
            <p className="text-stone-400 mb-6 leading-relaxed">
              Şanlıurfa Old Town'da, 200 yıllık tarihi dokusuyla butik konaklama 
              deneyimi. Balıklıgöl'e 5 dakika yürüme mesafesi.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/diibhouse"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-stone-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/905XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center hover:bg-[#128C7E] transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-serif text-lg mb-6">Hızlı Linkler</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-stone-500" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Rooms & Blog */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-serif text-lg mb-6">Odalar & Blog</h3>
            <ul className="space-y-3 mb-8">
              {roomLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-stone-500" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {blogLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-stone-500" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white font-serif text-lg mb-6">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-stone-500 mt-0.5 flex-shrink-0" />
                <span className="text-stone-400">
                  Old Town, Şanlıurfa<br />
                  Balıklıgöl'e 5 dk yürüme
                </span>
              </li>
              <li>
                <a
                  href="tel:+905XXXXXXXXX"
                  className="flex items-center gap-3 text-stone-400 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-stone-500" />
                  +90 (XXX) XXX XXXX
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@diibhouse.com"
                  className="flex items-center gap-3 text-stone-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-stone-500" />
                  info@diibhouse.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-stone-400">
                <Clock className="w-5 h-5 text-stone-500" />
                <span>7/24 Rezervasyon</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-stone-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Diib House. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/gizlilik-politikasi"
                className="text-stone-500 hover:text-stone-300 text-sm transition-colors"
              >
                Gizlilik Politikası
              </Link>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-stone-700 transition-colors"
                aria-label="Yukarı çık"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
