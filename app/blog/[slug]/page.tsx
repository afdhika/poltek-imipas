"use client"

import React from "react"
import { Clock, User, ArrowLeft, Calendar, Share2 } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const posts = [
  {
    id: 1,
    slug: "transformasi-digital-sistem-pemasyarakatan",
    author: "Dr. Haryono, M.Si.",
    authorInitial: "H",
    readTime: "5 menit",
    tags: ["Pemasyarakatan", "Opini"],
    title: "Transformasi Digital dalam Sistem Pemasyarakatan Indonesia",
    excerpt: "Perkembangan teknologi digital membawa perubahan signifikan dalam tata kelola lembaga pemasyarakatan. Blog ini membahas tantangan dan peluang digitalisasi.",
    content: `
      <p class="mb-4">Perkembangan teknologi digital telah membawa perubahan signifikan dalam berbagai aspek kehidupan, termasuk dalam tata kelola lembaga pemasyarakatan. Transformasi digital di sistem pemasyarakatan Indonesia bukan lagi menjadi pilihan, melainkan keharusan untuk meningkatkan efektivitas dan efisiensi.</p>
      
      <h3 class="text-xl font-bold mb-3 mt-6">Tantangan Digitalisasi</h3>
      <p class="mb-4">Beberapa tantangan utama dalam implementasi digitalisasi pemasyarakatan antara lain:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Keterbatasan infrastruktur teknologi di beberapa wilayah</li>
        <li>Kebutuhan pelatihan sumber daya manusia yang memadai</li>
        <li>Aspek keamanan data dan privasi narapidana</li>
        <li>Integrasi sistem yang sudah ada dengan teknologi baru</li>
      </ul>
      
      <h3 class="text-xl font-bold mb-3 mt-6">Peluang dan Manfaat</h3>
      <p class="mb-4">Di sisi lain, digitalisasi membawa banyak peluang positif:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Peningkatan transparansi dan akuntabilitas</li>
        <li>Optimalisasi manajemen data narapidana</li>
        <li>Mempermudah proses rehabilitasi melalui e-learning</li>
        <li>Efisiensi dalam administrasi dan pelaporan</li>
      </ul>
      
      <h3 class="text-xl font-bold mb-3 mt-6">Kesimpulan</h3>
      <p class="mb-4">Transformasi digital dalam sistem pemasyarakatan merupakan langkah strategis yang perlu diimplementasikan secara bertahap. Dengan pendekatan yang tepat, digitalisasi dapat memberikan dampak positif signifikan terhadap peningkatan kualitas layanan pemasyarakatan di Indonesia.</p>
    `,
    publishDate: "2024-03-15"
  },
  {
    id: 2,
    slug: "pendekatan-humanis-bimbingan-kemasyarakatan",
    author: "Dra. Siti Rahayu, M.Hum.",
    authorInitial: "S",
    readTime: "7 menit",
    tags: ["Pendidikan", "Rehabilitasi"],
    title: "Pendekatan Humanis dalam Bimbingan Kemasyarakatan",
    excerpt: "Menggali lebih dalam tentang pentingnya pendekatan humanis dalam proses rehabilitasi dan reintegrasi sosial bagi warga binaan pemasyarakatan.",
    content: `
      <p class="mb-4">Pendekatan humanis dalam bimbingan kemasyarakatan merupakan paradigma penting yang menempatkan martabat dan hak asasi manusia sebagai fondasi utama dalam proses rehabilitasi narapidana.</p>
      
      <h3 class="text-xl font-bold mb-3 mt-6">Konsep Humanisme dalam Pemasyarakatan</h3>
      <p class="mb-4">Humanisme dalam konteks pemasyarakatan mengakui bahwa setiap individu, termasuk narapidana, memiliki potensi untuk berubah dan berkembang menjadi pribadi yang lebih baik. Pendekatan ini berfokus pada:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Penghormatan terhadap hak asasi manusia</li>
        <li>Pemberdayaan potensi individu</li>
        <li>Pembangunan kembali rasa percaya diri</li>
        <li>Perspektif rehabilitatif bukan retaliatif</li>
      </ul>
      
      <h3 class="text-xl font-bold mb-3 mt-6">Implementasi Praktis</h3>
      <p class="mb-4">Implementasi pendekatan humanis dapat dilakukan melalui berbagai program:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Konseling individual dan kelompok</li>
        <li>Program keterampilan vokasional</li>
        <li>Pendidikan formal dan non-formal</li>
        <li>Terapi spiritual dan keagamaan</li>
      </ul>
      
      <h3 class="text-xl font-bold mb-3 mt-6">Tantangan dan Solusi</h3>
      <p class="mb-4">Meskipun memiliki banyak keunggulan, implementasi pendekatan humanis menghadapi beberapa tantangan yang perlu diatasi dengan solusi yang inovatif dan komprehensif.</p>
    `,
    publishDate: "2024-03-10"
  },
  {
    id: 3,
    slug: "urgensi-pembaruan-regulasi-pemasyarakatan",
    author: "Bambang Supriyadi, S.H., M.H.",
    authorInitial: "B",
    readTime: "4 menit",
    tags: ["Hukum", "Kebijakan"],
    title: "Urgensi Pembaruan Regulasi Pemasyarakatan di Era Modern",
    excerpt: "Mengkaji kebutuhan pembaruan regulasi pemasyarakatan untuk mengakomodasi perkembangan hukum dan hak asasi manusia secara global.",
    content: `
      <p class="mb-4">Regulasi pemasyarakatan di Indonesia perlu segera diperbarui untuk mengakomodasi perkembangan hukum dan standar hak asasi manusia yang terus berkembang di tingkat global.</p>
      
      <h3 class="text-xl font-bold mb-3 mt-6">Kebutuhan Reformasi Regulasi</h3>
      <p class="mb-4">Beberapa area yang memerlukan pembaruan regulasi meliputi:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Standar hak narapidana yang lebih komprehensif</li>
        <li>Mekanisme rehabilitasi yang modern</li>
        <li>Integrasi teknologi dalam manajemen</li>
        <li>Kerja sama internasional yang lebih baik</li>
      </ul>
      
      <h3 class="text-xl font-bold mb-3 mt-6">Dampak Terhadap Sistem</h3>
      <p class="mb-4">Pembaruan regulasi diharapkan dapat memberikan dampak positif terhadap efektivitas sistem pemasyarakatan secara keseluruhan.</p>
    `,
    publishDate: "2024-03-05"
  },
  {
    id: 4,
    slug: "implementasi-smart-prison-konsep-dan-tantangan",
    author: "Dr. Ahmad Fauzi, M.T.",
    authorInitial: "A",
    readTime: "6 menit",
    tags: ["Teknologi", "Keamanan"],
    title: "Implementasi Smart Prison: Konsep dan Tantangan",
    excerpt: "Membahas konsep smart prison yang memanfaatkan IoT dan AI untuk meningkatkan efisiensi pengelolaan lembaga pemasyarakatan.",
    content: `
      <p class="mb-4">Konsep Smart Prison merupakan inovasi dalam sistem pemasyarakatan yang memanfaatkan teknologi Internet of Things (IoT) dan Artificial Intelligence (AI) untuk meningkatkan efisiensi dan keamanan.</p>
      
      <h3 class="text-xl font-bold mb-3 mt-6">Teknologi dalam Smart Prison</h3>
      <p class="mb-4">Beberapa teknologi utama yang diimplementasikan:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Sistem monitoring real-time dengan CCTV AI</li>
        <li>Sensor IoT untuk deteksi bahaya</li>
        <li>Sistem manajemen data terintegrasi</li>
        <li>E-learning untuk rehabilitasi</li>
      </ul>
      
      <h3 class="text-xl font-bold mb-3 mt-6">Tantangan Implementasi</h3>
      <p class="mb-4">Implementasi Smart Prison menghadapi tantangan teknis dan non-teknis yang perlu dipertimbangkan secara matang.</p>
    `,
    publishDate: "2024-02-28"
  }
]

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = React.use(params)
  const post = posts.find(p => p.slug === resolvedParams.slug)
  
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-cream">
      <article className="mx-auto max-w-4xl px-4 py-12">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-navy transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Blog
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-navy/5 px-3 py-1 text-xs font-medium text-navy"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1
            className="text-4xl font-bold text-navy mb-6 leading-tight"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-sm font-bold text-primary-foreground">
                {post.authorInitial}
              </div>
              <span className="font-medium text-foreground">{post.author}</span>
            </div>
            
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {new Date(post.publishDate).toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </div>
            
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime} baca
            </div>
          </div>

          <div className="h-px bg-border w-full" />
        </header>

        {/* Article Content */}
        <div 
          className="prose prose-navy max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Article Footer */}
        <footer className="border-t border-border pt-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Bagikan blog ini</h3>
              <div className="flex gap-2">
                <button className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-navy transition-colors">
                  <Share2 className="h-4 w-4" />
                  Salin link
                </button>
              </div>
            </div>
            
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 px-4 py-2 bg-navy text-primary-foreground rounded-lg hover:bg-navy/90 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Lihat Blog Lainnya
            </Link>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 POLTEKIP. Semua hak dilindungi.</p>
          </div>
        </footer>
      </article>
    </div>
  )
}
