import { Navigate, Outlet } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import { useAuth } from '../context/AuthContext'

type PrivateRouteProps = {
  rol?: string
}

export default function PrivateRoute({
  rol,
}: PrivateRouteProps) {
  const {
    cargando,
    estaAutenticado,
    tieneRol,
  } = useAuth()

  if (cargando) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '3rem',
        }}
      >
        <Spinner animation="border" />
      </div>
    )
  }

  if (!estaAutenticado) {
    return <Navigate to="/login" replace />
  }

  if (rol && !tieneRol(rol)) {
    return <Navigate to="/sin-permiso" replace />
  }

  return <Outlet />
}