import type { Request, Response } from "express";
import { obtenerLibros } from "../services/libros.service";

export async function listarLibros(_req: Request, res: Response) {
  try {
    const libros = await obtenerLibros();

    return res.json(libros);
  } catch (error) {
    return res.status(500).json({
      error: "Error interno del servidor",
    });
  }
}