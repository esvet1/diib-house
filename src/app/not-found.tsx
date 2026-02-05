import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-50 px-4">
      <div className="text-center max-w-md">
        {/* 404 */}
        <div className="mb-8">
          <span className="text-9xl font-serif font-medium text-stone-200">
            404
          </span>
        </div>

        <h1 className="font-serif text-3xl text-stone-800 mb-4">
          Sayfa Bulunamadı
        </h1>
        <p className="text-stone-600 mb-8">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-stone-800 text-white font-medium rounded-xl hover:bg-stone-700 transition-colors"
          >
            <Home className="w-5 h-5" />
            Ana Sayfa
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-stone-100 text-stone-800 font-medium rounded-xl hover:bg-stone-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Geri Dön
          </button>
        </div>
      </div>
    </div>
  )
}
