import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter  } from 'react-router-dom'
import './index.css'

import { 
  MainDashboard
} from './components/index'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainDashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)