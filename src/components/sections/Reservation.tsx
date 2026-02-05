'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Users, Home, MessageSquare, Send } from 'lucide-react'
import toast from 'react-hot-toast'

const roomTypes = [
  { value: '', label: 'Oda Seçin' },
  { value: 'vip-cift-kisilik-oda', label: 'VIP Çift Kişilik Oda' },
  { value: 'aile-odasi', label: 'Aile Odası' },
]

export function Reservation() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: '',
    notes: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.phone || !formData.checkIn || !formData.checkOut || !formData.roomType) {
      toast.error('Lütfen tüm zorunlu alanları doldurun.')
      return
    }

    const roomLabel = roomTypes.find(r => r.value === formData.roomType)?.label || formData.roomType

    const message = `Merhaba Diib House, rezervasyon yapmak istiyorum.

Ad Soyad: ${formData.name}
Telefon: ${formData.phone}
Giriş: ${formData.checkIn}
Çıkış: ${formData.checkOut}
Kişi sayısı: ${formData.guests}
Oda tipi: ${roomLabel}
Not: ${formData.notes || '-'}`

    const whatsappUrl = `https://wa.me/905XXXXXXXXX?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')

    toast.success('WhatsApp açılıyor...')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section ref={ref} className="section-padding bg-earth-600">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-earth-200 text-sm font-medium uppercase tracking-widest mb-4">
              Rezervasyon
            </span>
            
            <h2 className="heading-lg text-white mb-6">
              Hemen Rezervasyon
              <br />
              <span className="text-earth-200">Yapın</span>
            </h2>

            <p className="text-earth-100 leading-relaxed mb-8">
              WhatsApp üzerinden hızlı ve kolay rezervasyon yapabilirsiniz. 
              Formu doldurun, bilgileriniz otomatik olarak WhatsApp mesajına 
              dönüştürülecek ve bize iletilecektir.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-medium">7/24 Rezervasyon</div>
                  <div className="text-earth-200 text-sm">Her zaman ulaşabilirsiniz</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-medium">WhatsApp</div>
                  <div className="text-earth-200 text-sm">+90 (XXX) XXX XXXX</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-dome">
              <h3 className="font-serif text-2xl text-stone-800 mb-6">
                Rezervasyon Formu
              </h3>

              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">
                    Ad Soyad <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Adınız ve soyadınız"
                    className="form-input"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">
                    Telefon <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="05XX XXX XXXX"
                    className="form-input"
                    required
                  />
                </div>

                {/* Dates */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">
                      Giriş Tarihi <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">
                      Çıkış Tarihi <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                {/* Guests & Room Type */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">
                      Kişi Sayısı
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="form-input"
                    >
                      {[1, 2, 3, 4].map(num => (
                        <option key={num} value={num}>{num} Kişi</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">
                      Oda Tipi <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleChange}
                      className="form-input"
                      required
                    >
                      {roomTypes.map(room => (
                        <option key={room.value} value={room.value}>{room.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">
                    Notlar (Opsiyonel)
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Özel istekleriniz..."
                    rows={3}
                    className="form-input resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#25D366] text-white font-medium rounded-xl flex items-center justify-center gap-3 hover:bg-[#128C7E] transition-all duration-300 hover:shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  WhatsApp ile Gönder
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
