export interface Room {
  id: string
  slug: string
  name: string
  nameEn?: string
  description: string
  descriptionEn?: string
  features: string[]
  featuresEn?: string[]
  price: number
  capacity: number
  images: string[]
  isActive: boolean
  order: number
  createdAt: Date
  updatedAt: Date
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  titleEn?: string
  excerpt: string
  excerptEn?: string
  content: string
  contentEn?: string
  coverImage: string
  category: string
  categoryEn?: string
  tags: string[]
  metaTitle?: string
  metaDesc?: string
  ogImage?: string
  published: boolean
  publishedAt?: Date
  views: number
  createdAt: Date
  updatedAt: Date
}

export interface GalleryImage {
  id: string
  image: string
  category: string
  title?: string
  description?: string
  order: number
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Setting {
  id: string
  key: string
  value: string
  whatsappNumber?: string
  phoneNumber?: string
  email?: string
  instagram?: string
  address?: string
  addressEn?: string
  googleMapsUrl?: string
  siteTitle?: string
  siteDesc?: string
  updatedAt: Date
}

export interface Testimonial {
  id: string
  name: string
  nameEn?: string
  comment: string
  commentEn?: string
  rating: number
  isActive: boolean
  createdAt: Date
}

export interface AdminUser {
  id: string
  email: string
  name?: string
  isActive: boolean
  lastLogin?: Date
  createdAt: Date
  updatedAt: Date
}

export interface ReservationFormData {
  name: string
  phone: string
  checkIn: string
  checkOut: string
  guests: string
  roomType: string
  notes?: string
}

export interface SEOProps {
  title: string
  description: string
  ogImage?: string
  canonical?: string
  noIndex?: boolean
}
