import React from 'react'

const Dashboard = React.lazy(() => import('./Dashboard'))
const DashboardInternalOne = React.lazy(() => import('./DashboardInternalOne'))
const DashboardInternalTwo = React.lazy(() => import('./DashboardInternalTwo'))

const routes = [
  {
    path: '/dashboard',
    element: (
      <React.Suspense fallback={<div />}>
        <Dashboard />
      </React.Suspense>
    ),
    children: [
      {
        index: true,
        element: <DashboardInternalOne/>,
      },
      {
        path: "second",
        element: <DashboardInternalTwo/>,
      },
    ],
  },
]

export default routes
