import { Outlet } from 'react-router-dom'
import NavBar from '../../componets/NavBar'

const Home = ({ routes }) => {
  return (
    <div>
      <NavBar routes={routes} />
      <Outlet />
    </div>
  )
}

export default Home
