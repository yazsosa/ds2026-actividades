import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import type { Libro } from '../types/libro'

export default function LibroDetalle() {
  const { id } = useParams()

  const {
    data: libro,
    loading,
    error,
  } = useFetch<Libro>(`/libros/${id}`)

  if (loading) {
    return <p>Cargando libro...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

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
      <h1>{libro.titulo}</h1>

      <img
        src={libro.imagen}
        alt={libro.titulo}
        style={{
          width: '250px',
          marginBottom: '1rem',
        }}
      />

      <p>
        <strong>Autor:</strong> {libro.autor.nombre}
      </p>

      <p>
        <strong>Nacionalidad:</strong> {libro.autor.nacionalidad}
      </p>

      <p>
        <strong>Precio:</strong> $
        {libro.precio.toLocaleString('es-AR')}
      </p>

      <p>
        <strong>Estado:</strong>{' '}
        {libro.disponible ? 'Disponible' : 'No disponible'}
      </p>

      {libro.categorias && libro.categorias.length > 0 && (
        <div>
          <strong>Categorías:</strong>
          <ul>
            {libro.categorias.map((categoria) => (
              <li key={categoria.id}>{categoria.nombre}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  )
}