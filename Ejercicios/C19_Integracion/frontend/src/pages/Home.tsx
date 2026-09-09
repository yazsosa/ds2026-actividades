import { useState } from 'react'
import BookCard from '../components/BookCard'
import type { Libro } from '../types/libro'

const featuredBooks: Libro[] = [
  {
    id: 1,
    titulo: 'El Señor de los Anillos',
    autor: {
      id: 1,
      nombre: 'J.R.R. Tolkien',
      nacionalidad: 'Británica',
    },
    autorId: 1,
    imagen:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg',
    precio: 25000,
    disponible: true,
  },
  {
    id: 2,
    titulo: 'Harry Potter y la Piedra Filosofal',
    autor: {
      id: 2,
      nombre: 'J.K. Rowling',
      nacionalidad: 'Británica',
    },
    autorId: 2,
    imagen:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1474154022i/3.jpg',
    precio: 18000,
    disponible: true,
  },
  {
    id: 3,
    titulo: 'Cien Años de Soledad',
    autor: {
      id: 3,
      nombre: 'Gabriel García Márquez',
      nacionalidad: 'Colombiana',
    },
    autorId: 3,
    imagen:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327881361i/320.jpg',
    precio: 21000,
    disponible: true,
  },
  {
    id: 4,
    titulo: '1984',
    autor: {
      id: 4,
      nombre: 'George Orwell',
      nacionalidad: 'Británica',
    },
    autorId: 4,
    imagen:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1532714506i/40961427.jpg',
    precio: 15000,
    disponible: true,
  },
  {
    id: 5,
    titulo: 'El Principito',
    autor: {
      id: 5,
      nombre: 'Antoine de Saint-Exupéry',
      nacionalidad: 'Francesa',
    },
    autorId: 5,
    imagen:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1367545443i/157993.jpg',
    precio: 12000,
    disponible: true,
  },
]

export default function Home() {
  const [query, setQuery] = useState('')

  const filtered = featuredBooks.filter(
    (b) =>
      b.titulo.toLowerCase().includes(query.toLowerCase()) ||
      b.autor.nombre.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <main
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem',
      }}
    >
      <p
        style={{
          color: '#666',
          marginBottom: '2rem',
        }}
      >
        Descubre algunos de nuestros títulos más recomendados.
      </p>

      <input
        type="text"
        placeholder="Buscar libro o autor..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: '100%',
          maxWidth: '400px',
          padding: '0.8rem',
          marginBottom: '2rem',
          borderRadius: '8px',
          border: '1px solid #ccc',
        }}
      />

      <h2
        style={{
          marginBottom: '1.5rem',
        }}
      >
        ⭐ Libros destacados
      </h2>

      {filtered.length === 0 ? (
        <p>No se encontraron libros.</p>
      ) : (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            justifyContent: 'center',
          }}
        >
          {filtered.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      )}
    </main>
  )
}