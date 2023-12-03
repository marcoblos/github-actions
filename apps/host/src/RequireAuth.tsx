import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import useAuthStore from 'shared/store'
import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const RequireAuth = ({ children } : Props) : ReactNode => {
  const { isAuthenticated } = useAuthStore()

  if (!isAuthenticated) {
    const location = useLocation()
    return <Navigate to='/login' state={{ from: location }} replace />
  }

  return children
}

export default RequireAuth
