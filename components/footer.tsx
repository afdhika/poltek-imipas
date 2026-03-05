"use client"

import { MapPin, Phone, Mail, ExternalLink } from "lucide-react"

const sitemapLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Program Studi", href: "#program-studi" },
  { label: "Berita", href: "#berita" },
  { label: "Blog", href: "#blog" },
  { label: "Jurnal Ilmiah", href: "#jurnal" },
  { label: "Perpustakaan", href: "#perpustakaan" },
  { label: "Galeri", href: "#galeri" },
  { label: "Pengumuman", href: "#pengumuman" },
]

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Twitter / X", href: "#" },
]

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Info */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-sm font-bold text-navy-dark" style={{ fontFamily: "var(--font-poppins)" }}>
                P
              </div>
              <div>
                <div className="text-sm font-bold leading-tight" style={{ fontFamily: "var(--font-poppins)" }}>
                  POLTEKIP
                </div>
                <div className="text-[10px] text-primary-foreground/50">
                  Politeknik Ilmu Pemasyarakatan
                </div>
              </div>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-primary-foreground/60">
              Perguruan Tinggi Kedinasan di bawah Kementerian Imigrasi dan
              Pemasyarakatan Republik Indonesia.
            </p>
            <div className="text-xs text-primary-foreground/40">
              Cerdas, Berintegritas, Berdedikasi
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gold" style={{ fontFamily: "var(--font-poppins)" }}>
              Kontak
            </h4>
            <div className="space-y-3 text-sm text-primary-foreground/60">
              <div className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/60" />
                <span>Jl. Raya Gandul No.4, Cinere, Depok, Jawa Barat 16514</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-gold/60" />
                <span>(021) 7530442</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-gold/60" />
                <span>info@poltekip.ac.id</span>
              </div>
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gold" style={{ fontFamily: "var(--font-poppins)" }}>
              Peta Situs
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {sitemapLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary-foreground/60 transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gold" style={{ fontFamily: "var(--font-poppins)" }}>
              Media Sosial
            </h4>
            <div className="space-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-primary-foreground/60 transition-colors hover:text-gold"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-primary-foreground/40 sm:flex-row">
          <span>&copy; {new Date().getFullYear()} Politeknik Ilmu Pemasyarakatan. Hak Cipta Dilindungi.</span>
          <span>Kementerian Imigrasi dan Pemasyarakatan Republik Indonesia</span>
        </div>
      </div>
    </footer>
  )
}
