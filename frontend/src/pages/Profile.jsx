export default function Profile() {
  return (
    <main className="page-section">
      <div className="container">
        <span className="section-eyebrow">Profil Program Studi</span>
        <h1 className="page-title gradient-text">Visi, Misi, dan Tujuan</h1>
        <p className="page-description">Menjadi program studi yang unggul dalam pendidikan informatika, riset terapan, dan inovasi digital yang berdampak bagi masyarakat dan industri.</p>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {['Visi', 'Misi', 'Tujuan'].map((item) => (
            <section key={item} className="glass-card card-hover rounded-3xl p-7">
              <h2 className="text-2xl font-black text-slate-950">{item}</h2>
              <p className="mt-4 leading-7 text-slate-600">Konten {item.toLowerCase()} dapat dikelola dan diperluas sesuai dokumen resmi program studi.</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
