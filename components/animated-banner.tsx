"use client"

import { useState, useEffect, useRef } from "react"
import { Shield, Users, Award, TrendingUp, Star, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function AnimatedBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const slides = [
    {
      icon: Shield,
      title: "Jurusan Keimigrasian",
      subtitle: "3 Program Studi Unggulan",
      description: "Administrasi, Hukum, dan Manajemen Teknologi Keimigrasian",
      color: "from-blue-600 to-blue-800",
      stats: "3 Program • Terakreditasi Baik"
    },
    {
      icon: Users,
      title: "Jurusan Pemasyarakatan",
      subtitle: "3 Program Studi Terakreditasi",
      description: "Manajemen, Teknik, dan Bimbingan Pemasyarakatan",
      color: "from-green-600 to-green-800",
      stats: "3 Program • Terakreditasi Baik Sekali"
    },
    {
      icon: Award,
      title: "POLTEKIMIPAS",
      subtitle: "Politeknik Ilmu Pemasyarakatan",
      description: "Menghasilkan tenaga profesional di bidang keimigrasian dan pemasyarakatan",
      color: "from-purple-600 to-purple-800",
      stats: "6 Program • 4 Tahun Studi"
    }
  ]

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Start auto-slide only on desktop
    if (!isMobile) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000)
    }

    // Trigger entrance animation
    setTimeout(() => setIsVisible(true), 100)

    return () => {
      window.removeEventListener('resize', checkMobile)
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isMobile, slides.length])

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    if (!isMobile) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000)
    }
  }

  const currentSlideData = slides[currentSlide]

  if (isMobile) {
    // Mobile version - static banner without animations
    return (
      <section className="relative py-16 bg-gradient-to-br from-navy to-navy-dark overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm mb-6">
              <Star className="h-4 w-4" />
              Program Studi Unggulan
            </div>
            
            <h1 className="text-3xl font-bold text-white mb-4">
              POLTEKIMIPAS
            </h1>
            
            <p className="text-lg text-white/90 mb-6">
              Politeknik Ilmu Pemasyarakatan
            </p>
            
            <div className="flex flex-col gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-left">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="h-5 w-5 text-blue-300" />
                  <span className="font-semibold text-white">Jurusan Keimigrasian</span>
                </div>
                <p className="text-sm text-white/80">3 Program Studi Terakreditasi Baik</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-left">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="h-5 w-5 text-green-300" />
                  <span className="font-semibold text-white">Jurusan Pemasyarakatan</span>
                </div>
                <p className="text-sm text-white/80">3 Program Studi Terakreditasi</p>
              </div>
            </div>
            
            <Link 
              href="/program-studi" 
              className="inline-flex items-center gap-2 bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors"
            >
              Lihat Program Studi
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    )
  }

  // Desktop version - with animations
  return (
    <section className="relative h-[600px] overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.color} transition-all duration-1000`} />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-500" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-2 gap-12 items-center">
            {/* Left content with sliding animation */}
            <div className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm mb-6">
                <Star className="h-4 w-4" />
                Program Studi Unggulan
              </div>
              
              <div className="mb-8">
                <h1 className={`text-5xl font-bold text-white mb-4 transform transition-all duration-700 delay-200 ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}>
                  {currentSlideData.title}
                </h1>
                
                <p className={`text-2xl text-white/90 mb-4 transform transition-all duration-700 delay-300 ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}>
                  {currentSlideData.subtitle}
                </p>
                
                <p className={`text-lg text-white/80 transform transition-all duration-700 delay-500 ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}>
                  {currentSlideData.description}
                </p>
              </div>

              <div className={`flex items-center gap-6 mb-8 transform transition-all duration-700 delay-700 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-300" />
                  <span className="text-white/90 text-sm">{currentSlideData.stats}</span>
                </div>
              </div>

              <Link 
                href="/program-studi" 
                className={`inline-flex items-center gap-2 bg-gold text-navy px-8 py-4 rounded-lg font-semibold hover:bg-gold/90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: '900ms' }}
              >
                Lihat Program Studi
                <ChevronRight className="h-5 w-5" />
              </Link>
            </div>

            {/* Right side - animated icon */}
            <div className={`flex justify-center transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}>
              <div className="relative">
                <div className="w-64 h-64 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse">
                  <currentSlideData.icon className="h-32 w-32 text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gold rounded-full flex items-center justify-center animate-bounce">
                  <Award className="h-8 w-8 text-navy" />
                </div>
              </div>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white w-8' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slide-in {
          animation: slideInLeft 1s ease-out;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-700 { animation-delay: 700ms; }
        .delay-900 { animation-delay: 900ms; }
      `}</style>
    </section>
  )
}
