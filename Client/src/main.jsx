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
import ProfileUser from './components/Profile'
import Login from './components/Login'
import Register from './components/Register'

import { updateOrDeleteCar, createCar } from './utils/actions/cars'
import { getSingleCar, getProfile, getAllCars } from './utils/loaders'
import { loginUser, registerUser } from './utils/actions/auth'



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
        element: <CarIndex />,
        loader: getAllCars
      },
      {
        path: '/carIndex/:carId',
        element: <CarSingle />
      },
      {
        path: '/cars/create',
        element: <CarCreate />,
        action: async ({ request }) => createCar(request)
      },
      {
        path: '/carIndex/:carId/update',
        element: <CarUpdate />,
        action: async ({ request, params }) => updateOrDeleteCar(request, params.carId),
        loader: async ({ params }) => getSingleCar(params.carId)
      },
      {
        path: "/auth/:id",
        element: <ProfileUser/>,
        loader: async ({ params }) => getProfile(params.id)
      },
      {
        path:"/auth/login",
        element: <Login/>,
        action: async ({ request }) => loginUser(request)
      },
      {
        path:"/auth/register",
        element: <Register/>,
        action: async ({ request }) => registerUser(request)
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)