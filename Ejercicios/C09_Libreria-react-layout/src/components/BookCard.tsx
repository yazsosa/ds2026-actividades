import { useState } from 'react'
import type { Libro } from '../types/libro'
import { Link } from 'react-router-dom'

export default function BookCard({
  id,
  title,
  author,
  cover,
  price,
}: Libro) {
  const [liked, setLiked] = useState(false)

  return (
    <div
      style={{
        width: '180px',
        backgroundColor: '#f0f7f7',
        borderRadius: '10px',
        overflow: 'hidden',
        border: '1px solid #b2cece',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      }}
    >
      <img
        src={cover}
        alt={title}
        style={{
          width: '100%',
          maxHeight: '220px',
          objectFit: 'contain',
          backgroundColor: '#fff',
        }}
      />

      <div style={{ padding: '1rem' }}>
        <p
          style={{
            fontWeight: 700,
            fontSize: '1rem',
            marginBottom: '0.2rem',
            color: '#2b3a2b',
          }}
        >
          {title}
        </p>

        <p
          style={{
            color: '#5a7a7a',
            fontSize: '0.9rem',
            marginBottom: '0.5rem',
          }}
        >
          {author}
        </p>

        <p
          style={{
            fontWeight: 700,
            marginBottom: '0.8rem',
            color: '#3a6060',
            fontSize: '1rem',
          }}
        >
          ${price.toLocaleString('es-AR')}
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <Link to={`/libros/${id}`}>
            <button
              style={{
                backgroundColor: '#7a9e9f',
                color: '#fff',
                border: 'none',
                padding: '0.45rem 0.9rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 700,
              }}
            >
              Ver más
            </button>
          </Link>

          <button
            onClick={() => setLiked(!liked)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.2rem',
              cursor: 'pointer',
            }}
          >
            {liked ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
    </div>
  )
}