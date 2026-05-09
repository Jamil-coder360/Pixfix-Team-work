import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Roots from "./component/main/Roots"
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import NotFoundPage from './pages/NotFoundPage';
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
        path:"about",
        element: <AboutPage /> ,
      },
      {
        path:"services",
        element: <ServicePage />
      },
      {
        path: "*",
        element: <NotFoundPage />
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
