import useAuth from '../../hooks/useAuth'

const Profile = () => {
  const { user } = useAuth()

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-lg shadow-slate-950/20">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-sky-400">Profile overview</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Your account information</h2>
          </div>
          {user?.image ? (
            <img src={user.image} alt={user.username} className="h-24 w-24 rounded-3xl object-cover" />
          ) : (
            <div className="h-24 w-24 rounded-3xl bg-slate-800" />
          )}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-slate-900/80 p-6">
            <p className="text-sm text-slate-400">Full name</p>
            <p className="mt-3 text-xl font-semibold text-white">{user ? `${user.firstName} ${user.lastName}` : '—'}</p>
          </div>
          <div className="rounded-3xl bg-slate-900/80 p-6">
            <p className="text-sm text-slate-400">Username</p>
            <p className="mt-3 text-xl font-semibold text-white">{user?.username ?? '—'}</p>
          </div>
          <div className="rounded-3xl bg-slate-900/80 p-6">
            <p className="text-sm text-slate-400">Email</p>
            <p className="mt-3 text-xl font-semibold text-white">{user?.email ?? '—'}</p>
          </div>
          <div className="rounded-3xl bg-slate-900/80 p-6">
            <p className="text-sm text-slate-400">Phone</p>
            <p className="mt-3 text-xl font-semibold text-white">{user?.phone ?? 'Not provided'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
