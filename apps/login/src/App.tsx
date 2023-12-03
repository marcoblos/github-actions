import React from 'react'
import ReactDOM from 'react-dom/client'

import routes from './routes'

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet/>,
    children: routes,
  },
])

const App = () => (
  <>
    <h1>Login Component</h1>
  </>
)

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
