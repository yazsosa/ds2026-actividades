import BookCard from '../components/BookCard'

const allBooks = [
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
  {
    id: 6,
    title: 'Orgullo y Prejuicio',
    author: 'Jane Austen',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg',
    price: 17000,
  },
  {
    id: 7,
    title: 'Crimen y Castigo',
    author: 'Fiódor Dostoyevski',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1382846449i/7144.jpg',
    price: 28000,
  },
  {
    id: 8,
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1383718290i/13079982.jpg',
    price: 19000,
  },
  {
  id: 9,
  title: 'Drácula',
  author: 'Bram Stoker',
  cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387151694i/17245.jpg',
  price: 14500,
  },
  {
    id: 10,
    title: 'El Alquimista',
    author: 'Paulo Coelho',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg',
    price: 16000,
  },
  {
  id: 11,
  title: 'Mujercitas',
  author: 'Louisa May Alcott',
  cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1562690475i/1934.jpg',
  price: 14500,
},
{
  id: 12,
  title: 'Los Juegos del Hambre',
  author: 'Suzanne Collins',
  cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1447303603i/2767052.jpg',
  price: 22000,
},
{
  id: 13,
  title: 'Percy Jackson y el ladrón del rayo',
  author: 'Rick Riordan',
  cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1400602609i/28187.jpg',
  price: 20000,
},
{
  id: 14,
  title: 'El Retrato de Dorian Gray',
  author: 'Oscar Wilde',
  cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546103428i/5297.jpg',
  price: 21000,
},
{
  id: 15,
  title: 'Las Crónicas de Narnia',
  author: 'C.S. Lewis',
  cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1449868701i/11127.jpg',
  price: 26000,
}
]

export default function Catalogo() {
  return (
    <main
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem',
      }}
    >
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
        {allBooks.length} libros disponibles
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          justifyContent: 'center',
        }}
      >
        {allBooks.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </main>
  )
}