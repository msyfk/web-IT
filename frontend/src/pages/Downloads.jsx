import { Download, FileText } from 'lucide-react'

const docs = ['Panduan Akademik', 'Form Pengajuan Skripsi', 'Template Laporan Praktikum']

export default function Downloads() {
  return (
    <main className="page-section">
      <div className="container">
        <span className="section-eyebrow">Pusat Unduhan</span>
        <h1 className="page-title gradient-text">Dokumen Akademik</h1>
        <div className="mt-10 grid gap-4">
          {docs.map((doc) => (
            <article key={doc} className="glass-card flex flex-col gap-4 rounded-3xl p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-100 text-blue-700"><FileText /></span>
                <div>
                  <h2 className="font-black text-slate-950">{doc}</h2>
                  <p className="text-sm text-slate-600">PDF • tersedia setelah modul dokumen aktif</p>
                </div>
              </div>
              <button className="btn-secondary" id={`download-${doc.toLowerCase().replaceAll(' ', '-')}`}><Download size={17} /> Unduh</button>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
