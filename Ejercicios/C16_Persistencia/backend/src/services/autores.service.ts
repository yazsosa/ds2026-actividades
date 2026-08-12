import { prisma } from "../config/prisma";

export async function obtenerAutores() {
  return prisma.autor.findMany();
}

export async function obtenerAutorPorId(id: number) {
  return prisma.autor.findUnique({
    where: { id },
  });
}

export async function crearAutor(nombre: string) {
  return prisma.autor.create({
    data: {
      nombre,
      nacionalidad: "No especificada",
    },
  });
}

export async function actualizarAutor(id: number, nombre: string) {
  const autor = await prisma.autor.findUnique({
    where: { id },
  });

  if (!autor) {
    return null;
  }

  return prisma.autor.update({
    where: { id },
    data: {
      nombre,
    },
  });
}

export async function eliminarAutor(id: number): Promise<boolean> {
  const autor = await prisma.autor.findUnique({
    where: { id },
  });

  if (!autor) {
    return false;
  }

  await prisma.autor.delete({
    where: { id },
  });

  return true;
}