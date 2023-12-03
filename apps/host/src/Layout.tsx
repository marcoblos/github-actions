import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Grid, Paper, Typography, styled } from '@mui/material'
import { Outlet } from 'react-router-dom'
import LogoutButton from 'login/LogoutButton'
import MainMenu from './MainMenu'
import { useQuery } from '@tanstack/react-query'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const fetchUserDataReactQuery = async () => {
  console.log('Getting updated points - React Query')
  try {
    const result = await axios.get(`/users/1`, {
      baseURL: 'http://localhost:8000',
    })
    return result.data
  } catch (error) {
    console.error(error)
  }
  return null
}

function Layout() {
  const { data } = useQuery({
    queryKey: ['points'],
    queryFn: fetchUserDataReactQuery,
    refetchOnWindowFocus: false,
    initialData: { points: 0 },
  })

  const highScore = data?.points > 1000
  console.log('Is high scored user:', highScore)

  return (
    <Container style={{backgroundColor: "goldenrod"}}>
      <Typography variant="h2" component="h2">
        App
      </Typography>
      <Grid container spacing={1} rowSpacing={1} style={{backgroundColor: "lightgray"}}>
        <Grid container item spacing={1}>
          <Grid item xs={6}>
            <Item>
              High Score User: {highScore ? 'Yes' : 'No'}
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <LogoutButton/>
            </Item>
          </Grid>
        </Grid>
        <Grid container item spacing={1}>
          <Grid container item spacing={1}>
            <Grid item xs={2}>
              <MainMenu/>
            </Grid>
            <Grid item xs={10}>
              <Item>
                <Typography variant="h3" component="h3">
                  Main Content
                </Typography>
                <Outlet/>
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Layout
