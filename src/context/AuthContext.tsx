import { createContext, useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { AuthContextType, AuthState, LoginPayload, User } from '../types/auth'
import * as authService from '../api/auth'

const initialState: AuthState = {
  user: null,
  token: null,
  loading: true,
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AuthState>(initialState)

  useEffect(() => {
    const token = localStorage.getItem('auth_token')
    const storedUser = localStorage.getItem('auth_user')

    if (token && storedUser) {
      try {
        const user = JSON.parse(storedUser) as User
        setState({ user, token, loading: false })
        return
      } catch {
        localStorage.removeItem('auth_user')
      }
    }

    setState({ user: null, token: null, loading: false })
  }, [])

  const login = useCallback(async (payload: LoginPayload) => {
    setState((previous) => ({ ...previous, loading: true }))

    try {
      const { token, user } = await authService.login(payload)
      localStorage.setItem('auth_token', token)
      localStorage.setItem('auth_user', JSON.stringify(user))
      setState({ user, token, loading: false })
    } catch (error) {
      setState({ user: null, token: null, loading: false })
      throw error
    }
  }, [])

  const logout = useCallback(() => {
    authService.logout()
    setState({ user: null, token: null, loading: false })
    if (window.location.pathname !== '/login') {
      window.location.href = '/login'
    }
  }, [])

  const value = useMemo<AuthContextType>(
    () => ({
      user: state.user,
      token: state.token,
      loading: state.loading,
      isAuthenticated: Boolean(state.token && state.user),
      login,
      logout,
    }),
    [login, logout, state],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContext
