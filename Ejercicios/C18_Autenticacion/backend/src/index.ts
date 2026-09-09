import express from "express";
import librosRouter from "./routes/libros.routes";
import autoresRouter from "./routes/autores.routes";
import authRouter from "./routes/auth.routes";
import { errorHandler } from "./middlewares/error.middleware";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ mensaje: "API de la Librería - 🐳" });
});

app.use("/api/libros", librosRouter);
app.use("/api/autores", autoresRouter);
app.use("/api/auth", authRouter);

// Siempre después de todas las rutas
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});