interface Libro {
  isbn: string;
  titulo: string;
  autor: string;
  precio: number;
  disponible: boolean;
  genero?: string;
}

let catalogo: Libro[] = [
  { isbn: "1", titulo: "Mientras escribo", autor: "Stephen King", precio: 150, disponible: false },
  { isbn: "2", titulo: "El oficio de escribir", autor: "John Gardner", precio: 200, disponible: true },
  { isbn: "3", titulo: "Zen en el arte de escribir", autor: "Ray Bradbury", precio: 180, disponible: false },
  { isbn: "4", titulo: "Cartas a un joven novelista", autor: "Mario Vargas Llosa", precio: 220, disponible: true },
  { isbn: "5", titulo: "Cómo no escribir una novela", autor: "Howard Mittelmark", precio: 130, disponible: true }
];

const inputTitulo = document.querySelector("#inputTitulo") as HTMLInputElement;
const inputAutor = document.querySelector("#inputAutor") as HTMLInputElement;
const inputPrecio = document.querySelector("#inputPrecio") as HTMLInputElement;
const inputDisponible = document.querySelector("#inputDisponible") as HTMLInputElement;
const inputGenero = document.querySelector("#inputGenero") as HTMLInputElement;
const btnAgregar = document.querySelector("#btnAgregar") as HTMLButtonElement;
const listado = document.querySelector("#listado") as HTMLUListElement;
const stats = document.querySelector("#stats") as HTMLParagraphElement;
const errorForm = document.querySelector("#errorForm") as HTMLDivElement;
const filtroAutor = document.querySelector("#filtroAutor") as HTMLInputElement;
const btnFiltrar = document.querySelector("#filtrar") as HTMLButtonElement;
const btnDisponibles = document.querySelector("#mostrarDisponibles") as HTMLButtonElement;
const btnTodos = document.querySelector("#mostrarTodos") as HTMLButtonElement;

function precioPromedio(libros: Libro[]): number {
  if (libros.length === 0) return 0;
  return libros.reduce((acc, l) => acc + l.precio, 0) / libros.length;
}

function buscarPorAutor(autor: string): Libro[] {
  return catalogo.filter((l) => l.autor.toLowerCase().includes(autor.toLowerCase()));
}

function librosDisponibles(): Libro[] {
  return catalogo.filter((l) => l.disponible);
}

function renderizar(libros: Libro[]): void {
  listado.innerHTML = "";

  libros.forEach((libro) => {
    const li = document.createElement("li");
    li.textContent = `${libro.titulo} - ${libro.autor} - $${libro.precio} - ${libro.disponible ? "Disponible" : "No disponible"}`;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener("click", () => eliminarLibro(libro.isbn));

    li.appendChild(btnEliminar);
    listado.appendChild(li);
  });

  stats.textContent = `Cantidad: ${libros.length} | Promedio: $${precioPromedio(libros).toFixed(2)}`;
}

function validarFormulario(): Libro | null {
  const titulo = inputTitulo.value.trim();
  const autor = inputAutor.value.trim();
  const precio = Number(inputPrecio.value);
  const genero = inputGenero.value.trim();

  if (!titulo || !autor || precio <= 0) {
    return null;
  }

  return {
    isbn: "AUTO-" + Date.now(),
    titulo,
    autor,
    precio,
    disponible: inputDisponible.checked,
    genero: genero !== "" ? genero : undefined,
  };
}

function agregarLibro(libro: Libro): void {
  catalogo.push(libro);
  renderizar(catalogo);
}

function eliminarLibro(isbn: string): void {
  catalogo = catalogo.filter((l) => l.isbn !== isbn);
  renderizar(catalogo);
}

btnAgregar.addEventListener("click", () => {
  const libro = validarFormulario();

  if (libro === null) {
    errorForm.textContent = "Datos inválidos";
    return;
  }

  errorForm.textContent = "";
  agregarLibro(libro);

  inputTitulo.value = "";
  inputAutor.value = "";
  inputPrecio.value = "";
  inputGenero.value = "";
  inputDisponible.checked = false;
});

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