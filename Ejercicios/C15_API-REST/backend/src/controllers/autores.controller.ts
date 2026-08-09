import type { Request, Response } from "express";
import {
  obtenerAutores,
  obtenerAutorPorId,
  crearAutor,
  actualizarAutor,
  eliminarAutor,
} from "../services/autores.service";

export function listarAutores(_req: Request, res: Response) {
  const autores = obtenerAutores();

  res.json(autores);
}

export function buscarAutorPorId(req: Request, res: Response) {
  const id = Number(req.params.id);

  const autor = obtenerAutorPorId(id);

  if (!autor) {
    return res.status(404).json({
      mensaje: "Autor no encontrado",
    });
  }

  res.json(autor);
}

export function agregarAutor(req: Request, res: Response) {
  const { nombre } = req.body;

  if (!nombre) {
    return res.status(400).json({
      mensaje: "El nombre es obligatorio",
    });
  }

  const nuevoAutor = crearAutor(nombre);

  res.status(201).json(nuevoAutor);
}

export function modificarAutor(req: Request, res: Response) {
  const id = Number(req.params.id);
  const { nombre } = req.body;

  if (!nombre) {
    return res.status(400).json({
      mensaje: "El nombre es obligatorio",
    });
  }

  const autorActualizado = actualizarAutor(id, nombre);

  if (!autorActualizado) {
    return res.status(404).json({
      mensaje: "Autor no encontrado",
    });
  }

  res.json(autorActualizado);
}

export function borrarAutor(req: Request, res: Response) {
  const id = Number(req.params.id);

  const eliminado = eliminarAutor(id);

  if (!eliminado) {
    return res.status(404).json({
      mensaje: "Autor no encontrado",
    });
  }

  res.status(204).send();
}