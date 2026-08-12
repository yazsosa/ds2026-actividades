import { Router } from "express";
import {
  listarAutores,
  buscarAutorPorId,
  agregarAutor,
  modificarAutor,
  borrarAutor,
} from "../controllers/autores.controller";

const router = Router();

router.get("/", listarAutores);

router.get("/:id", buscarAutorPorId);

router.post("/", agregarAutor);

router.put("/:id", modificarAutor);

router.delete("/:id", borrarAutor);

export default router;