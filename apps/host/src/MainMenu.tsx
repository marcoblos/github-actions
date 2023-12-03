import React from 'react'
import { MenuItem, MenuList } from '@mui/material'
import { Link } from 'react-router-dom'

function MainMenu() {
  return (
    <MenuList>
      <MenuItem>
        <Link to="/dashboard">Dashboard</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/dashboard/second">Dashboard Intenal Two</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/payment">Payment</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/payment/second">Payment Intenal Two</Link>
      </MenuItem>
    </MenuList>
  )
}

export default MainMenu
