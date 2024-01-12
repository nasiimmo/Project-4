import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss'

import App from './App'
import Home from './components/Home'
import CarIndex from './components/carIndex'
import CarSingle from './components/carSingle'
import CarCreate from './components/carCreate'
import CarUpdate from './components/carUpdate'
import Profile from './components/profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/carIndex',
        element: <CarIndex />
      },
      {
        path: '/carIndex/:carId',
        element: <CarSingle />
      },
      {
        path: '/carIndex/create',
        element: <CarCreate />
      },
      {
        path: '/carIndex/:carId/update',
        element: <CarUpdate />
      },
      {
        path: '/profile',
        element: <Profile />,
        
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)