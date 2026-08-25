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

const router = Router();

router.get("/", listarAutores);

router.get(
  "/:id",
  validateParams(idParamSchema),
  buscarAutorPorId
);

router.post(
  "/",
  validate(autorCreateSchema),
  agregarAutor
);

router.put(
  "/:id",
  validateParams(idParamSchema),
  validate(autorUpdateSchema),
  modificarAutor
);

router.delete(
  "/:id",
  validateParams(idParamSchema),
  borrarAutor
);

export default router;