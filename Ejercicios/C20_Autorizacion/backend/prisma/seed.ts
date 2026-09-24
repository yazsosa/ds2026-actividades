import bcrypt from "bcrypt";
import { prisma } from "../src/config/prisma";

const autores = [
  { nombre: "J.R.R. Tolkien", nacionalidad: "Británica" },
  { nombre: "J.K. Rowling", nacionalidad: "Británica" },
  { nombre: "Gabriel García Márquez", nacionalidad: "Colombiana" },
  { nombre: "George Orwell", nacionalidad: "Británica" },
  { nombre: "Antoine de Saint-Exupéry", nacionalidad: "Francesa" },
  { nombre: "Jane Austen", nacionalidad: "Británica" },
  { nombre: "Fiódor Dostoyevski", nacionalidad: "Rusa" },
  { nombre: "Ray Bradbury", nacionalidad: "Estadounidense" },
  { nombre: "Bram Stoker", nacionalidad: "Irlandesa" },
  { nombre: "Paulo Coelho", nacionalidad: "Brasileña" },
  { nombre: "Louisa May Alcott", nacionalidad: "Estadounidense" },
  { nombre: "Suzanne Collins", nacionalidad: "Estadounidense" },
  { nombre: "Rick Riordan", nacionalidad: "Estadounidense" },
  { nombre: "Oscar Wilde", nacionalidad: "Irlandesa" },
  { nombre: "C.S. Lewis", nacionalidad: "Británica" },
];

const categorias = [
  { nombre: "Fantasía" },
  { nombre: "Ciencia ficción" },
  { nombre: "Clásico" },
  { nombre: "Romance" },
  { nombre: "Terror" },
  { nombre: "Aventura" },
  { nombre: "Distopía" },
  { nombre: "Drama" },
];

const libros = [
  {
    titulo: "El Señor de los Anillos",
    autor: "J.R.R. Tolkien",
    imagen:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
    precio: 25000,
    disponible: true,
    cats: ["Fantasía", "Aventura"],
  },
  {
    titulo: "Harry Potter y la Piedra Filosofal",
    autor: "J.K. Rowling",
    imagen:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1474154022i/3.jpg",
    precio: 18000,
    disponible: true,
    cats: ["Fantasía", "Aventura"],
  },
  {
    titulo: "Cien Años de Soledad",
    autor: "Gabriel García Márquez",
    imagen:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327881361i/320.jpg",
    precio: 21000,
    disponible: true,
    cats: ["Clásico", "Drama"],
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    imagen:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1532714506i/40961427.jpg",
    precio: 15000,
    disponible: true,
    cats: ["Distopía", "Ciencia ficción"],
  },
  {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    imagen:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1367545443i/157993.jpg",
    precio: 12000,
    disponible: true,
    cats: ["Clásico", "Fantasía"],
  },
  {
    titulo: "Orgullo y Prejuicio",
    autor: "Jane Austen",
    imagen:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg",
    precio: 17000,
    disponible: true,
    cats: ["Clásico", "Romance"],
  },
  {
    titulo: "Crimen y Castigo",
    autor: "Fiódor Dostoyevski",
    imagen:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1382846449i/7144.jpg",
    precio: 28000,
    disponible: true,
    cats: ["Clásico", "Drama"],
  },
  {
    titulo: "Fahrenheit 451",
    autor: "Ray Bradbury",
    imagen:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1383718290i/13079982.jpg",
    precio: 19000,
    disponible: true,
    cats: ["Distopía", "Ciencia ficción"],
  },
  {
    titulo: "Drácula",
    autor: "Bram Stoker",
    imagen:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387151694i/17245.jpg",
    precio: 14500,
    disponible: true,
    cats: ["Terror", "Clásico"],
  },
  {
    titulo: "El Alquimista",
    autor: "Paulo Coelho",
    imagen:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg",
    precio: 16000,
    disponible: true,
    cats: ["Drama", "Aventura"],
  },
  {
    titulo: "Mujercitas",
    autor: "Louisa May Alcott",
    imagen:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1562690475i/1934.jpg",
    precio: 14500,
    disponible: true,
    cats: ["Clásico", "Drama"],
  },
  {
    titulo: "Los Juegos del Hambre",
    autor: "Suzanne Collins",
    imagen:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1447303603i/2767052.jpg",
    precio: 22000,
    disponible: true,
    cats: ["Distopía", "Aventura"],
  },
  {
    titulo: "Percy Jackson y el ladrón del rayo",
    autor: "Rick Riordan",
    imagen:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1400602609i/28187.jpg",
    precio: 20000,
    disponible: true,
    cats: ["Fantasía", "Aventura"],
  },
  {
    titulo: "El Retrato de Dorian Gray",
    autor: "Oscar Wilde",
    imagen:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546103428i/5297.jpg",
    precio: 21000,
    disponible: true,
    cats: ["Clásico", "Terror"],
  },
  {
    titulo: "Las Crónicas de Narnia",
    autor: "C.S. Lewis",
    imagen:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1449868701i/11127.jpg",
    precio: 26000,
    disponible: true,
    cats: ["Fantasía", "Aventura"],
  },
];

const usuarios = [
  {
    email: "admin@libreria.test",
    nombre: "Admin",
    rol: "ADMIN" as const,
    password: "Admin1234",
  },
  {
    email: "cliente@libreria.test",
    nombre: "Cliente",
    rol: "CLIENTE" as const,
    password: "Cliente1234",
  },
];

async function main() {
  // Autores
  for (const autor of autores) {
    await prisma.autor.upsert({
      where: {
        nombre: autor.nombre,
      },
      update: {},
      create: autor,
    });
  }

  // Categorías
  for (const categoria of categorias) {
    await prisma.categoria.upsert({
      where: {
        nombre: categoria.nombre,
      },
      update: {},
      create: categoria,
    });
  }

  // Libros
  for (const { autor, cats, ...datos } of libros) {
    const libroExistente = await prisma.libro.findFirst({
      where: {
        titulo: datos.titulo,
      },
    });

    if (!libroExistente) {
      await prisma.libro.create({
        data: {
          ...datos,
          autor: {
            connect: {
              nombre: autor,
            },
          },
          categorias: {
            connect: cats.map((nombre) => ({
              nombre,
            })),
          },
        },
      });
    }
  }

  // Usuarios
  for (const { password, ...datos } of usuarios) {
    await prisma.usuario.upsert({
      where: {
        email: datos.email,
      },
      update: {},
      create: {
        ...datos,
        passwordHash: await bcrypt.hash(password, 10),
      },
    });
  }

  console.log("Seed C18 completado correctamente");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });