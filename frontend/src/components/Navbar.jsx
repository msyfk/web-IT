import { Link, NavLink } from 'react-router-dom'
import { Code2, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { label: 'Beranda', path: '/' },
  { label: 'Profil', path: '/profil' },
  { label: 'Dosen', path: '/dosen' },
  { label: 'Kurikulum', path: '/kurikulum' },
  { label: 'Inovasi', path: '/inovasi' },
  { label: 'Unduhan', path: '/unduhan' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/78 backdrop-blur-xl">
      <nav className="container flex h-20 items-center justify-between" aria-label="Navigasi utama">
        <Link to="/" className="flex items-center gap-3 font-black text-slate-950" id="brand-home-link">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/25">
            <Code2 size={24} />
          </span>
          <span className="leading-tight">
            Teknik Informatika
            <small className="block text-xs font-bold uppercase tracking-[0.22em] text-blue-600">Modern Campus</small>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-bold transition ${
                  isActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <Link to="/admin/login" className="btn-primary hidden lg:inline-flex" id="admin-login-link">
          Portal Admin
        </Link>

        <button
          id="mobile-menu-button"
          className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 bg-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Buka menu navigasi"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="container pb-5 lg:hidden">
          <div className="glass-card grid gap-2 rounded-3xl p-3">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 font-bold text-slate-700 hover:bg-blue-50">
                {item.label}
              </NavLink>
            ))}
            <Link to="/admin/login" onClick={() => setOpen(false)} className="btn-primary mt-2" id="mobile-admin-login-link">
              Portal Admin
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
