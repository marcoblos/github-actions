import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'

import routes from './routes'

const router = createBrowserRouter(routes)

const App = () => (
  <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
)

ReactDOM.createRoot(document.getElementById('app')!).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)
