import { Router } from "express";

import {
  listarLibros,
  buscarLibroPorId,
  agregarLibro,
  modificarLibro,
  borrarLibro,
} from "../controllers/libros.controller";

import {
  libroCreateSchema,
  libroUpdateSchema,
} from "../validations/libros.validation";

import { idParamSchema } from "../validations/params.validation";

import {
  validate,
  validateParams,
} from "../middlewares/validate.middleware";

import {
  authenticate,
  authorize,
} from "../middlewares/auth.middleware";

const router = Router();

// Lectura pública
router.get("/", listarLibros);

router.get(
  "/:id",
  validateParams(idParamSchema),
  buscarLibroPorId
);

// Solo ADMIN puede crear
router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  validate(libroCreateSchema),
  agregarLibro
);

// Solo ADMIN puede modificar
router.put(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  validateParams(idParamSchema),
  validate(libroUpdateSchema),
  modificarLibro
);

// Solo ADMIN puede eliminar
router.delete(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  validateParams(idParamSchema),
  borrarLibro
);

export default router;