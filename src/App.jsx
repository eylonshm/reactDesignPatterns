import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, CompoundComponent, ControlProps, CustomHook } from './routes'
import { DefaultMessage } from './componets'

const outletRoutes = [
  {
    path: '/',
    element: <DefaultMessage />,
    title: 'Home',
  },
  {
    path: '/compoundComponent',
    element: <CompoundComponent />,
    title: 'Compound Component',
  },
  {
    path: '/controlProps',
    element: <ControlProps />,
    title: 'Control Props',
  },
  {
    path: '/customHook',
    element: <CustomHook />,
    title: 'Custom Hook',
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
