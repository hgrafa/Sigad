import { House, Book } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

export function Navbar() {
  return (
    <div>
      <p>navbar</p>
      <nav>
        <NavLink to="/" title="Home">
          <House width={32} />
        </NavLink>
        <NavLink to="/cadastro" title="Cadastro">
          <Book width={32} />
        </NavLink>
      </nav>
    </div>
  )
}
