import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { apiFetch, ApiError } from '../services/api'

type Usuario = {
  id: number
  email?: string
  nombre?: string
  rol: string
}

type AuthContextType = {
  usuario: Usuario | null
  cargando: boolean
  estaAutenticado: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  tieneRol: (rol: string) => boolean
}

const AuthContext = createContext<AuthContextType | undefined>(
  undefined
)

export function AuthProvider({
  children,
}: {
  children: ReactNode
}) {
  const [usuario, setUsuario] = useState<Usuario | null>(null)
  const [cargando, setCargando] = useState(true)

  const logout = () => {
    localStorage.removeItem('token')
    setUsuario(null)
  }

  useEffect(() => {
    const recuperarSesion = async () => {
      const token = localStorage.getItem('token')

      if (!token) {
        setCargando(false)
        return
      }

      try {
        const respuesta = await apiFetch<{
          usuario: Usuario
        }>('/auth/yo')

        setUsuario(respuesta.usuario)
      } catch (error) {
        if (error instanceof ApiError && error.status === 401) {
          logout()
        }
      } finally {
        setCargando(false)
      }
    }

    recuperarSesion()
  }, [])

  const login = async (email: string, password: string) => {
    const respuesta = await apiFetch<{
      token: string
      usuario: Usuario
    }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    })

    localStorage.setItem('token', respuesta.token)
    setUsuario(respuesta.usuario)
  }

  const tieneRol = (rol: string) => {
    return usuario?.rol === rol
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        cargando,
        estaAutenticado: usuario !== null,
        login,
        logout,
        tieneRol,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error(
      'useAuth debe usarse dentro de AuthProvider'
    )
  }

  return context
}