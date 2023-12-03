import React from 'react'
import { Button as MaterialUIButton } from '@mui/material'

interface Props {
  label: string,
  onClick: () => void,
}

function Button({ onClick, label } : Props) {
  return (
    <MaterialUIButton onClick={onClick}>
      {label}
    </MaterialUIButton>
  )
}

export default Button
