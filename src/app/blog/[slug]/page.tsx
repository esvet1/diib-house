import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { BlogDetail } from '@/components/blog/BlogDetail'

interface PageProps {
  params: { slug: string }
}

async function getBlogPost(slug: string) {
  try {
    const post = await prisma.blogPost.findUnique({
      where: { slug },
    })
    return post
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

async function getRelatedPosts(category: string, currentSlug: string) {
  try {
    const posts = await prisma.blogPost.findMany({
      where: {
        category,
        slug: { not: currentSlug },
        published: true,
      },
      take: 3,
      orderBy: { publishedAt: 'desc' },
    })
    return posts
  } catch (error) {
    console.error('Error fetching related posts:', error)
    return []
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: 'Yazı Bulunamadı',
    }
  }

  return {
    title: post.metaTitle || post.title,
    description: post.metaDesc || post.excerpt,
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDesc || post.excerpt,
      images: post.ogImage || post.coverImage ? [post.ogImage || post.coverImage] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(post.category, post.slug)

  return <BlogDetail post={post} relatedPosts={relatedPosts} />
}
