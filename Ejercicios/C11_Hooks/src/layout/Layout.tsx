type Props = {
  children: React.ReactNode
}

import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}