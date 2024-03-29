import React from 'react'
import { useRoutes } from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import MainPage from '../Pages/MainPage'
import User from './Components/User'

const Router = () => {
  const routes = useRoutes([
    {
        path:"/",
        element: <MainPage />
    },
    // {
    //     path:"/login",
    //     element: <Login />
    // },
    // {
    //     path:"/Signup",
    //     element: <Signup />
    // },
    // {
    //     path:"/users/:userId",
    //     element: <User />
    // },
])

  return routes
}

export default Router