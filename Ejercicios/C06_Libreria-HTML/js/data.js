const books = [
  {
    id: 1,
    title: "Cien Años de Soledad",
    author: "Gabriel García Márquez",
    price: 2800,
    category: "Literatura",
    description: "Una saga épica de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo. Una obra cumbre del realismo mágico latinoamericano.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=560&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    price: 1500,
    category: "Clásicos",
    description: "Un clásico atemporal sobre un joven príncipe de otro planeta. Una historia filosófica y poética que explora la amistad y el amor.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=560&fit=crop",
    featured: true
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    price: 2200,
    category: "Distopía",
    description: "Una novela distópica ambientada en una sociedad totalitaria donde el Gran Hermano lo controla todo.",
    image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=400&h=560&fit=crop",
    featured: true
  },
  {
    id: 4,
    title: "Ficciones",
    author: "Jorge Luis Borges",
    price: 1900,
    category: "Literatura",
    description: "Una colección de cuentos que exploran laberintos, bibliotecas infinitas y realidades alternativas.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=560&fit=crop",
    featured: true
  },
  {
    id: 5,
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    price: 3200,
    category: "Clásicos",
    description: "La historia del ingenioso hidalgo Alonso Quijano que sale al mundo en busca de aventuras caballerescas.",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=560&fit=crop",
    featured: true
  },
  {
    id: 6,
    title: "El Alquimista",
    author: "Paulo Coelho",
    price: 1800,
    category: "Autoayuda",
    description: "La historia de Santiago, un pastor andaluz que emprende un viaje en busca de su leyenda personal.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=560&fit=crop",
    featured: true
  }
];

function searchBooks(query) {
  const q = query.toLowerCase().trim();
  if (!q) return books;
  return books.filter(book =>
    book.title.toLowerCase().includes(q) ||
    book.author.toLowerCase().includes(q) ||
    book.category.toLowerCase().includes(q)
  );
}

function getBookById(id) {
  return books.find(b => b.id === parseInt(id));
}

function getFeaturedBooks() {
  return books.filter(b => b.featured);
}