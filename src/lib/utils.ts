import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 0,
  }).format(price)
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}

export function generateWhatsAppLink(
  phone: string,
  data: {
    name: string
    phone: string
    checkIn: string
    checkOut: string
    guests: string
    roomType: string
    notes?: string
  }
): string {
  const message = `Merhaba Diib House, rezervasyon yapmak istiyorum.

Ad Soyad: ${data.name}
Telefon: ${data.phone}
Giriş: ${data.checkIn}
Çıkış: ${data.checkOut}
Kişi sayısı: ${data.guests}
Oda tipi: ${data.roomType}
Not: ${data.notes || '-'}`

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export function slugify(text: string): string {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.slice(0, length).trim() + '...'
}

export const categories = {
  tr: [
    { id: 'gezi-rehberi', name: 'Gezi Rehberi' },
    { id: 'tarih', name: 'Tarih' },
    { id: 'mutfak', name: 'Urfa Mutfağı' },
    { id: 'yerel-deneyimler', name: 'Yerel Deneyimler' },
    { id: 'otel', name: 'Otel' },
  ],
  en: [
    { id: 'travel-guide', name: 'Travel Guide' },
    { id: 'history', name: 'History' },
    { id: 'cuisine', name: 'Urfa Cuisine' },
    { id: 'local-experiences', name: 'Local Experiences' },
    { id: 'hotel', name: 'Hotel' },
  ],
}

export const galleryCategories = [
  { id: 'all', name: 'Tümü', nameEn: 'All' },
  { id: 'rooms', name: 'Odalar', nameEn: 'Rooms' },
  { id: 'garden', name: 'Bahçe', nameEn: 'Garden' },
  { id: 'architecture', name: 'Mimari', nameEn: 'Architecture' },
  { id: 'urfa', name: 'Şanlıurfa', nameEn: 'Sanliurfa' },
]
