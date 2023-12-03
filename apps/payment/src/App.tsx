import React from 'react'
import ReactDOM from 'react-dom/client'

import routes from './routes'

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from 'react-router-dom'
import { Container, Grid, Typography } from '@mui/material'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Container style={{backgroundColor: "lightseagreen"}}>
        <Typography variant="h1" component="h1" align='center'>
          Payment App
        </Typography>
        <Grid container>
          <Grid item xs={12}>
            {/* <PaymentWidget/> */}
            <Outlet/>
          </Grid>
        </Grid>
      </Container>
    ),
    children: routes,
  },
])

const App = () => (
  <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
)

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
