import { createBrowserRouter } from 'react-router-dom'
import Page500 from '~/pages/500'
import Page404 from '~/pages/404'
import Home from '~/pages/Home'
import Login from '~/pages/Login'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Page500 />
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Page500 />
  },
  {
    path: '*',
    element: <Page404 />
  }
])
