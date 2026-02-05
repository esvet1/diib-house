# Diib House Hotel Website

Modern, dinamik, mobil öncelikli ve SEO dostu butik otel web sitesi.

## Özellikler

- **Next.js 14** - App Router, SSR/SSG desteği
- **TypeScript** - Tip güvenliği
- **Tailwind CSS** - Modern CSS framework
- **Prisma ORM** - Veritabanı yönetimi
- **Supabase** - Auth ve PostgreSQL
- **Framer Motion** - Animasyonlar
- **SEO Optimizasyonu** - Meta tags, schema.org, sitemap

## Sayfalar

- **Ana Sayfa** - Hero, hikaye, odalar, bahçe, konum, blog, yorumlar
- **Odalar** - VIP ve Aile odaları detayları
- **Galeri** - Filtreli galeri + lightbox
- **Hakkımızda** - Tarihi hikaye ve mimari
- **Blog** - SEO odaklı blog sistemi
- **İletişim** - Harita ve iletişim bilgileri
- **Admin Panel** - CMS (Odalar, Blog, Galeri, Ayarlar)

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Ortam değişkenlerini ayarla
cp .env.local.example .env.local

# Veritabanı migrasyonunu çalıştır
npx prisma migrate dev

# Geliştirme sunucusunu başlat
npm run dev
```

## Ortam Değişkenleri

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Database
DATABASE_URL=your_database_url

# Site
SITE_URL=https://diibhouse.com

# WhatsApp
WHATSAPP_NUMBER=905XXXXXXXXX
```

## Deploy (Vercel)

1. GitHub repo'su oluştur
2. Vercel'de yeni proje oluştur
3. GitHub repo'sunu bağla
4. Ortam değişkenlerini ekle
5. Deploy et

## Admin Panel

- URL: `/admin`
- Login: Supabase Auth ile
- Özellikler:
  - Odalar yönetimi
  - Blog yazıları
  - Galeri yönetimi
  - Site ayarları

## WhatsApp Rezervasyon

Form bilgileri otomatik olarak WhatsApp mesajına dönüştürülür:

```
https://wa.me/90XXXXXXXXXX?text=Merhaba%20Diib%20House...
```

## SEO

- Dinamik meta tags
- Schema.org yapılandırılmış veri
- Otomatik sitemap.xml
- robots.txt
- OG tags (Facebook/Instagram)

## Lisans

MIT
