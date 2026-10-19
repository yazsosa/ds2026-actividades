import { useEffect } from 'react'
import { Alert, Spinner } from 'react-bootstrap'
import BookCard from '../components/BookCard'
import { useFetch } from '../hooks/useFetch'
import { useAuth } from '../context/AuthContext'
import type { Libro } from '../types/libro'

export default function Catalogo() {
  const { usuario } = useAuth()

  const {
    data: libros,
    loading,
    error,
  } = useFetch<Libro[]>('/libros')

  useEffect(() => {
    document.title = `Catálogo - ${(libros ?? []).length} libros`
  }, [libros])

  if (loading) {
    return (
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <Spinner animation="border" />
        <p style={{ marginTop: '1rem' }}>Cargando libros...</p>
      </main>
    )
  }

  if (error) {
    return (
      <main style={{ padding: '2rem' }}>
        <Alert variant="danger">{error}</Alert>
      </main>
    )
  }

  return (
    <main
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem',
      }}
    >
      {usuario && (
        <p
          style={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
            marginBottom: '0.5rem',
          }}
        >
          Hola, {usuario.rol === 'ADMIN' ? 'Administrador' : 'Cliente'} 👋
        </p>
      )}

      <h1>📚 Catálogo Completo</h1>

      <p style={{ color: '#666' }}>
        Explora toda nuestra colección de libros.
      </p>

      <p
        style={{
          fontWeight: 'bold',
          marginBottom: '2rem',
        }}
      >
        {(libros ?? []).length} libros disponibles
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          justifyContent: 'center',
        }}
      >
        {(libros ?? []).map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </main>
  )
}