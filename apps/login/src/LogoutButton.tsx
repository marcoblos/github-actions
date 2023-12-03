import React from 'react'
import { Button } from "@mui/material"
import useAuthStore from "shared/store"

const LogoutButton = () => {
  const { setIsNotAuthenticated } = useAuthStore()
  return <Button onClick={setIsNotAuthenticated}>Logout</Button>
}

export default LogoutButton
