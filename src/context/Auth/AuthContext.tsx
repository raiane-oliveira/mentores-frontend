import { createContext, ReactNode, useEffect, useState } from 'react'
import { IAuthContextType, User } from '../interfaces/IAuth'
import { useRouter } from 'next/router'
export const AuthContent = createContext<IAuthContextType | undefined>(
  undefined,
)

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)

  const logout = () => {
    setUser(null)
    router.push('/login')
    localStorage.removeItem('user')
    sessionStorage.removeItem('user')
  }

  const updateUser = (updatedUser: User | null) => {
    if (updatedUser) {
      setUser(updatedUser)
      localStorage.setItem('user', JSON.stringify(updatedUser))
    }
  }

  useEffect(() => {
    const storedUser =
      localStorage.getItem('user') ?? sessionStorage.getItem('user')

    if (storedUser) {
      let userParsed
      try {
        userParsed = JSON.parse(storedUser)
      } catch {
        userParsed = undefined
      }
      setUser(userParsed)
    }
  }, [])

  return (
    <AuthContent.Provider value={{ user, setUser, logout, updateUser }}>
      {children}
    </AuthContent.Provider>
  )
}
