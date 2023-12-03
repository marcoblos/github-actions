import React from 'react'
import { Container, Grid, Typography } from '@mui/material'
import LoginButton from './LoginButton'

function Login() {
  return (
    <Container>
      <Grid style={{backgroundColor: "aquamarine"}}>
        <Typography variant="h1" component="h1">
          <LoginButton/>
        </Typography>
      </Grid>
    </Container>
  )
}

export default Login
