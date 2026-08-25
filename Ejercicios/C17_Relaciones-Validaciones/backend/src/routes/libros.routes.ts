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

const router = Router();

router.get("/", listarLibros);

router.get(
  "/:id",
  validateParams(idParamSchema),
  buscarLibroPorId
);

router.post(
  "/",
  validate(libroCreateSchema),
  agregarLibro
);

router.put(
  "/:id",
  validateParams(idParamSchema),
  validate(libroUpdateSchema),
  modificarLibro
);

router.delete(
  "/:id",
  validateParams(idParamSchema),
  borrarLibro
);

export default router;