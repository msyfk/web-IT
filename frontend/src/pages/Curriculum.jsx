const semesters = [1, 2, 3, 4, 5, 6, 7, 8]

export default function Curriculum() {
  return (
    <main className="page-section">
      <div className="container">
        <span className="section-eyebrow">Akademik</span>
        <h1 className="page-title gradient-text">Kurikulum Interaktif</h1>
        <p className="page-description">Struktur mata kuliah per semester akan ditampilkan secara interaktif dan dapat disesuaikan dengan kurikulum resmi terbaru.</p>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {semesters.map((semester) => (
            <section key={semester} className="glass-card card-hover rounded-3xl p-6">
              <h2 className="text-xl font-black text-slate-950">Semester {semester}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">Daftar mata kuliah, SKS, dan prasyarat akan dimuat dari data akademik.</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
