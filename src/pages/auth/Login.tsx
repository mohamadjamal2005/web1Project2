import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Login = () => {
  const { login, isAuthenticated, loading } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true })
    }
  }, [isAuthenticated, navigate])

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault()
    setError('')

    if (!username.trim() || !password.trim()) {
      setError('Please enter both username and password.')
      return
    }

    try {
      await login({ username: username.trim(), password: password.trim() })
      navigate('/', { replace: true })
    } catch {
      setError('Invalid credentials. Use emilys / emilyspass to sign in.')
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-sky-400">Sign in</p>
        <h2 className="mt-4 text-3xl font-semibold text-white">Access your account</h2>
        <p className="mt-2 text-slate-400">Enter your credentials and continue to the secure dashboard.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="username" className="text-sm font-medium text-slate-300">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="w-full rounded-3xl border border-slate-700 bg-slate-950 px-5 py-4 text-sm text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
            placeholder="emilys"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium text-slate-300">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-3xl border border-slate-700 bg-slate-950 px-5 py-4 text-sm text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
            placeholder="********"
          />
        </div>

        {error && <p className="rounded-2xl bg-rose-500/10 px-4 py-3 text-sm text-rose-300">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center rounded-3xl bg-sky-500 px-5 py-4 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? 'Signing in...' : 'Sign in'}
        </button>
      </form>

      <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-5 text-sm text-slate-400">
        <p className="font-medium text-slate-200">Test credentials</p>
        <p className="mt-2">Username: <span className="font-semibold text-slate-100">emilys</span></p>
        <p>Password: <span className="font-semibold text-slate-100">emilyspass</span></p>
      </div>
    </div>
  )
}

export default Login
