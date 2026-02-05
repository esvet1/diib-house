'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react'
import type { BlogPost } from '@/types'
import { categories } from '@/lib/utils'

interface BlogListProps {
  posts: BlogPost[]
}

export function BlogList({ posts }: BlogListProps) {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredPosts = activeCategory === 'all'
    ? posts
    : posts.filter(post => post.category === activeCategory)

  if (posts.length === 0) {
    return (
      <section className="py-20 bg-cream-50">
        <div className="container-custom">
          <div className="text-center">
            <p className="text-stone-500">Blog yazıları yükleniyor...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-cream-50">
      <div className="container-custom">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-stone-800 text-white'
                : 'bg-white text-stone-600 hover:bg-stone-100'
            }`}
          >
            Tümü
          </button>
          {categories.tr.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-stone-800 text-white'
                  : 'bg-white text-stone-600 hover:bg-stone-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="card-stone h-full flex flex-col">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full">
                      <span className="text-stone-800 text-sm font-medium flex items-center gap-1.5">
                        <Tag className="w-3 h-3" />
                        {categories.tr.find(c => c.id === post.category)?.name || post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-stone-500 text-sm mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.publishedAt || post.createdAt).toLocaleDateString('tr-TR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </span>
                    </div>

                    <h2 className="font-serif text-xl text-stone-800 mb-3 group-hover:text-earth-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-stone-600 text-sm line-clamp-3 mb-4 flex-1">
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
