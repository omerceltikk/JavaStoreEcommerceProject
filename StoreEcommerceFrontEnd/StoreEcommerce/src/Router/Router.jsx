import React from 'react'
import { useRoutes } from 'react-router-dom'
import MainPage from '../Pages/MainPage'
import Categories from '../Pages/Categories'
import ProductDetail from '../Pages/ProductDetail'
import BasketPage from '../Pages/BasketPage'
import CompleteBuy from '../Pages/CompleteBuy'
const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <MainPage />
    },
    {
      path: "/authentication",
      // element: <Login />
    },
    {
      path: "/categories/:categoryId",
      element: <Categories />
    },
    {
      path: "/products/:productId",
      element: <ProductDetail />
    },
    {
      path: "/basket",
      element: <BasketPage />
    },
    {
      path: "/CompleteBuy",
      element: <CompleteBuy />
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