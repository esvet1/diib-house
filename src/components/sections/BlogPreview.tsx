'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

const blogPosts = [
  {
    slug: 'urfa-gezi-rehberi',
    title: 'Şanlıurfa Gezi Rehberi: 3 Günlük Program',
    excerpt: 'Balıklıgöl\'den Göbeklitepe\'ye, Harran\'dan Halfeti\'ye Şanlıurfa\'da görülmesi gereken tüm yerler...',
    image: '/images/blog-urfa-guide.jpg',
    category: 'Gezi Rehberi',
    date: '15 Ocak 2024',
    readTime: '8 dk',
  },
  {
    slug: 'urfa-mutfagi',
    title: 'Urfa Mutfağı: Lezzetler Şehri',
    excerpt: 'Çiğ köfte, lahmacun, şıllık tatlısı ve daha fazlası... Urfa mutfağının eşsiz lezzetlerini keşfedin.',
    image: '/images/blog-urfa-food.jpg',
    category: 'Mutfak',
    date: '10 Ocak 2024',
    readTime: '6 dk',
  },
  {
    slug: 'gobeklitepe',
    title: 'Göbeklitepe: İnsanlık Tarihinin Sıfır Noktası',
    excerpt: '12.000 yıllık tarihiyle dünyanın en eski tapınağı Göbeklitepe\'nin gizemli hikayesi...',
    image: '/images/blog-gobeklitepe.jpg',
    category: 'Tarih',
    date: '5 Ocak 2024',
    readTime: '10 dk',
  },
]

export function BlogPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="section-padding bg-cream-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div className="max-w-xl">
            <span className="inline-block text-earth-600 text-sm font-medium uppercase tracking-widest mb-4">
              Blog
            </span>
            <h2 className="heading-lg text-stone-800">
              Şanlıurfa'yı Keşfedin
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-stone-800 font-medium hover:text-earth-600 transition-colors"
          >
            Tüm Yazılar
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="card-stone h-full flex flex-col">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full">
                      <span className="text-stone-800 text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-stone-500 text-sm mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl text-stone-800 mb-3 group-hover:text-earth-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-stone-600 text-sm line-clamp-2 mb-4 flex-1">
                      {post.excerpt}
                    </p>

                    <span className="inline-flex items-center gap-2 text-stone-800 font-medium text-sm group-hover:text-earth-600 transition-colors">
                      Devamını Oku
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
