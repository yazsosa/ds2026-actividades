import type { Request, Response } from "express";
import {
  obtenerLibros,
  obtenerLibroPorId,
  crearLibro,
  actualizarLibro,
  eliminarLibro,
} from "../services/libros.service";

export async function listarLibros(_req: Request, res: Response) {
  const libros = await obtenerLibros();

  return res.json(libros);
}

export async function buscarLibroPorId(req: Request, res: Response) {
  const id = Number(req.params.id);

  const libro = await obtenerLibroPorId(id);

  if (!libro) {
    return res.status(404).json({
      error: "Libro no encontrado",
    });
  }

  return res.json(libro);
}

export async function agregarLibro(req: Request, res: Response) {
  const nuevoLibro = await crearLibro(req.body);

  if (!nuevoLibro) {
    return res.status(404).json({
      error: "Autor no encontrado",
    });
  }

  return res.status(201).json(nuevoLibro);
}

export async function modificarLibro(req: Request, res: Response) {
  const id = Number(req.params.id);

  const libroActualizado = await actualizarLibro(id, req.body);

  return res.json(libroActualizado);
}

export async function borrarLibro(req: Request, res: Response) {
  const id = Number(req.params.id);

  await eliminarLibro(id);

  return res.status(204).send();
}