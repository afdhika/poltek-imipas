"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X, Search, Globe, ChevronDown } from "lucide-react"

const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  {
    label: "Program Studi",
    href: "#program-studi",
    children: [
      { label: "D-IV Manajemen Pemasyarakatan", href: "#prodi-diii" },
      { label: "D-IV Teknik Pemasyarakatan", href: "#prodi-div" },
      { label: "D-IV Bimbingan Pemasyarakatan", href: "#prodi-s1" },
    ],
  },
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeLink, setActiveLink] = useState("Beranda")
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=DM+Serif+Display&display=swap');

        .navbar-root {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .topbar {
          background: #0a1628;
          border-bottom: 1px solid rgba(201,163,79,0.15);
          padding: 6px 0;
          font-size: 11px;
          letter-spacing: 0.02em;
          color: rgba(255,255,255,0.45);
        }

        .topbar-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .lang-btn {
          display: flex;
          align-items: center;
          gap: 5px;
          background: transparent;
          border: 1px solid rgba(201,163,79,0.25);
          color: rgba(201,163,79,0.7);
          border-radius: 4px;
          padding: 3px 8px;
          font-size: 11px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: all 0.2s;
        }

        .lang-btn:hover {
          background: rgba(201,163,79,0.1);
          color: #c9a34f;
          border-color: rgba(201,163,79,0.5);
        }

        .main-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .main-nav.scrolled .nav-body {
          background: rgba(8, 17, 38, 0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 1px 0 rgba(201,163,79,0.15), 0 8px 32px rgba(0,0,0,0.35);
          padding: 10px 0;
        }

        .main-nav .nav-body {
          background: rgba(10, 22, 40, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 14px 0;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        /* Logo */
        .logo-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .logo-badge {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg, #c9a34f 0%, #e8c97a 50%, #b8892f 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'DM Serif Display', serif;
          font-size: 18px;
          color: #0a1628;
          font-weight: 400;
          box-shadow: 0 2px 12px rgba(201,163,79,0.35);
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
        }

        .logo-badge::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 60%);
          border-radius: inherit;
        }

        .logo-text-main {
          font-size: 15px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.08em;
          line-height: 1;
        }

        .logo-text-sub {
          font-size: 10px;
          color: rgba(255,255,255,0.45);
          letter-spacing: 0.04em;
          margin-top: 3px;
          line-height: 1;
        }

        /* Desktop nav links */
        .desktop-links {
          display: none;
          align-items: center;
          gap: 2px;
        }

        @media (min-width: 1024px) {
          .desktop-links { display: flex; }
        }

        .nav-item {
          position: relative;
        }

        .nav-link-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          background: transparent;
          border: none;
          padding: 7px 11px;
          border-radius: 8px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.7);
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
          white-space: nowrap;
          letter-spacing: 0.01em;
        }

        .nav-link-btn:hover {
          color: #ffffff;
          background: rgba(255,255,255,0.07);
        }

        .nav-link-btn.active {
          color: #c9a34f;
          background: rgba(201,163,79,0.08);
        }

        .nav-link-btn.active .chevron {
          color: #c9a34f;
        }

        .chevron {
          width: 13px;
          height: 13px;
          color: rgba(255,255,255,0.4);
          transition: transform 0.25s;
        }

        .chevron.open {
          transform: rotate(180deg);
        }

        /* Active indicator dot */
        .active-dot {
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #c9a34f;
        }

        /* Dropdown */
        .dropdown-menu {
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%);
          background: #0e1e38;
          border: 1px solid rgba(201,163,79,0.15);
          border-radius: 12px;
          padding: 6px;
          min-width: 220px;
          box-shadow: 0 16px 48px rgba(0,0,0,0.5), 0 1px 0 rgba(201,163,79,0.1) inset;
          animation: dropIn 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 100;
        }

        @keyframes dropIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        .dropdown-item {
          display: block;
          padding: 9px 14px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          transition: all 0.15s;
        }

        .dropdown-item:hover {
          color: #ffffff;
          background: rgba(201,163,79,0.1);
        }

        /* Action buttons */
        .actions {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
        }

        .icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 9px;
          background: transparent;
          border: none;
          cursor: pointer;
          color: rgba(255,255,255,0.55);
          transition: all 0.2s;
        }

        .icon-btn:hover {
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.9);
        }

        .mobile-btn {
          display: flex;
        }

        @media (min-width: 1024px) {
          .mobile-btn { display: none; }
        }

        /* Divider */
        .actions-divider {
          width: 1px;
          height: 20px;
          background: rgba(255,255,255,0.1);
          margin: 0 2px;
        }

        /* Mobile menu */
        .mobile-menu {
          background: #0a1628;
          border-top: 1px solid rgba(201,163,79,0.12);
          animation: slideDown 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @media (min-width: 1024px) {
          .mobile-menu { display: none; }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .mobile-menu-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 12px 16px 20px;
        }

        .mobile-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 11px 14px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 500;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          transition: all 0.15s;
          margin-bottom: 2px;
        }

        .mobile-link:hover,
        .mobile-link.active {
          background: rgba(201,163,79,0.08);
          color: #c9a34f;
        }

        .mobile-sub {
          margin: 0 0 6px 14px;
          padding: 0 0 0 14px;
          border-left: 1px solid rgba(201,163,79,0.2);
        }

        .mobile-sub-link {
          display: block;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: all 0.15s;
          margin-bottom: 1px;
        }

        .mobile-sub-link:hover {
          color: rgba(255,255,255,0.85);
          background: rgba(255,255,255,0.04);
        }

        .mobile-divider {
          height: 1px;
          background: rgba(255,255,255,0.06);
          margin: 8px 0;
        }
      `}</style>

      <nav className="main-nav navbar-root" style={{ top: 0 }}>
        {/* Top bar */}
        <div className="topbar">
          <div className="topbar-inner">
            <span>Kementerian Imigrasi dan Pemasyarakatan Republik Indonesia</span>
            <button className="lang-btn" onClick={() => setLang(lang === "ID" ? "EN" : "ID")}>
              <Globe style={{ width: 11, height: 11 }} />
              {lang}
            </button>
          </div>
        </div>

        {/* Main nav body */}
        <div className={`nav-body ${scrolled ? "scrolled" : ""}`} style={{ transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)" }}>
          <div className="nav-inner" ref={dropdownRef}>
            {/* Logo */}
            <a href="#beranda" className="logo-wrap">
              <div className="logo-badge">P</div>
              <div className="hidden sm:block">
                <div className="logo-text-main">POLTEKIP</div>
                <div className="logo-text-sub">Politeknik Ilmu Pemasyarakatan</div>
              </div>
            </a>

            {/* Desktop links */}
            <div className="desktop-links">
              {navItems.map((item) => (
                <div key={item.href} className="nav-item">
                  {item.children ? (
                    <>
                      <button
                        className={`nav-link-btn ${activeDropdown === item.label ? "active" : ""}`}
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      >
                        {item.label}
                        <ChevronDown className={`chevron ${activeDropdown === item.label ? "open" : ""}`} />
                      </button>
                      {activeDropdown === item.label && (
                        <div className="dropdown-menu">
                          {item.children.map((child) => (
                            <a key={child.href} href={child.href} className="dropdown-item" onClick={() => setActiveDropdown(null)}>
                              {child.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className={`nav-link-btn ${activeLink === item.label ? "active" : ""}`}
                      onClick={() => setActiveLink(item.label)}
                    >
                      {item.label}
                      {activeLink === item.label && <span className="active-dot" />}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="actions">
              <button className="icon-btn" onClick={onSearchOpen} aria-label="Cari">
                <Search style={{ width: 16, height: 16 }} />
              </button>
              <div className="actions-divider" />
              <button
                className="icon-btn mobile-btn"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menu"
              >
                {mobileOpen
                  ? <X style={{ width: 18, height: 18 }} />
                  : <Menu style={{ width: 18, height: 18 }} />
                }
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-inner">
              {navItems.map((item, i) => (
                <div key={item.href}>
                  {i === 3 && <div className="mobile-divider" />}
                  <a
                    href={item.href}
                    className={`mobile-link ${activeLink === item.label ? "active" : ""}`}
                    onClick={() => { setMobileOpen(false); setActiveLink(item.label) }}
                  >
                    {item.label}
                    {item.children && <ChevronDown style={{ width: 14, height: 14 }} />}
                  </a>
                  {item.children && (
                    <div className="mobile-sub">
                      {item.children.map((child) => (
                        <a key={child.href} href={child.href} className="mobile-sub-link" onClick={() => setMobileOpen(false)}>
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}