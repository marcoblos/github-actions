import React from 'react'

const Payment = React.lazy(() => import('./Payment'))
const PaymentInternalOne = React.lazy(() => import('./PaymentInternalOne'))
const PaymentInternalTwo = React.lazy(() => import('./PaymentInternalTwo'))

const routes = [
  {
    path: '/payment',
    element: (
      <React.Suspense fallback={<div />}>
        <Payment />
      </React.Suspense>
    ),
    children: [
      {
        index: true,
        element: <PaymentInternalOne/>,
      },
      {
        path: "second",
        element: <PaymentInternalTwo/>,
      },
    ],
  },
]

export default routes
