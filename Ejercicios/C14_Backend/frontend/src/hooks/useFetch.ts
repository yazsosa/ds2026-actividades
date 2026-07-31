import { useEffect, useState } from 'react'

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        setLoading(true)
        setError(null)

        const respuesta = await fetch(url)

        if (!respuesta.ok) {
          throw new Error('Error al cargar los datos')
        }

        const contentType = respuesta.headers.get('content-type')

        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('La respuesta no es un JSON válido')
        }

        const datos = await respuesta.json()
        setData(datos)
      } catch (e) {
        setData(null)
        setError(e instanceof Error ? e.message : 'Error desconocido')
      } finally {
        setLoading(false)
      }
    }

    cargarDatos()
  }, [url])

  return { data, loading, error }
}