import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { RoomDetail } from '@/components/rooms/RoomDetail'

interface PageProps {
  params: { slug: string }
}

async function getRoom(slug: string) {
  try {
    const room = await prisma.room.findUnique({
      where: { slug },
    })
    return room
  } catch (error) {
    console.error('Error fetching room:', error)
    return null
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const room = await getRoom(params.slug)
  
  if (!room) {
    return {
      title: 'Oda Bulunamadı',
    }
  }

  return {
    title: room.name,
    description: room.description,
    openGraph: {
      title: `${room.name} | Diib House`,
      description: room.description,
      images: room.images[0] ? [room.images[0]] : undefined,
    },
  }
}

export default async function RoomPage({ params }: PageProps) {
  const room = await getRoom(params.slug)

  if (!room) {
    notFound()
  }

  return <RoomDetail room={room} />
}
