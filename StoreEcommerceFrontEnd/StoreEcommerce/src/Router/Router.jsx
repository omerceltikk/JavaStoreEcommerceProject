import React from 'react'
import { useRoutes } from 'react-router-dom'
import MainPage from '../Pages/MainPage'

const Router = () => {
  const routes = useRoutes([
    {
        path:"/",
        element: <MainPage />
    },
    {
      path:"/authentication",
      // element: <Login />
  },
  {
        path:"/categories/:categoryId",
        // element: <User />
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