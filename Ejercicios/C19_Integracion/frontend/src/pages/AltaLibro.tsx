import { useEffect, useState } from 'react'
import { z } from 'zod'
import { apiFetch } from '../services/api'
import type { Libro } from '../types/libro'

type Autor = {
  id: number
  nombre: string
  nacionalidad: string
}

const libroSchema = z.object({
  titulo: z.string().trim().min(1, 'El título es obligatorio'),
  imagen: z.string().url('Debe ingresar una URL válida'),
  precio: z.coerce
    .number()
    .positive('El precio debe ser mayor a 0'),
  disponible: z.boolean(),
})

export default function AltaLibro() {
  const [titulo, setTitulo] = useState('')
  const [autorNombre, setAutorNombre] = useState('')
  const [nacionalidad, setNacionalidad] = useState('')
  const [imagen, setImagen] = useState('')
  const [precio, setPrecio] = useState('')
  const [disponible, setDisponible] = useState(true)

  const [autores, setAutores] = useState<Autor[]>([])
  const [error, setError] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const cargarAutores = async () => {
      try {
        const datos = await apiFetch<Autor[]>('/autores')
        setAutores(datos)
      } catch (e) {
        setError(
          e instanceof Error
            ? e.message
            : 'Error al cargar los autores'
        )
      }
    }

    cargarAutores()
  }, [])

  const autorExistente = autores.find(
    (autor) =>
      autor.nombre.toLowerCase() ===
      autorNombre.trim().toLowerCase()
  )

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    setError('')
    setMensaje('')

    const resultado = libroSchema.safeParse({
      titulo,
      imagen,
      precio,
      disponible,
    })

    if (!resultado.success) {
      setError(
        resultado.error.issues[0]?.message ??
          'Datos inválidos'
      )
      return
    }

    if (!autorNombre.trim()) {
      setError('El autor es obligatorio')
      return
    }

    if (!autorExistente && !nacionalidad.trim()) {
      setError(
        'Ingresá la nacionalidad del nuevo autor'
      )
      return
    }

    try {
      setLoading(true)

      let autorId: number

      if (autorExistente) {
        autorId = autorExistente.id
      } else {
        const nuevoAutor = await apiFetch<Autor>(
          '/autores',
          {
            method: 'POST',
            body: JSON.stringify({
              nombre: autorNombre.trim(),
              nacionalidad: nacionalidad.trim(),
            }),
          }
        )

        autorId = nuevoAutor.id
      }

      await apiFetch<Libro>('/libros', {
        method: 'POST',
        body: JSON.stringify({
          ...resultado.data,
          autorId,
        }),
      })

      setMensaje('✅ Libro cargado correctamente')

      setTitulo('')
      setAutorNombre('')
      setNacionalidad('')
      setImagen('')
      setPrecio('')
      setDisponible(true)

      const autoresActualizados =
        await apiFetch<Autor[]>('/autores')

      setAutores(autoresActualizados)
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : 'Error al cargar el libro'
      )
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '18px 28px',
    borderRadius: '999px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  }

  return (
    <main
      style={{
        maxWidth: '850px',
        margin: '0 auto',
        padding: '2rem',
      }}
    >
      <section
        style={{
          backgroundColor: '#fff',
          padding: '3rem',
          borderRadius: '20px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            marginBottom: '2.5rem',
          }}
        >
          📚 Alta de libro
        </h1>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '2rem' }}>
            <label>
              <strong>Título</strong>
            </label>

            <input
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Ingrese el título"
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label>
              <strong>Autor</strong>
            </label>

            <input
              list="lista-autores"
              value={autorNombre}
              onChange={(e) =>
                setAutorNombre(e.target.value)
              }
              placeholder="Escriba o seleccione un autor"
              style={inputStyle}
            />

            <datalist id="lista-autores">
              {autores.map((autor) => (
                <option
                  key={autor.id}
                  value={autor.nombre}
                />
              ))}
            </datalist>

            {autorNombre && autorExistente && (
              <p
                style={{
                  color: '#166534',
                  marginTop: '0.5rem',
                }}
              >
                ✓ Autor existente
              </p>
            )}
          </div>

          {autorNombre && !autorExistente && (
            <div style={{ marginBottom: '2rem' }}>
              <label>
                <strong>
                  Nacionalidad del nuevo autor
                </strong>
              </label>

              <input
                value={nacionalidad}
                onChange={(e) =>
                  setNacionalidad(e.target.value)
                }
                placeholder="Ej: Argentina"
                style={inputStyle}
              />

              <p
                style={{
                  color: '#666',
                  marginTop: '0.5rem',
                }}
              >
                Este autor se creará automáticamente.
              </p>
            </div>
          )}

          <div style={{ marginBottom: '2rem' }}>
            <label>
              <strong>URL de portada</strong>
            </label>

            <input
              value={imagen}
              onChange={(e) => setImagen(e.target.value)}
              placeholder="https://..."
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label>
              <strong>Precio</strong>
            </label>

            <input
              type="number"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              placeholder="0"
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label>
              <input
                type="checkbox"
                checked={disponible}
                onChange={(e) =>
                  setDisponible(e.target.checked)
                }
              />{' '}
              Disponible
            </label>
          </div>

          {error && (
            <p
              style={{
                backgroundColor: '#fee2e2',
                color: '#b91c1c',
                padding: '1rem',
                borderRadius: '12px',
                textAlign: 'center',
              }}
            >
              {error}
            </p>
          )}

          {mensaje && (
            <p
              style={{
                backgroundColor: '#dcfce7',
                color: '#166534',
                padding: '1rem',
                borderRadius: '12px',
                textAlign: 'center',
              }}
            >
              {mensaje}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '16px',
              borderRadius: '999px',
              border: 'none',
              backgroundColor: '#1e293b',
              color: '#fff',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            {loading
              ? 'Guardando...'
              : 'Guardar libro'}
          </button>
        </form>
      </section>
    </main>
  )
}