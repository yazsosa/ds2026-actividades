import { prisma } from "../config/prisma";
import { Prisma } from "../generated/prisma/client";

export type AutorDetalle = Prisma.AutorGetPayload<{
  include: {
    libros: true;
  };
}>;

export async function obtenerAutores() {
  return prisma.autor.findMany();
}

export async function obtenerAutorPorId(
  id: number
): Promise<AutorDetalle | null> {
  return prisma.autor.findUnique({
    where: { id },
    include: {
      libros: true,
    },
  });
}

export async function crearAutor(
  nombre: string,
  nacionalidad: string
) {
  return prisma.autor.create({
    data: {
      nombre,
      nacionalidad,
    },
  });
}

export async function actualizarAutor(
  id: number,
  nombre: string,
  nacionalidad: string
) {
  return prisma.autor.update({
    where: { id },
    data: {
      nombre,
      nacionalidad,
    },
  });
}

export async function eliminarAutor(id: number) {
  return prisma.autor.delete({
    where: { id },
  });
}