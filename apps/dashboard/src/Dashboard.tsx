import React from 'react'
import { Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div style={{backgroundColor: "aquamarine"}}>
      <Typography variant="h1" component="h1">
        Dashboard
      </Typography>
      <Outlet />
    </div>
  )
}

export default Dashboard
