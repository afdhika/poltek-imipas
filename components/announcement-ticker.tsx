"use client"

import { Bell } from "lucide-react"

const tickerItems = [
  "Pendaftaran Seleksi Penerimaan Taruna Baru T.A. 2026/2027 telah dibuka!",
  "Jadwal Ujian Akhir Semester Genap 2025/2026 telah tersedia.",
  "Pengumuman Hasil Seleksi Beasiswa Unggulan POLTEKIP.",
  "Peringatan Hari Pemasyarakatan ke-62 akan dilaksanakan 27 April 2026.",
]

export default function AnnouncementTicker() {
  return (
    <div className="overflow-hidden bg-gold text-navy-dark">
      <div className="mx-auto flex max-w-7xl items-center px-4 py-2">
        <div className="mr-3 flex shrink-0 items-center gap-1.5 text-xs font-bold uppercase tracking-wider">
          <Bell className="h-3.5 w-3.5" />
          Info
        </div>
        <div className="relative flex-1 overflow-hidden">
          <div className="animate-ticker flex whitespace-nowrap">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="mx-8 inline-block text-sm font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
