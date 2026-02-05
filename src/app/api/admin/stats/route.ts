import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const [rooms, gallery, blogPosts, blogViews] = await Promise.all([
      prisma.room.count(),
      prisma.galleryImage.count(),
      prisma.blogPost.count(),
      prisma.blogPost.aggregate({
        _sum: { views: true },
      }),
    ])

    return NextResponse.json({
      rooms,
      gallery,
      blogPosts,
      totalViews: blogViews._sum.views || 0,
    })
  } catch (error) {
    console.error('Error fetching stats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    )
  }
}
