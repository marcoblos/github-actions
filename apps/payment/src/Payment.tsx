import React from 'react'
import { Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'

function Payment() {
  return (
    <div style={{backgroundColor: "lightskyblue"}}>
      <Outlet />
    </div>
  )
}

export default Payment
