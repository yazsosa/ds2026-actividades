import type { Request, Response } from "express";
import {
  obtenerAutores,
  obtenerAutorPorId,
  crearAutor,
  actualizarAutor,
  eliminarAutor,
} from "../services/autores.service";

export async function listarAutores(_req: Request, res: Response) {
  try {
    const autores = await obtenerAutores();
    return res.json(autores);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error interno del servidor",
    });
  }
}

export async function buscarAutorPorId(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const autor = await obtenerAutorPorId(id);

    if (!autor) {
      return res.status(404).json({
        mensaje: "Autor no encontrado",
      });
    }

    return res.json(autor);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error interno del servidor",
    });
  }
}

export async function agregarAutor(req: Request, res: Response) {
  try {
    const { nombre } = req.body;

    if (!nombre) {
      return res.status(400).json({
        mensaje: "El nombre es obligatorio",
      });
    }

    const nuevoAutor = await crearAutor(nombre);

    return res.status(201).json(nuevoAutor);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error interno del servidor",
    });
  }
}

export async function modificarAutor(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const { nombre } = req.body;

    if (!nombre) {
      return res.status(400).json({
        mensaje: "El nombre es obligatorio",
      });
    }

    const autorActualizado = await actualizarAutor(id, nombre);

    if (!autorActualizado) {
      return res.status(404).json({
        mensaje: "Autor no encontrado",
      });
    }

    return res.json(autorActualizado);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error interno del servidor",
    });
  }
}

export async function borrarAutor(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const eliminado = await eliminarAutor(id);

    if (!eliminado) {
      return res.status(404).json({
        mensaje: "Autor no encontrado",
      });
    }

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error interno del servidor",
    });
  }
}