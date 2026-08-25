import { useState } from 'react'
import BookCard from '../components/BookCard'

const featuredBooks = [
  {
    id: 1,
    title: 'El Señor de los Anillos',
    author: 'J.R.R. Tolkien',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg',
    price: 25000,
  },
  {
    id: 2,
    title: 'Harry Potter y la Piedra Filosofal',
    author: 'J.K. Rowling',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1474154022i/3.jpg',
    price: 18000,
  },
  {
    id: 3,
    title: 'Cien Años de Soledad',
    author: 'Gabriel García Márquez',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327881361i/320.jpg',
    price: 21000,
  },
  {
    id: 4,
    title: '1984',
    author: 'George Orwell',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1532714506i/40961427.jpg',
    price: 15000,
  },
  {
    id: 5,
    title: 'El Principito',
    author: 'Antoine de Saint-Exupéry',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1367545443i/157993.jpg',
    price: 12000,
  },
]

export default function Home() {
  const [query, setQuery] = useState('')

  const filtered = featuredBooks.filter(
    (b) =>
      b.title.toLowerCase().includes(query.toLowerCase()) ||
      b.author.toLowerCase().includes(query.toLowerCase())
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