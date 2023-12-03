import React from 'react'
import { Grid, Typography } from '@mui/material'
const PaymentWidget = React.lazy(() => import('paymentWidget/PaymentWidget'))

const PaymentInternalTwo = () => (
  <>
    <Typography variant="h2" component="h2" align='center'>
      Payment Internal Two
    </Typography>
    <Grid container justifyContent="center">
      <Grid item xs={4}>
        <PaymentWidget/>
      </Grid>
    </Grid>
  </>
)

export default PaymentInternalTwo
