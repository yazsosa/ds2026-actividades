import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Header() {
  const navigate = useNavigate()
  const { usuario, estaAutenticado, logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          📚 Mi Librería
        </Navbar.Brand>

        <Nav className="align-items-center">
          <Nav.Link as={Link} to="/">
            Inicio
          </Nav.Link>

          <Nav.Link as={Link} to="/catalogo">
            Catálogo
          </Nav.Link>

          {usuario?.rol === 'ADMIN' && (
            <Nav.Link as={Link} to="/libros/nuevo">
              Alta Libro
            </Nav.Link>
          )}

          {!estaAutenticado ? (
            <Nav.Link as={Link} to="/login">
              Ingresar
            </Nav.Link>
          ) : (
            <Button
              variant="outline-light"
              size="sm"
              className="ms-3"
              onClick={handleLogout}
            >
              Salir
            </Button>
          )}
        </Nav>
      </Container>
    </Navbar>
  )
}