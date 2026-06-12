import { ArrowRight, BookOpen, Building2, FlaskConical, GraduationCap, Newspaper, Sparkles, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const stats = [
  { label: 'Mahasiswa Aktif', value: '1.240+', icon: GraduationCap },
  { label: 'Dosen & Praktisi', value: '36', icon: Users },
  { label: 'Laboratorium', value: '8', icon: FlaskConical },
  { label: 'Mitra Industri', value: '24+', icon: Building2 },
]

const news = [
  'Workshop AI dan Data Science untuk Mahasiswa Informatika',
  'Pengumuman Jadwal Seminar Proposal Semester Ini',
  'Tim Mahasiswa Raih Juara Hackathon Teknologi Kampus',
]

export default function Home() {
  return (
    <main>
      <section className="container grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="section-eyebrow"><Sparkles size={16} /> Website Resmi Program Studi</span>
          <h1 className="page-title gradient-text">Membangun Talenta Digital Masa Depan</h1>
          <p className="page-description">
            Portal terpadu Teknik Informatika untuk informasi akademik, profil dosen, riset laboratorium, inovasi mahasiswa, dan layanan administrasi digital.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/profil" className="btn-primary" id="hero-profile-cta">Jelajahi Profil <ArrowRight size={18} /></Link>
            <Link to="/inovasi" className="btn-secondary" id="hero-innovation-cta">Lihat Inovasi</Link>
          </div>
        </div>

        <div className="glass-card relative overflow-hidden rounded-[2.5rem] p-6">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="relative rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl">
            <div className="mb-10 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">IT Dashboard</p>
                <h2 className="mt-2 text-2xl font-black">Academic Intelligence</h2>
              </div>
              <BookOpen className="text-blue-300" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/8 p-5">
                  <item.icon className="mb-4 text-blue-300" />
                  <strong className="block text-3xl font-black">{item.value}</strong>
                  <span className="text-sm text-slate-300">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section bg-white/60">
        <div className="container">
          <span className="section-eyebrow"><Newspaper size={16} /> Info Terbaru</span>
          <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-[-0.04em] text-slate-950">Berita dan pengumuman penting prodi</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {news.map((title, index) => (
              <article key={title} className="glass-card card-hover rounded-3xl p-6">
                <span className="text-sm font-black text-blue-600">0{index + 1}</span>
                <h3 className="mt-4 text-xl font-black text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">Ringkasan konten akan terhubung ke CMS setelah modul berita dikembangkan.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
