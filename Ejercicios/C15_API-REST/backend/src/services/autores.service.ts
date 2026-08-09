import type { Autor } from "../types/autor";

let autores: Autor[] = [
  { id: 1, nombre: "J.R.R. Tolkien" },
  { id: 2, nombre: "J.K. Rowling" },
  { id: 3, nombre: "Gabriel García Márquez" },
];

export function obtenerAutores(): Autor[] {
  return autores;
}

export function obtenerAutorPorId(id: number): Autor | undefined {
  return autores.find((autor) => autor.id === id);
}

export function crearAutor(nombre: string): Autor {
  const nuevoAutor: Autor = {
    id: autores.length > 0 ? Math.max(...autores.map((autor) => autor.id)) + 1 : 1,
    nombre,
  };

  autores.push(nuevoAutor);

  return nuevoAutor;
}

export function actualizarAutor(
  id: number,
  nombre: string
): Autor | undefined {
  const autor = autores.find((autor) => autor.id === id);

  if (!autor) {
    return undefined;
  }

  autor.nombre = nombre;

  return autor;
}

export function eliminarAutor(id: number): boolean {
  const cantidadAnterior = autores.length;

  autores = autores.filter((autor) => autor.id !== id);

  return autores.length < cantidadAnterior;
}