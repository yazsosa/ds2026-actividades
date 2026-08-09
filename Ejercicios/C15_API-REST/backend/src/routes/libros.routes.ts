import { Router } from "express";
import { listarLibros } from "../controllers/libros.controller";

const router = Router();

router.get("/", listarLibros);

export default router;