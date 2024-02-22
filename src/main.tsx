import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Detect from './Detect';
import Simulation from './Simulation';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/react-bio-inses',
    element: <App />,
    children: [
      {
        path: 'detect',
        element: <Detect />,
      },
      {
        path: 'simulation',
        element: <Simulation />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
