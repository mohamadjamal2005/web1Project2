import useAuth from '../../hooks/useAuth'

const Dashboard = () => {
  const { user } = useAuth()

  return (
    <section className="space-y-8">
      <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-lg shadow-slate-950/20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-400">Welcome back</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">{user?.firstName ?? 'User'}, good to see you</h2>
            </div>
            {user?.image ? (
              <img src={user.image} alt={user.username} className="h-24 w-24 rounded-3xl object-cover" />
            ) : (
              <div className="h-24 w-24 rounded-3xl bg-slate-800" />
            )}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-900/80 p-5">
              <p className="text-sm text-slate-400">Username</p>
              <p className="mt-2 text-lg font-semibold text-white">{user?.username ?? '—'}</p>
            </div>
            <div className="rounded-3xl bg-slate-900/80 p-5">
              <p className="text-sm text-slate-400">Email</p>
              <p className="mt-2 text-lg font-semibold text-white">{user?.email ?? '—'}</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-lg shadow-slate-950/20">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Activity</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">Account status</h3>
          <p className="mt-3 text-slate-400">
            Your account is secured and ready for use. Explore profile settings, update your preferences, and keep your session safe.
          </p>
          <div className="mt-8 space-y-4">
            <div className="rounded-3xl bg-slate-900/80 p-5">
              <p className="text-sm text-slate-400">Member since</p>
              <p className="mt-2 text-lg font-semibold text-white">2024</p>
            </div>
            <div className="rounded-3xl bg-slate-900/80 p-5">
              <p className="text-sm text-slate-400">Support</p>
              <p className="mt-2 text-lg font-semibold text-white">Available 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
