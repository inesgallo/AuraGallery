import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { routerProvider } from './router/RouterProvider';
import { RouterProvider } from 'react-router-dom';
import { UserProvider } from './context/UserContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <UserProvider>
      <RouterProvider router={routerProvider}></RouterProvider>
    </UserProvider>
  </React.StrictMode>,
)
