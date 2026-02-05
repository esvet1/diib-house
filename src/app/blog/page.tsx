import { Metadata } from 'next'
import { prisma } from '@/lib/prisma'
import { BlogList } from '@/components/blog/BlogList'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Şanlıurfa gezi rehberi, Balıklıgöl, Urfa mutfağı, Göbeklitepe ve daha fazlası. Diib House blogunda Şanlıurfa\'yı keşfedin.',
  openGraph: {
    title: 'Blog | Diib House',
    description: 'Şanlıurfa gezi rehberi, Balıklıgöl, Urfa mutfağı, Göbeklitepe ve daha fazlası.',
  },
}

async function getBlogPosts() {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { publishedAt: 'desc' },
    })
    return posts
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-stone-100">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block text-earth-600 text-sm font-medium uppercase tracking-widest mb-4">
              Blog
            </span>
            <h1 className="heading-xl text-stone-800 mb-4">
              Şanlıurfa'yı Keşfedin
            </h1>
            <p className="text-stone-600 text-lg">
              Gezi rehberleri, tarihi yerler, yerel lezzetler ve daha fazlası.
            </p>
          </div>
        </div>
      </section>

      {/* Blog List */}
      <BlogList posts={posts} />
    </>
  )
}
