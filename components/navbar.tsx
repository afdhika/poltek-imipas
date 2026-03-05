"use client"

import { useState, useEffect } from "react"
import { Menu, X, Search, Globe } from "lucide-react"

const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Program Studi", href: "#program-studi" },
  { label: "Berita", href: "#berita" },
  { label: "Blog", href: "#blog" },
  { label: "Jurnal", href: "#jurnal" },
  { label: "Perpustakaan", href: "#perpustakaan" },
  { label: "Galeri", href: "#galeri" },
  { label: "Pengumuman", href: "#pengumuman" },
]

interface NavbarProps {
  onSearchOpen: () => void
}

export default function Navbar({ onSearchOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lang, setLang] = useState<"ID" | "EN">("ID")

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-dark/95 backdrop-blur-md shadow-lg"
          : "bg-navy-dark/80 backdrop-blur-sm"
      }`}
    >
      {/* Top bar */}
      <div className="bg-navy-dark border-b border-navy-light/20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-xs text-primary-foreground/70">
          <span>Kementerian Imigrasi dan Pemasyarakatan Republik Indonesia</span>
          <button
            onClick={() => setLang(lang === "ID" ? "EN" : "ID")}
            className="flex items-center gap-1.5 rounded px-2 py-0.5 transition-colors hover:bg-navy-light/30 text-primary-foreground/70 hover:text-primary-foreground"
          >
            <Globe className="h-3 w-3" />
            {lang}
          </button>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#beranda" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-navy-dark font-bold text-sm" style={{ fontFamily: "var(--font-poppins)" }}>
            P
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-bold text-primary-foreground leading-tight" style={{ fontFamily: "var(--font-poppins)" }}>
              POLTEKIP
            </div>
            <div className="text-[10px] text-primary-foreground/60">
              Politeknik Ilmu Pemasyarakatan
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link text-sm text-primary-foreground/80 transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onSearchOpen}
            className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors text-primary-foreground/70 hover:bg-navy-light/30 hover:text-primary-foreground"
            aria-label="Cari"
          >
            <Search className="h-4 w-4" />
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors lg:hidden text-primary-foreground/70 hover:bg-navy-light/30 hover:text-primary-foreground"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-navy-light/20 bg-navy-dark/95 backdrop-blur-md lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2.5 text-sm text-primary-foreground/80 transition-colors hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
