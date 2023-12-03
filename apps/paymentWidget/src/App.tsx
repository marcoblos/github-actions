import React from 'react'
import ReactDOM from 'react-dom/client'

import { Container, Grid, Typography } from "@mui/material"
import PaymentWidget from "./PaymentWidget"

const App = () => (
  <Container style={{backgroundColor: "lightseagreen"}}>
    <Typography variant="h1" component="h1" align='center'>
      Payment Widget App
    </Typography>
    <Grid container justifyContent="center" >
      <Grid item xs={3}>
        <PaymentWidget/>
      </Grid>
    </Grid>
  </Container>
)

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
