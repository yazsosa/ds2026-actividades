import type { Libro } from "../types/libro";

const libros: Libro[] = [
  {
    id: 1,
    title: "El Señor de los Anillos",
    author: "J.R.R. Tolkien",
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
    price: 25000,
  },
  {
    id: 2,
    title: "Harry Potter y la Piedra Filosofal",
    author: "J.K. Rowling",
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1474154022i/3.jpg",
    price: 18000,
  },
  {
    id: 3,
    title: "Cien Años de Soledad",
    author: "Gabriel García Márquez",
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327881361i/320.jpg",
    price: 21000,
  },
  {
    id: 4,
    title: "1984",
    author: "George Orwell",
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1532714506i/40961427.jpg",
    price: 15000,
  },
  {
    id: 5,
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1367545443i/157993.jpg",
    price: 12000,
  },
];

export function obtenerLibros(): Libro[] {
  return libros;
}