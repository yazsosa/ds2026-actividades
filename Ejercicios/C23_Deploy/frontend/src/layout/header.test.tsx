import {
  afterEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest'
import {
  cleanup,
  render,
  screen,
} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'
import { useAuth } from '../context/AuthContext'

vi.mock('../context/AuthContext', () => ({
  useAuth: vi.fn(),
}))

const useAuthMock = vi.mocked(useAuth)

afterEach(() => {
  cleanup()
  vi.clearAllMocks()
})

describe('Header', () => {
  it('muestra Alta Libro cuando el usuario es ADMIN', () => {
    useAuthMock.mockReturnValue({
      usuario: {
        id: 1,
        email: 'admin@libreria.test',
        nombre: 'Administrador',
        rol: 'ADMIN',
      },
      cargando: false,
      estaAutenticado: true,
      login: vi.fn(),
      logout: vi.fn(),
      tieneRol: vi.fn(),
    })

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    expect(
      screen.getByText('Alta Libro')
    ).toBeInTheDocument()
  })

  it('no muestra Alta Libro cuando el usuario es CLIENTE', () => {
    useAuthMock.mockReturnValue({
      usuario: {
        id: 2,
        email: 'cliente@libreria.test',
        nombre: 'Cliente',
        rol: 'CLIENTE',
      },
      cargando: false,
      estaAutenticado: true,
      login: vi.fn(),
      logout: vi.fn(),
      tieneRol: vi.fn(),
    })

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    expect(
      screen.queryByText('Alta Libro')
    ).not.toBeInTheDocument()
  })
})