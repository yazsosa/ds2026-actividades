import { useState } from 'react'
import { z } from 'zod'

const libroSchema = z.object({
  title: z.string().min(1, 'El título es obligatorio'),
  author: z.string().min(1, 'El autor es obligatorio'),
  cover: z.string().url('Debe ingresar una URL válida'),
  price: z.coerce.number().positive('El precio debe ser mayor a 0'),
})

type ErroresLibro = Partial<Record<keyof z.infer<typeof libroSchema>, string>>

export default function AltaLibro() {
  const [form, setForm] = useState({
    title: '',
    author: '',
    cover: '',
    price: '',
  })

  const [errores, setErrores] = useState<ErroresLibro>({})
  const [mensaje, setMensaje] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const resultado = libroSchema.safeParse(form)

    if (!resultado.success) {
      const nuevosErrores: ErroresLibro = {}

      resultado.error.issues.forEach((error) => {
        const campo = error.path[0] as keyof ErroresLibro
        nuevosErrores[campo] = error.message
      })

      setErrores(nuevosErrores)
      setMensaje('')
      return
    }

    setErrores({})
    setMensaje('✅ Libro cargado correctamente')

    console.log(resultado.data)

    setForm({
      title: '',
      author: '',
      cover: '',
      price: '',
    })
  }

  return (
    <main
      style={{
        maxWidth: '700px',
        margin: '0 auto',
        padding: '2rem',
      }}
    >
      <section
        style={{
          backgroundColor: '#ffffff',
          padding: '2rem',
          borderRadius: '20px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}
      >
        <h1
          style={{
            marginBottom: '2rem',
            textAlign: 'center',
          }}
        >
          📚 Alta de libro
        </h1>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: 'bold',
              }}
            >
              Título
            </label>

            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Ingrese el título"
              style={{
                width: '100%',
                padding: '14px 20px',
                borderRadius: '999px',
                border: '1px solid #ccc',
                fontSize: '1rem',
              }}
            />

            {errores.title && (
              <p style={{ color: 'red', marginTop: '0.5rem' }}>
                {errores.title}
              </p>
            )}
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: 'bold',
              }}
            >
              Autor
            </label>

            <input
              type="text"
              name="author"
              value={form.author}
              onChange={handleChange}
              placeholder="Ingrese el autor"
              style={{
                width: '100%',
                padding: '14px 20px',
                borderRadius: '999px',
                border: '1px solid #ccc',
                fontSize: '1rem',
              }}
            />

            {errores.author && (
              <p style={{ color: 'red', marginTop: '0.5rem' }}>
                {errores.author}
              </p>
            )}
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: 'bold',
              }}
            >
              URL de portada
            </label>

            <input
              type="text"
              name="cover"
              value={form.cover}
              onChange={handleChange}
              placeholder="https://..."
              style={{
                width: '100%',
                padding: '14px 20px',
                borderRadius: '999px',
                border: '1px solid #ccc',
                fontSize: '1rem',
              }}
            />

            {errores.cover && (
              <p style={{ color: 'red', marginTop: '0.5rem' }}>
                {errores.cover}
              </p>
            )}
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: 'bold',
              }}
            >
              Precio
            </label>

            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="0"
              style={{
                width: '100%',
                padding: '14px 20px',
                borderRadius: '999px',
                border: '1px solid #ccc',
                fontSize: '1rem',
              }}
            />

            {errores.price && (
              <p style={{ color: 'red', marginTop: '0.5rem' }}>
                {errores.price}
              </p>
            )}
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '15px',
              borderRadius: '999px',
              border: 'none',
              backgroundColor: '#1e293b',
              color: 'white',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Guardar libro
          </button>
        </form>

        {mensaje && (
          <p
            style={{
              color: 'green',
              marginTop: '1rem',
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            {mensaje}
          </p>
        )}
      </section>
    </main>
  )
}