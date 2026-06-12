import { Search } from 'lucide-react'

const lecturers = ['Dr. Andi Pratama, M.Kom', 'Siti Rahmawati, M.Cs', 'Budi Santoso, S.T., M.T.', 'Nadia Fitri, M.Kom']

export default function Lecturers() {
  return (
    <main className="page-section">
      <div className="container">
        <span className="section-eyebrow">Direktori Dosen</span>
        <h1 className="page-title gradient-text">Dosen dan Bidang Keahlian</h1>
        <div className="glass-card mt-8 flex items-center gap-3 rounded-3xl p-4">
          <Search className="text-blue-600" />
          <input id="lecturer-search-input" className="w-full bg-transparent outline-none" placeholder="Cari nama dosen..." />
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {lecturers.map((name) => (
            <article key={name} className="glass-card card-hover rounded-3xl p-6">
              <div className="h-20 w-20 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-400" />
              <h2 className="mt-5 text-lg font-black text-slate-950">{name}</h2>
              <p className="mt-2 text-sm text-slate-600">Software Engineering & Intelligent Systems</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
