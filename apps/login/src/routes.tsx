import React from 'react'

const Login = React.lazy(() => import('./Login'))

const routes = [
  {
    path: '/login',
    element: (
      <React.Suspense fallback={<div />}>
        <Login />
      </React.Suspense>
    ),
  },
]

export default routes
