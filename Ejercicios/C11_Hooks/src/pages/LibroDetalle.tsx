import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import type { Libro } from '../types/libro'

export default function LibroDetalle() {
  const { id } = useParams()

  const {
    data: libros,
    loading,
    error,
  } = useFetch<Libro[]>('/libros.json')

  if (loading) {
    return <p>Cargando libro...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  const libro = libros?.find(
    (libro) => libro.id === Number(id)
  )

  if (!libro) {
    return <p>Libro no encontrado</p>
  }

  return (
    <main
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem',
      }}
    >
      <h1>{libro.title}</h1>

      <img
        src={libro.cover}
        alt={libro.title}
        style={{
          width: '250px',
          marginBottom: '1rem',
        }}
      />

      <p>
        <strong>Autor:</strong> {libro.author}
      </p>

      <p>
        <strong>Precio:</strong> $
        {libro.price.toLocaleString('es-AR')}
      </p>
    </main>
  )
}