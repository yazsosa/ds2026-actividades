import express from "express";
import librosRouter from "./routes/libros.routes";
import autoresRouter from "./routes/autores.routes";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ mensaje: "API de la Librería - 🐳" });
});

app.use("/libros", librosRouter);
app.use("/autores", autoresRouter);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});