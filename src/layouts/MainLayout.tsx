import { NavLink, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const navLinks = [
  { label: 'Dashboard', path: '/' },
  { label: 'Profile', path: '/profile' },
  { label: 'Settings', path: '/settings' },
]

const MainLayout = () => {
  const { logout, user } = useAuth()

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[260px_1fr]">
        <aside className="border-r border-white/10 bg-slate-900/80 px-6 py-8 backdrop-blur-xl lg:px-8">
          <div className="mb-10 flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-slate-700/80" />
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Project</p>
              <p className="text-lg font-semibold">Web1 Auth</p>
            </div>
          </div>

          <nav className="space-y-2">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive ? 'bg-slate-800 text-white shadow-lg shadow-slate-950/20' : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-12 rounded-3xl bg-slate-800/70 p-5 text-slate-300">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Signed in as</p>
            <p className="mt-3 text-sm font-semibold text-white">{user?.username ?? 'Unknown'}</p>
            <p className="text-sm text-slate-400">{user?.email ?? 'No email available'}</p>
          </div>
        </aside>

        <main className="px-6 py-8 lg:px-10 lg:py-12">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-semibold">Hello, {user?.firstName ?? 'User'}!</h1>
              <p className="mt-2 text-sm text-slate-400">Manage your account, preferences, and security settings from one place.</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={logout}
                className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                Logout
              </button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-slate-950/30">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default MainLayout
