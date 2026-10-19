import express from "express";
import cors from "cors";

import librosRouter from "./routes/libros.routes";
import autoresRouter from "./routes/autores.routes";
import authRouter from "./routes/auth.routes";
import { errorHandler } from "./middlewares/error.middleware";

const app = express();

const corsOptions = {
  origin: [
    process.env.FRONTEND_URL ?? "http://localhost:5173",
  ],
};

app.use(cors(corsOptions));

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ mensaje: "API de la Librería - 🐳" });
});

app.use("/api/libros", librosRouter);
app.use("/api/autores", autoresRouter);
app.use("/api/auth", authRouter);

app.use((_req, res) => {
  return res.status(404).json({
    error: "Ruta no encontrada",
  });
});

app.use(errorHandler);

export default app;