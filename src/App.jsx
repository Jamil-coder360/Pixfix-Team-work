import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Roots from "./component/main/Roots"
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ProjectDetails from './pages/ProjectDetails';
import ProjectPage from './pages/ProjectPage';
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
        path:"service_detail",
        element:<ServiceDetailPage />
      },
      {
        path:"project_detail",
        element:<ProjectDetails />
      },
      {
        path:"project",
        element:<ProjectPage />
      },
    ]
  },
]);
const App = () => {
  return (
     <RouterProvider router={router} />
  )
}

export default App
