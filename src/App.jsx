import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, CompoundComponent, ControlProps } from './routes'
import HomeMessage from './componets/HomeMessage'

const outletRoutes = [
  {
    path: '/',
    element: <HomeMessage />,
    title: 'Home',
  },
  {
    path: '/CompoundComponent',
    element: <CompoundComponent />,
    title: 'Compound Component',
  },
  {
    path: '/controlProps',
    element: <ControlProps />,
    title: 'Control Props',
  },
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home routes={outletRoutes} />,
    children: outletRoutes,
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
