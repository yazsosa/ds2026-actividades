import type { Request, Response } from "express";
import { obtenerLibros } from "../services/libros.service";

export function listarLibros(_req: Request, res: Response) {
  const libros = obtenerLibros();

  res.json(libros);
}