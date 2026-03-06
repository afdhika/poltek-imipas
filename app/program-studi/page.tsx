"use client"

import { useState, useEffect } from "react"
import { Shield, Wrench, Users, ArrowLeft, ArrowRight, BookOpen, Award, Clock, Users2 } from "lucide-react"
import Link from "next/link"

const programs = [
  {
    icon: Shield,
    title: "D-IV Manajemen Pemasyarakatan",
    description:
      "Program studi yang mempersiapkan tenaga profesional dalam bidang manajemen lembaga pemasyarakatan, pengelolaan warga binaan, dan administrasi pemasyarakatan secara komprehensif.",
    akreditasi: "Terakreditasi Baik Sekali",
    durasi: "4 Tahun (8 Semester)",
    kuota: 120,
    slug: "manajemen-pemasyarakatan",
    highlight: [
      "Manajemen Lembaga Pemasyarakatan",
      "Administrasi Pemasyarakatan", 
      "Pengelolaan Warga Binaan",
      "Kebijakan Pemasyarakatan"
    ]
  },
  {
    icon: Wrench,
    title: "D-IV Teknik Pemasyarakatan",
    description:
      "Program studi yang fokus pada penguasaan teknologi keamanan, sistem pengawasan modern, dan teknik pengelolaan fasilitas pemasyarakatan yang efektif dan efisien.",
    akreditasi: "Terakreditasi Baik Sekali",
    durasi: "4 Tahun (8 Semester)",
    kuota: 115,
    slug: "teknik-pemasyarakatan",
    highlight: [
      "Teknologi Keamanan Pemasyarakatan",
      "Sistem Pengawasan Modern",
      "Teknik Fasilitas Pemasyarakatan",
      "Maintenance Alat Pengaman"
    ]
  },
  {
    icon: Users,
    title: "D-IV Bimbingan Kemasyarakatan",
    description:
      "Program studi yang menghasilkan tenaga ahli dalam bidang pembimbingan dan pendampingan klien pemasyarakatan, rehabilitasi sosial, dan reintegrasi masyarakat.",
    akreditasi: "Terakreditasi Baik",
    durasi: "4 Tahun (8 Semester)",
    kuota: 115,
    slug: "bimbingan-kemasyarakatan",
    highlight: [
      "Bimbingan dan Konseling",
      "Rehabilitasi Sosial",
      "Reintegrasi Masyarakat",
      "Psikologi Pemasyarakatan"
    ]
  },
]

