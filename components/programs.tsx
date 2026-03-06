"use client"

import { Shield, Wrench, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

const programs = [
  {
    icon: Shield,
    title: "D-IV Manajemen Pemasyarakatan",
    description:
      "Program studi yang mempersiapkan tenaga profesional dalam bidang manajemen lembaga pemasyarakatan, pengelolaan warga binaan, dan administrasi pemasyarakatan secara komprehensif.",
    akreditasi: "Terakreditasi Baik Sekali",
    durasi: "4 Tahun (8 Semester)",
  },
  {
    icon: Wrench,
    title: "D-IV Teknik Pemasyarakatan",
    description:
      "Program studi yang fokus pada penguasaan teknologi keamanan, sistem pengawasan modern, dan teknik pengelolaan fasilitas pemasyarakatan yang efektif dan efisien.",
    akreditasi: "Terakreditasi Baik Sekali",
    durasi: "4 Tahun (8 Semester)",
  },
  {
    icon: Users,
    title: "D-IV Bimbingan Kemasyarakatan",
    description:
      "Program studi yang menghasilkan tenaga ahli dalam bidang pembimbingan dan pendampingan klien pemasyarakatan, rehabilitasi sosial, dan reintegrasi masyarakat.",
    akreditasi: "Terakreditasi Baik",
    durasi: "4 Tahun (8 Semester)",
  },
]

export default function Programs() {
  return (
    <section id="program-studi" className="py-20 bg-cream">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section header */}
        <div className="scroll-reveal mb-16 text-center">
          <span className="mb-2 inline-block text-xs font-semibold tracking-widest text-gold uppercase">
            Akademik
          </span>
          <h2
            className="text-3xl font-bold text-navy md:text-4xl"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Program Studi
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            POLTEKIP menyelenggarakan tiga program studi diploma empat (D-IV) yang
            dirancang untuk menghasilkan tenaga profesional di bidang pemasyarakatan.
          </p>
        </div>

        {/* Cards */}
        <div className="scroll-reveal grid gap-6 md:grid-cols-3">
          {programs.map((program, i) => (
            <div
              key={i}
              className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-primary-foreground transition-colors group-hover:bg-gold group-hover:text-navy-dark">
                <program.icon className="h-7 w-7" />
              </div>

              <h3
                className="mb-3 text-lg font-bold text-foreground"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {program.title}
              </h3>

              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {program.description}
              </p>

              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-navy/10 px-3 py-1 text-[11px] font-medium text-navy">
                  {program.akreditasi}
                </span>
                <span className="rounded-full bg-gold/10 px-3 py-1 text-[11px] font-medium text-gold">
                  {program.durasi}
                </span>
              </div>

              <Link href="/program-studi" className="group/btn flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-gold">
                Selengkapnya
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
