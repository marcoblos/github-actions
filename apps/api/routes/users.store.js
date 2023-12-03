const storage = new Map([
  [
      1,
      {
        id    : 1      ,
        name  : 'Marco',
        points: 0      ,
      }
  ]
])

const getAll = () => {
  return Array.from(storage.values())
}

const getUserById = ({ id }) => {
  const intId = parseInt(id)
  console.log('store', intId)
  return storage.get(intId)
}

const addPointsById = ({ id, points }) => {
  const user = getUserById({ id })
  if (!user) {
    return
  }

  user.points += points
  return getUserById({ id })
}

module.exports = {
  getAll       ,
  getUserById  ,
  addPointsById,
}
