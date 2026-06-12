import { ExternalLink, GitBranch } from 'lucide-react'

const innovations = ['Smart Campus Attendance', 'AI Chatbot Akademik', 'IoT Monitoring Lab']

export default function Innovation() {
  return (
    <main className="page-section">
      <div className="container">
        <span className="section-eyebrow">Riset & Inovasi</span>
        <h1 className="page-title gradient-text">Showcase Produk Digital</h1>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {innovations.map((item) => (
            <article key={item} className="glass-card card-hover rounded-3xl p-6">
              <div className="mb-6 h-40 rounded-[1.5rem] bg-gradient-to-br from-slate-950 via-blue-900 to-cyan-500" />
              <h2 className="text-xl font-black text-slate-950">{item}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">Produk inovasi mahasiswa dan dosen dengan dokumentasi, demo, dan tautan repository.</p>
              <div className="mt-5 flex gap-3 text-sm font-bold text-blue-700">
                <span className="inline-flex items-center gap-1"><GitBranch size={16} /> GitHub</span>
                <span className="inline-flex items-center gap-1"><ExternalLink size={16} /> Demo</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
