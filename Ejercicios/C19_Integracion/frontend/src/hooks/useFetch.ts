import { useEffect, useState } from 'react'
import { apiFetch } from '../services/api'

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        setLoading(true)
        setError(null)

        const datos = await apiFetch<T>(url)

        setData(datos)
      } catch (e) {
        setData(null)
        setError(
          e instanceof Error ? e.message : 'Error desconocido'
        )
      } finally {
        setLoading(false)
      }
    }

    cargarDatos()
  }, [url])

  return {
    data,
    loading,
    error,
  }
}