import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          📚 Mi Librería
        </Navbar.Brand>

        <Nav>
          <Nav.Link as={Link} to="/">
            Inicio
          </Nav.Link>

          <Nav.Link as={Link} to="/catalogo">
            Catálogo
          </Nav.Link>

          <Nav.Link as={Link} to="/alta-libro">
            Alta Libro
          </Nav.Link>

          <Nav.Link as={Link} to="/login">
            Iniciar sesión
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}