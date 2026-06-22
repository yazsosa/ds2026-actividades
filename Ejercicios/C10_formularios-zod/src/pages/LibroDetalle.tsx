import { useParams } from 'react-router-dom'

export default function LibroDetalle() {
  const { id } = useParams()

  return (
    <div>
      <h1>Detalle del libro</h1>
      <p>ID: {id}</p>
    </div>
  )
}