'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { 
  Bed, 
  Image as ImageIcon, 
  FileText, 
  Eye,
  TrendingUp,
  Calendar
} from 'lucide-react'

interface Stats {
  rooms: number
  gallery: number
  blogPosts: number
  totalViews: number
}

const quickActions = [
  { href: '/admin/odalar/yeni', label: 'Yeni Oda Ekle', icon: Bed, color: 'bg-blue-500' },
  { href: '/admin/blog/yeni', label: 'Yeni Blog Yazısı', icon: FileText, color: 'bg-green-500' },
  { href: '/admin/galeri/yeni', label: 'Yeni Fotoğraf', icon: ImageIcon, color: 'bg-purple-500' },
]

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    rooms: 0,
    gallery: 0,
    blogPosts: 0,
    totalViews: 0,
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/admin/stats')
      const data = await response.json()
      setStats(data)
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const statCards = [
    { label: 'Odalar', value: stats.rooms, icon: Bed, color: 'bg-blue-500' },
    { label: 'Galeri', value: stats.gallery, icon: ImageIcon, color: 'bg-purple-500' },
    { label: 'Blog Yazıları', value: stats.blogPosts, icon: FileText, color: 'bg-green-500' },
    { label: 'Toplam Görüntülenme', value: stats.totalViews, icon: Eye, color: 'bg-orange-500' },
  ]

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-serif text-3xl text-stone-800 mb-2">
          Dashboard
        </h1>
        <p className="text-stone-500">
          Diib House yönetim paneline hoş geldiniz.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-soft"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-stone-500 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-serif font-medium text-stone-800">
                  {isLoading ? '-' : stat.value}
                </p>
              </div>
              <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 shadow-soft mb-8">
        <h2 className="font-serif text-xl text-stone-800 mb-4">
          Hızlı İşlemler
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              href={action.href}
              className="flex items-center gap-4 p-4 rounded-xl border border-stone-200 hover:border-stone-300 hover:bg-stone-50 transition-all"
            >
              <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center`}>
                <action.icon className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium text-stone-700">{action.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Blog Posts */}
        <div className="bg-white rounded-xl p-6 shadow-soft">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif text-xl text-stone-800">
              Son Blog Yazıları
            </h2>
            <Link
              href="/admin/blog"
              className="text-sm text-earth-600 hover:text-earth-700"
            >
              Tümünü Gör
            </Link>
          </div>
          <div className="space-y-4">
            <p className="text-stone-500 text-sm">
              Son blog yazıları burada listelenecek...
            </p>
          </div>
        </div>

        {/* System Info */}
        <div className="bg-white rounded-xl p-6 shadow-soft">
          <h2 className="font-serif text-xl text-stone-800 mb-4">
            Sistem Bilgileri
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b border-stone-100">
              <span className="text-stone-500">Versiyon</span>
              <span className="text-stone-800 font-medium">1.0.0</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-stone-100">
              <span className="text-stone-500">Son Güncelleme</span>
              <span className="text-stone-800 font-medium flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date().toLocaleDateString('tr-TR')}
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-stone-100">
              <span className="text-stone-500">Durum</span>
              <span className="text-green-600 font-medium flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Aktif
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
