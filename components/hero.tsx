"use client"

import { useEffect, useState, useRef } from "react"
import { ChevronDown, Users, Award, Clock } from "lucide-react"

function CountUp({ target, suffix = "", icon }: { target: number; suffix?: string; icon?: React.ReactNode }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          
          // Wait for splash screen to complete and user to see hero
          setTimeout(() => {
            const duration = 3000 // 3 detik untuk animasi yang lebih cepat dan bagus
            const startTime = performance.now()

            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime
              const progress = Math.min(elapsed / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setCount(Math.floor(eased * target))
              if (progress < 1) requestAnimationFrame(animate)
            }
            requestAnimationFrame(animate)
          }, 4000) // 4 detik delay untuk splash + user melihat hero
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="text-center">
      {icon && (
        <div className="mb-3 flex justify-center">
          <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-gold">
            {icon}
          </div>
        </div>
      )}
      <div className="text-3xl font-bold text-gold md:text-4xl" style={{ fontFamily: "var(--font-poppins)" }}>
        {count.toLocaleString()}
        {suffix}
      </div>
    </div>
  )
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Kampus POLTEKIMIPAS"
          className={`h-full w-full object-cover ${loaded ? "animate-slow-zoom" : ""}`}
        />
        <div className="absolute inset-0 bg-navy-dark/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <div
          className={`transition-all duration-1000 ${
            loaded ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}
        >
          <a 
            href="https://kemenimipas.go.id/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mb-4 inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-medium tracking-wider text-gold uppercase transition-all duration-300 hover:bg-gold/20 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/20"
          >
            Kementerian Imigrasi dan Pemasyarakatan RI
          </a>
        </div>

        <h1
          className={`mb-2 text-4xl font-extrabold leading-tight tracking-tight text-primary-foreground md:text-6xl lg:text-7xl transition-all duration-1000 delay-200 ${
            loaded ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Politeknik Imigrasi
          <br />
          <span className="text-gold">Pemasyarakatan</span>
        </h1>

        <p
          className={`mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/70 md:text-xl transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          Cerdas, Berintegritas, Berdedikasi
        </p>

        <div
          className={`mt-8 flex flex-wrap items-center justify-center gap-4 transition-all duration-1000 delay-1000 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <a
            href="#tentang"
            className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy-dark transition-all hover:bg-gold-light hover:shadow-lg"
          >
            Pelajari Lebih Lanjut
            <ChevronDown className="h-4 w-4" />
          </a>
          <a
            href="#program-studi"
            className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:border-gold hover:text-gold"
          >
            Program Studi
          </a>
        </div>

        {/* Stats */}
        <div
          className={`mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-8 transition-all duration-1000 delay-1000 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="text-center">
            <CountUp 
              target={2500} 
              suffix="+" 
              icon={<Users className="h-6 w-6" />}
            />
            <div className="mt-1 text-xs text-primary-foreground/50 uppercase tracking-wider">
              Total Taruna
            </div>
          </div>
          
          <div className="text-center">
            <CountUp 
              target={15000} 
              suffix="+" 
              icon={<Award className="h-6 w-6" />}
            />
            <div className="mt-1 text-xs text-primary-foreground/50 uppercase tracking-wider">
              Alumni
            </div>
          </div>
          
          <div className="text-center">
            <CountUp 
              target={60} 
              suffix="+" 
              icon={<Clock className="h-6 w-6" />}
            />
            <div className="mt-1 text-xs text-primary-foreground/50 uppercase tracking-wider">
              Tahun Pengabdian
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-primary-foreground/40" />
      </div>
    </section>
  )
}
