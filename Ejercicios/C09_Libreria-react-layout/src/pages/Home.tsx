import { useState } from 'react'
import BookCard from '../components/BookCard'

const allBooks = [
  { id: 1, title: 'El Señor de los Anillos', author: 'J.R.R. Tolkien', cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg', price: 25000 },
  { id: 2, title: 'Harry Potter y la Piedra Filosofal', author: 'J.K. Rowling', cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1474154022i/3.jpg', price: 18000 },
  { id: 3, title: 'Cien Años de Soledad', author: 'Gabriel García Márquez', cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327881361i/320.jpg', price: 21000 },
  { id: 4, title: '1984', author: 'George Orwell', cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1532714506i/40961427.jpg', price: 15000 },
  { id: 5, title: 'El Principito', author: 'Antoine de Saint-Exupéry', cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1367545443i/157993.jpg', price: 12000 },
  { id: 6, title: 'Fahrenheit 451', author: 'Ray Bradbury', cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1383718290i/13079982.jpg', price: 19000 },
  { id: 7, title: 'Crimen y Castigo', author: 'Fiódor Dostoyevski', cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1382846449i/7144.jpg', price: 28000 },
  { id: 8, title: 'El Alquimista', author: 'Paulo Coelho', cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg', price: 16000 },
]

export default function Home() {
  const [query, setQuery] = useState('')

  const filtered = allBooks.filter(
    (b) =>
      b.title.toLowerCase().includes(query.toLowerCase()) ||
      b.author.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <main
      style={{
        maxWidth: '1100px',
        margin: '3rem auto',
        padding: '0 1.5rem',
      }}
    >
      <input
        type="text"
        placeholder="Buscar libro..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: '100%',
          padding: '0.8rem',
          marginBottom: '2rem',
        }}
      />

      <h2>
        {query ? `Resultados para "${query}"` : 'Libros destacados'}
      </h2>

      {filtered.length === 0 ? (
        <p>No se encontraron libros.</p>
      ) : (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
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