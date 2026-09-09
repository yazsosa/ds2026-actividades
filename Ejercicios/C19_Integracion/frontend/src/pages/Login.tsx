import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiFetch, guardarToken } from '../services/api'
import {
  loginSchema,
  type LoginData,
} from '../schemas/loginSchema'

type Sesion = {
  token: string
  usuario: {
    id: number
    email: string
    nombre: string
    rol: 'ADMIN' | 'CLIENTE'
  }
}

export default function Login() {
  const navigate = useNavigate()

  const [datos, setDatos] = useState<LoginData>({
    email: '',
    password: '',
  })

  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    setError(null)

    const resultado = loginSchema.safeParse(datos)

    if (!resultado.success) {
      setError(
        resultado.error.issues[0]?.message ?? 'Datos inválidos'
      )
      return
    }

    try {
      setLoading(true)

      const sesion = await apiFetch<Sesion>('/auth/login', {
        method: 'POST',
        body: JSON.stringify(resultado.data),
      })

      guardarToken(sesion.token)

      navigate('/catalogo')
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : 'Error al iniciar sesión'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <main
      style={{
        maxWidth: '850px',
        margin: '0 auto',
        padding: '2rem',
      }}
    >
      <section
        style={{
          backgroundColor: '#ffffff',
          padding: '3rem',
          borderRadius: '20px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}
      >
        <h1
          style={{
            marginBottom: '2.5rem',
            textAlign: 'center',
            fontSize: '2.5rem',
          }}
        >
          🔐 Iniciar sesión
        </h1>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '2rem' }}>
            <label
              htmlFor="email"
              style={{
                display: 'block',
                marginBottom: '0.7rem',
                fontWeight: 'bold',
                fontSize: '1.1rem',
              }}
            >
              Correo electrónico
            </label>

            <input
              id="email"
              type="email"
              value={datos.email}
              onChange={(e) =>
                setDatos({
                  ...datos,
                  email: e.target.value,
                })
              }
              placeholder="cliente@libreria.test"
              style={{
                width: '100%',
                padding: '18px 28px',
                borderRadius: '999px',
                border: '1px solid #ccc',
                fontSize: '1rem',
                outline: 'none',
              }}
            />
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label
              htmlFor="password"
              style={{
                display: 'block',
                marginBottom: '0.7rem',
                fontWeight: 'bold',
                fontSize: '1.1rem',
              }}
            >
              Contraseña
            </label>

            <input
              id="password"
              type="password"
              value={datos.password}
              onChange={(e) =>
                setDatos({
                  ...datos,
                  password: e.target.value,
                })
              }
              placeholder="Ingrese su contraseña"
              style={{
                width: '100%',
                padding: '18px 28px',
                borderRadius: '999px',
                border: '1px solid #ccc',
                fontSize: '1rem',
                outline: 'none',
              }}
            />
          </div>

          {error && (
            <p
              style={{
                color: '#b91c1c',
                backgroundColor: '#fee2e2',
                padding: '1rem',
                borderRadius: '12px',
                marginBottom: '1.5rem',
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '16px',
              borderRadius: '999px',
              border: 'none',
              backgroundColor: '#1e293b',
              color: 'white',
              fontSize: '1.05rem',
              fontWeight: 'bold',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? 'Ingresando...' : 'Ingresar'}
          </button>
        </form>
      </section>
    </main>
  )
}