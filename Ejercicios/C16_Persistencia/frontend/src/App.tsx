import { Routes, Route } from 'react-router-dom'

import Layout from './layout/Layout'
import Home from './pages/Home'
import Catalogo from './pages/Catalogo'
import LibroDetalle from './pages/LibroDetalle'
import AltaLibro from './pages/AltaLibro'


export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/libros/:id" element={<LibroDetalle />} />
        <Route path="/alta-libro" element={<AltaLibro />} />
      </Routes>
    </Layout>
  )
}