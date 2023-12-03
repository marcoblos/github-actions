import { create } from 'zustand'

interface AuthState {
  isAuthenticated: boolean
  setIsAuthenticated: () => void
  setIsNotAuthenticated: () => void
}

const useAuthStore = create<AuthState>()((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: () => set(() => ({ isAuthenticated: true })),
  setIsNotAuthenticated: () => set(() => ({ isAuthenticated: false })),
}))

export default useAuthStore
