import Navbar from './Navbar'
import Footer from './Footer'

type Props = {
  children: React.ReactNode
  query: string
  setQuery: (q: string) => void
}

export default function Layout({
  children,
  query,
  setQuery,
}: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar query={query} setQuery={setQuery} />

      <main style={{ flex: 1 }}>
        {children}
      </main>

      <Footer />
    </div>
  )
}