export default function ProgramStudiPage() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement
      const scrollTop = el.scrollTop || document.body.scrollTop
      const scrollHeight = el.scrollHeight - el.clientHeight
      setScrollProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=DM+Serif+Display:ital@0;1&display=swap');

        .programs-root {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: var(--background, #fff);
          color: var(--foreground, #1B2A4A);
          min-height: 100vh;
        }

        /* Reading progress */
        .reading-progress {
          position: fixed;
          top: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(90deg, #1B3A6B, #C9A84C);
          z-index: 100;
          transition: width 0.1s linear;
        }

        /* Hero section */
        .programs-hero {
          background: linear-gradient(135deg, #1B3A6B 0%, #2C4F7C 100%);
          position: relative;
          overflow: hidden;
        }

        .programs-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .programs-hero-content {
          position: relative;
          z-index: 1;
        }

        /* Program cards */
        .program-card {
          background: white;
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
          border: 1px solid #e5e7eb;
          height: 100%;
        }

        .program-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border-color: #C9A84C;
        }

        .program-icon-wrapper {
          width: 64px;
          height: 64px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          transition: all 0.3s ease;
        }

        .program-card:hover .program-icon-wrapper {
          background: #1B3A6B;
          color: white;
        }

        .program-icon-wrapper.navy {
          background: #1B3A6B;
          color: white;
        }

        .program-icon-wrapper.gold {
          background: #C9A84C;
          color: white;
        }

        .program-icon-wrapper.teal {
          background: #0F766E;
          color: white;
        }

        /* Badge styles */
        .badge {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
          margin-right: 8px;
          margin-bottom: 8px;
        }

        .badge-navy {
          background: rgba(27, 58, 107, 0.1);
          color: #1B3A6B;
        }

        .badge-gold {
          background: rgba(201, 168, 76, 0.1);
          color: #C9A84C;
        }

        .badge-teal {
          background: rgba(15, 118, 110, 0.1);
          color: #0F766E;
        }

        /* Highlight list */
        .highlight-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .highlight-list li {
          padding: 8px 0;
          border-bottom: 1px solid #f3f4f6;
          font-size: 14px;
          color: #6b7280;
          display: flex;
          align-items: center;
        }

        .highlight-list li:before {
          content: '✓';
          color: #C9A84C;
          font-weight: bold;
          margin-right: 12px;
        }

        .highlight-list li:last-child {
          border-bottom: none;
        }

        /* Button styles */
        .btn-primary {
          background: #1B3A6B;
          color: white;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          background: #2C4F7C;
          transform: translateX(4px);
        }

        /* Back button */
        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: white;
          text-decoration: none;
          font-size: 14px;
          transition: all 0.3s ease;
          margin-bottom: 24px;
          padding: 8px 16px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .back-button:hover {
          color: white;
          background: rgba(255, 255, 255, 0.2);
          transform: translateX(-4px);
        }

        /* Stats section */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 24px;
          margin-top: 48px;
        }

        .stat-card {
          text-align: center;
          padding: 24px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
        }

        .stat-number {
          font-size: 32px;
          font-weight: 700;
          color: white;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.9);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .program-card {
            padding: 24px;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="programs-root">
        {/* Reading progress */}
        <div className="reading-progress" style={{ width: `${scrollProgress}%` }} />

        {/* Hero Section */}
        <section className="programs-hero py-20">
          <div className="programs-hero-content max-w-7xl mx-auto px-4">
            <Link href="/" className="back-button">
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Beranda
            </Link>

            <div className="text-center text-white">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                Akademik
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                Program Studi
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                POLTEKIP menyelenggarakan tiga program studi diploma empat (D-IV) yang 
                dirancang untuk menghasilkan tenaga profesional di bidang pemasyarakatan 
                dengan standar kompetensi yang tinggi.
              </p>
            </div>

            {/* Stats */}
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">3</div>
                <div className="stat-label">Program Studi</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">350</div>
                <div className="stat-label">Total Kuota</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">4</div>
                <div className="stat-label">Tahun Studi</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">D-IV</div>
                <div className="stat-label">Jenjang</div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-3">
              {programs.map((program, index) => {
                const iconColors = ['navy', 'gold', 'teal']
                return (
                  <div key={index} className="program-card">
                    <div className={`program-icon-wrapper ${iconColors[index]}`}>
                      <program.icon className="h-8 w-8" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                      {program.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {program.description}
                    </p>

                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="badge badge-navy">
                          <Award className="h-3 w-3 inline mr-1" />
                          {program.akreditasi}
                        </span>
                        <span className="badge badge-gold">
                          <Clock className="h-3 w-3 inline mr-1" />
                          {program.durasi}
                        </span>
                        <span className="badge badge-teal">
                          <Users2 className="h-3 w-3 inline mr-1" />
                          Kuota: {program.kuota}
                        </span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Fokus Studi
                      </h4>
                      <ul className="highlight-list">
                        {program.highlight.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <a href={`/program-studi/${program.slug}`} className="btn-primary">
                      Selengkapnya
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              Siap Bergabung dengan POLTEKIP?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Dapatkan informasi lengkap tentang pendaftaran, persyaratan, dan jadwal seleksi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="btn-primary">
                Panduan Pendaftaran
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#" className="btn-primary" style={{ background: '#C9A84C' }}>
                Download Brosur
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
