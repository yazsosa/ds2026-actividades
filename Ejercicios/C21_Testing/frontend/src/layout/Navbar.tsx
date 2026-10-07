interface Props {
  query: string
  setQuery: (q: string) => void
}

export default function Navbar({ query, setQuery }: Props) {
  return (
    <nav style={{ backgroundColor: '#7a9e9f', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
      <span style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', letterSpacing: '0.05em' }}>
        📚 Mi Librería
      </span>
      <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#6a8e8f', borderRadius: '8px', padding: '0.5rem 1rem', flex: 1, maxWidth: '380px' }}>
        <span style={{ marginRight: '0.5rem', color: '#d4e8e8' }}>🔍</span>
        <input
          type="text"
          placeholder="Buscar por título o autor..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{ border: 'none', background: 'none', outline: 'none', width: '100%', fontSize: '1rem', color: '#fff', fontFamily: 'Cormorant, serif' }}
        />
      </div>
    </nav>
  )
}