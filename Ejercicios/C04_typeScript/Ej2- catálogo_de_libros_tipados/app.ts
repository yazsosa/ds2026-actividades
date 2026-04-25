interface Libro {
  isbn: string;
  titulo: string;
  autor: string;
  precio: number;
  disponible: boolean;
  genero?: string;
}

const catalogo: Libro[] = [
  { isbn: "101", titulo: "Orgullo y prejuicio", autor: "Jane Austen", precio: 2000, disponible: false, genero: "Novela" },
  { isbn: "102", titulo: "Cien años de soledad", autor: "Gabriel García Márquez", precio: 2500, disponible: true, genero: "Realismo mágico" },
  { isbn: "103", titulo: "1984", autor: "George Orwell", precio: 1800, disponible: false, genero: "Distopía" },
  { isbn: "104", titulo: "Crimen y castigo", autor: "Fiódor Dostoyevski", precio: 2200, disponible: true, genero: "Novela psicológica" },
  { isbn: "105", titulo: "El principito", autor: "Antoine de Saint-Exupéry", precio: 1500, disponible: true, genero: "Fábula" }
];

const listado = document.querySelector("#listado") as HTMLUListElement;
const stats = document.querySelector("#stats") as HTMLParagraphElement;
const filtroAutor = document.querySelector("#filtroAutor") as HTMLInputElement;
const btnFiltrar = document.querySelector("#filtrar") as HTMLButtonElement;
const btnDisponibles = document.querySelector("#mostrarDisponibles") as HTMLButtonElement;
const btnTodos = document.querySelector("#mostrarTodos") as HTMLButtonElement;

function buscarPorAutor(autor: string): Libro[] {
  return catalogo.filter((libro) =>
    libro.autor.toLowerCase().includes(autor.toLowerCase())
  );
}

function librosDisponibles(): Libro[] {
  return catalogo.filter((libro) => libro.disponible);
}
function precioPromedio(libros: Libro[]): number {
  if (libros.length === 0) return 0;
  const total = libros.reduce((acc, libro) => acc + libro.precio, 0);
  return total / libros.length;
}

function renderizar(libros: Libro[]): void {
  listado.innerHTML = "";

  libros.forEach((libro) => {
    const li = document.createElement("li");
    li.textContent = `${libro.titulo} - ${libro.autor} - $${libro.precio} - ${libro.disponible ? "Disponible" : "No disponible"}`;
    listado.appendChild(li);
  });

  stats.textContent = `Cantidad: ${libros.length} | Precio promedio: $${precioPromedio(libros).toFixed(2)}`;
}

btnFiltrar.addEventListener("click", () => {
  renderizar(buscarPorAutor(filtroAutor.value));
});

btnDisponibles.addEventListener("click", () => {
  renderizar(librosDisponibles());
});

btnTodos.addEventListener("click", () => {
  renderizar(catalogo);
});

renderizar(catalogo);
