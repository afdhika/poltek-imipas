"use client"

import { useEffect, useState } from "react"

export default function SplashIntro({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<
    "initial" | "logo-in" | "text-in" | "tagline-in" | "split" | "done"
  >("initial")

  useEffect(() => {
    // Phase 1: Logo circle appears (scale + fade)
    const t1 = setTimeout(() => setPhase("logo-in"), 300)
    // Phase 2: "POLTEKIP" text types in
    const t2 = setTimeout(() => setPhase("text-in"), 1000)
    // Phase 3: Tagline fades in
    const t3 = setTimeout(() => setPhase("tagline-in"), 2200)
    // Phase 4: Curtains split open
    const t4 = setTimeout(() => setPhase("split"), 3400)
    // Phase 5: Remove splash entirely
    const t5 = setTimeout(() => {
      setPhase("done")
      onComplete()
    }, 4600)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
      clearTimeout(t5)
    }
  }, [onComplete])

  if (phase === "done") return null

  const isSplit = phase === "split"

  return (
    <div
      className="fixed inset-0 z-[200] pointer-events-none"
      aria-hidden="true"
    >
      {/* Left curtain */}
      <div
        className="absolute top-0 left-0 h-full w-1/2 bg-navy-dark transition-transform duration-[1200ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
        style={{
          transform: isSplit ? "translateX(-100%)" : "translateX(0)",
        }}
      />
      {/* Right curtain */}
      <div
        className="absolute top-0 right-0 h-full w-1/2 bg-navy-dark transition-transform duration-[1200ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
        style={{
          transform: isSplit ? "translateX(100%)" : "translateX(0)",
        }}
      />

      {/* Subtle pattern overlay on curtains */}
      <div
        className="absolute inset-0 transition-opacity duration-[1200ms]"
        style={{
          opacity: isSplit ? 0 : 0.04,
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(201,168,76,0.4) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Gold line divider (center seam) */}
      <div
        className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 transition-opacity duration-500"
        style={{
          opacity: isSplit ? 0 : 0.3,
          background:
            "linear-gradient(to bottom, transparent 10%, var(--gold) 40%, var(--gold) 60%, transparent 90%)",
        }}
      />

      {/* Center content */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700"
        style={{ opacity: isSplit ? 0 : 1 }}
      >
        {/* Logo circle */}
        <div
          className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold/40 bg-gold text-navy-dark transition-all duration-700 md:h-24 md:w-24"
          style={{
            transform:
              phase === "initial"
                ? "scale(0) rotate(-180deg)"
                : "scale(1) rotate(0deg)",
            opacity: phase === "initial" ? 0 : 1,
          }}
        >
          <span
            className="text-2xl font-extrabold md:text-3xl"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            P
          </span>
        </div>

        {/* POLTEKIP letters */}
        <div className="mt-6 flex items-center gap-0.5 overflow-hidden">
          {"POLTEKIMIPAS".split("").map((char, i) => (
            <span
              key={i}
              className="inline-block text-3xl font-extrabold tracking-[0.15em] text-primary-foreground md:text-5xl transition-all duration-500"
              style={{
                fontFamily: "var(--font-poppins)",
                transform:
                  phase === "initial" || phase === "logo-in"
                    ? "translateY(100%) rotateX(90deg)"
                    : "translateY(0) rotateX(0deg)",
                opacity:
                  phase === "initial" || phase === "logo-in" ? 0 : 1,
                transitionDelay: `${i * 80}ms`,
              }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* Underline */}
        <div
          className="mt-3 h-0.5 rounded-full bg-gold transition-all duration-700 delay-300"
          style={{
            width:
              phase === "text-in" || phase === "tagline-in"
                ? "120px"
                : "0px",
            opacity:
              phase === "text-in" || phase === "tagline-in" ? 1 : 0,
          }}
        />

        {/* Full name */}
        <p
          className="mt-4 text-xs font-medium tracking-[0.25em] text-primary-foreground/50 uppercase transition-all duration-700 md:text-sm"
          style={{
            transform:
              phase === "tagline-in"
                ? "translateY(0)"
                : "translateY(12px)",
            opacity: phase === "tagline-in" ? 1 : 0,
          }}
        >
          Politeknik Ilmu Pemasyarakatan
        </p>

        {/* Tagline */}
        <p
          className="mt-2 text-xs tracking-[0.2em] text-gold/80 transition-all duration-700 delay-200 md:text-sm"
          style={{
            transform:
              phase === "tagline-in"
                ? "translateY(0)"
                : "translateY(12px)",
            opacity: phase === "tagline-in" ? 1 : 0,
          }}
        >
          Cerdas, Berintegritas, Berdedikasi
        </p>

        {/* Loading dots */}
        <div className="mt-8 flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-gold/60"
              style={{
                animation:
                  phase !== "initial" && !isSplit
                    ? `splash-dot 1.2s ease-in-out ${i * 0.2}s infinite`
                    : "none",
                opacity: isSplit ? 0 : 0.6,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
