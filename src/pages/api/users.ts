import { NextApiRequest, NextApiResponse } from 'next'

// JWT (Storage ou Cookies)
// Next Auth (Social)
// Cognito, Auth0

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Emerson' },
    { id: 2, name: 'rafa' },
    { id: 3, name: 'Dani' },
  ]

  return response.json(users)
}