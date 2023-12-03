import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import routes from './routes'

const queryClient = new QueryClient()

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
  <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
)

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
