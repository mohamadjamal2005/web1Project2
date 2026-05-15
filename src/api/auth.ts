import api from './axios'
import type { LoginPayload, User } from '../types/auth'

interface LoginResponse extends User {
  token: string
}

export const login = async (payload: LoginPayload): Promise<{ token: string; user: User }> => {
  const response = await api.post<LoginResponse>('/auth/login', payload)
  const { token, ...user } = response.data
  return { token, user }
}

export const logout = (): void => {
  localStorage.removeItem('auth_token')
  localStorage.removeItem('auth_user')
}

export const getCurrentUser = (): User | null => {
  const storedUser = localStorage.getItem('auth_user')

  if (!storedUser) {
    return null
  }

  try {
    return JSON.parse(storedUser) as User
  } catch {
    return null
  }
}
