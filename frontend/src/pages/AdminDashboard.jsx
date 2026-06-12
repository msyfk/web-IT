import { FileText, Lightbulb, Newspaper, Users } from 'lucide-react'

const cards = [
  { label: 'Berita', value: 12, icon: Newspaper },
  { label: 'Dokumen', value: 18, icon: FileText },
  { label: 'Dosen', value: 36, icon: Users },
  { label: 'Inovasi', value: 9, icon: Lightbulb },
]

export default function AdminDashboard() {
  return (
    <main className="page-section">
      <div className="container">
        <span className="section-eyebrow">Admin CMS</span>
        <h1 className="page-title gradient-text">Dashboard Konten</h1>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <section key={card.label} className="glass-card rounded-3xl p-6">
              <card.icon className="text-blue-600" />
              <strong className="mt-5 block text-4xl font-black text-slate-950">{card.value}</strong>
              <p className="text-slate-600">Total {card.label}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
