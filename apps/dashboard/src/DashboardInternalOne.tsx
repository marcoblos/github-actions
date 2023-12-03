import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import Button from './Button'
import axios from 'axios'
import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import usePoints from './usePoints'
import usePointsEffect from './usePoints'

const addPointsToUser = async ({ points }) => {
  try {
    const result = await axios.put(
      `/users/1`,
      {
        points,
      },
      {
        baseURL: 'http://localhost:8000',
      },
    )
    return result?.data
  } catch (error) {
    console.error(error)
  }
  return null
}

const DashboardInternalOne = () => {
  const queryClient = useQueryClient()
  const data = usePointsEffect()

  const mutationPoints = useMutation({
    mutationFn: addPointsToUser,
    onSuccess: (data) => {
      console.log('Points mutation')
      /**
       * Once the invalidation is triggered, react-query re-fetches
       * the query responsible for fetching "points".
       */
      queryClient.invalidateQueries({ queryKey: ['points'] })
      /**
       * If you have all the information and want to optimistically
       * update the cache, you can use the following, but use it at
       * your own risk, it can be dangerous to just update this info
       * and cause troubles to other parts of the application consuming
       * this same information "points".
       *
       * queryClient.setQueryData(['points'], data)
       */
    },
  })

  return (
    <>
      <Typography variant="h2" component="h2">
        Dashboard Internal One
      </Typography>
      <Typography variant="body1" component="p">
        User total points: {data?.points}
      </Typography>
      <Button onClick={() => mutationPoints.mutate({ points: 123 })} label={"Add Points"}></Button>
      <Button onClick={() => mutationPoints.mutate({ points: -123 })} label={"Subtract Points"}></Button>
    </>
  )
}

export default DashboardInternalOne
