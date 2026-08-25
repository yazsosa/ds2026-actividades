import { prisma } from "../config/prisma";
import { Prisma } from "../generated/prisma/client";

export type LibroConAutor = Prisma.LibroGetPayload<{
  include: {
    autor: true;
  };
}>;

export type LibroDetalle = Prisma.LibroGetPayload<{
  include: {
    autor: true;
    categorias: true;
  };
}>;

type LibroCrearDatos = {
  titulo: string;
  precio: number;
  imagen: string;
  disponible?: boolean;
  autorId: number;
};

type LibroActualizarDatos = Partial<LibroCrearDatos>;

export async function obtenerLibros(): Promise<LibroConAutor[]> {
  return prisma.libro.findMany({
    include: {
      autor: true,
    },
  });
}

export async function obtenerLibroPorId(
  id: number
): Promise<LibroDetalle | null> {
  return prisma.libro.findUnique({
    where: {
      id,
    },
    include: {
      autor: true,
      categorias: true,
    },
  });
}

export async function crearLibro(datos: LibroCrearDatos) {
  const autorExiste = await prisma.autor.findUnique({
    where: {
      id: datos.autorId,
    },
  });

  if (!autorExiste) {
    return null;
  }

  return prisma.libro.create({
    data: {
      titulo: datos.titulo,
      precio: datos.precio,
      imagen: datos.imagen,
      disponible: datos.disponible,
      autor: {
        connect: {
          id: datos.autorId,
        },
      },
    },
    include: {
      autor: true,
      categorias: true,
    },
  });
}

export async function actualizarLibro(
  id: number,
  datos: LibroActualizarDatos
) {
  return prisma.libro.update({
    where: {
      id,
    },
    data: {
      titulo: datos.titulo,
      precio: datos.precio,
      imagen: datos.imagen,
      disponible: datos.disponible,
      ...(datos.autorId !== undefined && {
        autor: {
          connect: {
            id: datos.autorId,
          },
        },
      }),
    },
    include: {
      autor: true,
      categorias: true,
    },
  });
}

export async function eliminarLibro(id: number) {
  return prisma.libro.delete({
    where: {
      id,
    },
  });
}