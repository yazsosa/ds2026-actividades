import { Router } from "express";

import {
  listarAutores,
  buscarAutorPorId,
  agregarAutor,
  modificarAutor,
  borrarAutor,
} from "../controllers/autores.controller";

import {
  autorCreateSchema,
  autorUpdateSchema,
} from "../validations/autores.validation";

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
router.get("/", listarAutores);

router.get(
  "/:id",
  validateParams(idParamSchema),
  buscarAutorPorId
);

// Solo ADMIN puede crear
router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  validate(autorCreateSchema),
  agregarAutor
);

// Solo ADMIN puede modificar
router.put(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  validateParams(idParamSchema),
  validate(autorUpdateSchema),
  modificarAutor
);

// Solo ADMIN puede eliminar
router.delete(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  validateParams(idParamSchema),
  borrarAutor
);

export default router;