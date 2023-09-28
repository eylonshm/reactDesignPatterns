import './index.scss'
import { Link } from 'react-router-dom'

const NavBar = ({ routes }) => {
  return (
    <nav className='navBarWrapper'>
      {routes.map(({ title, path }) => (
        <Link key={title} to={path}>
          {title}
        </Link>
      ))}
    </nav>
  )
}

export default NavBar
