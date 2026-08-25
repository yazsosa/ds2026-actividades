import type { Request, Response } from "express";
import {
  obtenerAutores,
  obtenerAutorPorId,
  crearAutor,
  actualizarAutor,
  eliminarAutor,
} from "../services/autores.service";

export async function listarAutores(_req: Request, res: Response) {
  const autores = await obtenerAutores();

  return res.json(autores);
}

export async function buscarAutorPorId(req: Request, res: Response) {
  const id = Number(req.params.id);

  const autor = await obtenerAutorPorId(id);

  if (!autor) {
    return res.status(404).json({
      error: "Autor no encontrado",
    });
  }

  return res.json(autor);
}

export async function agregarAutor(req: Request, res: Response) {
  const { nombre, nacionalidad } = req.body;

  const nuevoAutor = await crearAutor(nombre, nacionalidad);

  return res.status(201).json(nuevoAutor);
}

export async function modificarAutor(req: Request, res: Response) {
  const id = Number(req.params.id);
  const { nombre, nacionalidad } = req.body;

  const autorActualizado = await actualizarAutor(
    id,
    nombre,
    nacionalidad
  );

  return res.json(autorActualizado);
}

export async function borrarAutor(req: Request, res: Response) {
  const id = Number(req.params.id);

  await eliminarAutor(id);

  return res.status(204).send();
}