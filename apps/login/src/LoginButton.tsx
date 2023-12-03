import React from 'react'
import { Button } from '@mui/material'
import useAuthStore from 'shared/store'

const LoginButton = () => {
  const { setIsAuthenticated } = useAuthStore()
  return (
    <>
      <Button onClick={setIsAuthenticated}>Login</Button>
    </>
  )
}

export default LoginButton
