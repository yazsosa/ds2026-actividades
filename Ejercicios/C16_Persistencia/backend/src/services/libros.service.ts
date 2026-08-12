import { prisma } from "../config/prisma";
import type { Libro } from "../types/libro";

export async function obtenerLibros(): Promise<Libro[]> {
  const librosDb = await prisma.libro.findMany();

  return librosDb.map((libro) => ({
    id: libro.id,
    title: libro.titulo,
    author: libro.autor,
    cover: libro.imagen,
    price: libro.precio,
  }));
}