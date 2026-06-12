import { Code2, GitBranch, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="container grid gap-10 py-12 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3 font-black">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-500">
              <Code2 size={23} />
            </span>
            <span>Teknik Informatika</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
            Website resmi Program Studi Teknik Informatika sebagai pusat informasi akademik, inovasi, dan layanan digital mahasiswa.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-blue-300">Kontak</h2>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <p className="flex items-center gap-2"><MapPin size={16} /> Kampus Program Studi Teknik Informatika</p>
            <p className="flex items-center gap-2"><Mail size={16} /> informatika@kampus.ac.id</p>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-blue-300">Kolaborasi</h2>
          <a href="https://github.com/msyfk/web-IT" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white" target="_blank" rel="noreferrer">
            <GitBranch size={17} /> Repository GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
