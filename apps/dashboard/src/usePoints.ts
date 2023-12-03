import { useQuery } from "@tanstack/react-query"
import axios from 'axios'

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

const usePointsEffect = () => {
  const { data } = useQuery({
    queryKey: ['points'],
    queryFn: fetchUserDataReactQuery,
    refetchOnWindowFocus: false,
    initialData: { points: 0 },
  })
  return data
}

export default usePointsEffect
