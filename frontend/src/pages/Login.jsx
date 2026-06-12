export default function Login() {
  return (
    <main className="page-section">
      <div className="container grid place-items-center">
        <form className="glass-card w-full max-w-md rounded-[2rem] p-8">
          <span className="section-eyebrow">CMS Admin</span>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950">Login Admin</h1>
          <label className="mt-8 block text-sm font-bold text-slate-700" htmlFor="admin-email">Email</label>
          <input id="admin-email" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-500" type="email" placeholder="admin@kampus.ac.id" />
          <label className="mt-4 block text-sm font-bold text-slate-700" htmlFor="admin-password">Password</label>
          <input id="admin-password" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-500" type="password" placeholder="••••••••" />
          <button id="admin-login-button" className="btn-primary mt-6 w-full" type="button">Masuk Dashboard</button>
        </form>
      </div>
    </main>
  )
}
