import { MetadataRoute } from 'next'
import { prisma } from '@/lib/prisma'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.SITE_URL || 'https://diibhouse.com'

  // Static pages
  const staticPages = [
    '',
    '/odalar',
    '/galeri',
    '/hakkimizda',
    '/blog',
    '/iletisim',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic pages
  const [rooms, blogPosts] = await Promise.all([
    prisma.room.findMany({ where: { isActive: true } }),
    prisma.blogPost.findMany({ where: { published: true } }),
  ])

  const roomPages = rooms.map((room) => ({
    url: `${baseUrl}/odalar/${room.slug}`,
    lastModified: room.updatedAt,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...roomPages, ...blogPages]
}
