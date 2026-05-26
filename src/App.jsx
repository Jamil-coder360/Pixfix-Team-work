import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Roots from "./component/main/Roots"
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import BlogPage from './pages/BlogPage';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Roots />,
    children:[
      {
        index:true,
        element:<HomePage />,
      },
      {
        path:"pricing",
        element:<PricingPage />
      },
      {
        path:"blog",
        element:<BlogPage />
      }
    ]
  },
]);
const App = () => {
  return (
     <RouterProvider router={router} />
  )
}

export default App
