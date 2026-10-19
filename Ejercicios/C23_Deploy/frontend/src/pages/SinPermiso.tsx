import { Link } from 'react-router-dom'

export default function SinPermiso() {
  return (
    <main
      style={{
        maxWidth: '700px',
        margin: '0 auto',
        padding: '3rem',
        textAlign: 'center',
      }}
    >
      <h1>⛔ Sin permiso</h1>

      <p style={{ marginTop: '1rem' }}>
        No tenés permisos para acceder a esta página.
      </p>

      <Link to="/catalogo">
        Volver al catálogo
      </Link>
    </main>
  )
}