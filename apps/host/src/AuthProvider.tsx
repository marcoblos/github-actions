import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useEffect } from 'react'
import { Outlet, To, useLocation, useNavigate } from 'react-router-dom'
import useAuthStore from 'shared/store'

const queryClient = new QueryClient()

const AuthProvider = () => {
  const { isAuthenticated } = useAuthStore()!
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    if (isAuthenticated) {
      const from: To = {
        pathname: location.state?.from?.pathname || '/dashboard',
      }
      navigate(from, { replace: true })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated])

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet/>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default AuthProvider
