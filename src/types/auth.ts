export interface User {
  id: number
  firstName: string
  lastName: string
  username: string
  email: string
  image?: string
  phone?: string
  gender?: string
  birthDate?: string
}

export interface LoginPayload {
  username: string
  password: string
}

export interface AuthState {
  user: User | null
  token: string | null
  loading: boolean
}

export interface AuthContextType extends AuthState {
  isAuthenticated: boolean
  login: (payload: LoginPayload) => Promise<void>
  logout: () => void
}
