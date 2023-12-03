import React from 'react'
import { Outlet, RouteObject } from 'react-router-dom'

import dashboardRoutes from 'dashboard/routes'
import loginRoutes from 'login/routes'
import paymentRoutes from 'payment/routes'

import AuthProvider from './AuthProvider'
import Layout from './Layout'
import RequireAuth from './RequireAuth'

interface Route {
  path: string,
  element: React.ReactNode,
  index?: false,
  children?: Route[],
}

const protectedRoutes: Route[] = [
  ...dashboardRoutes,
  ...paymentRoutes,
]

const mapRoutesToRouteObject = (routes: Route[] | undefined) => {
  if (!routes) {
    return routes
  }
  return routes.map((r: Route): RouteObject => {
    const route: RouteObject = {
      path: r.path,
      element: r.element,
      index: !!r.index,
      children: mapRoutesToRouteObject(r.children),
    }
    return route
  })
}

const protectedRoutesObject: RouteObject = {
  path: '/',
  element: (
    <RequireAuth>
      <Layout/>
    </RequireAuth>
  ),
  children: mapRoutesToRouteObject(protectedRoutes),
}

const loginRoutesObject: RouteObject = {
  path: '/',
  element: (
    <>
      <Outlet/>
    </>
  ),
  children: mapRoutesToRouteObject(loginRoutes),
}

const routes: RouteObject[] = [{
  element: <AuthProvider/>,
  children: [
    protectedRoutesObject,
    loginRoutesObject,
  ],
}]

export default routes
