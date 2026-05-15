import { Outlet } from 'react-router-dom'

const AuthLayout = () => (
  <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4 py-10">
    <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-semibold">Welcome Back</h1>
        <p className="mt-3 text-slate-400">Sign in to access your dashboard and account settings.</p>
      </div>
      <Outlet />
    </div>
  </div>
)

export default AuthLayout
