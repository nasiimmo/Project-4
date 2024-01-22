import axios from 'axios'
import { formToObj } from '../helpers/common'

// Action to post register data to database
export async function registerUser(request) {
  // Post object data to database
  const data = await formToObj(request)
  return await axios.post('/api/auth/register/', data, {
    // Make sure error not thrown on screen
    validateStatus: () => true
  })
}

// Action to post login data to database
export async function loginUser(request) {
  const data = await formToObj(request)
  return await axios.post('/api/auth/login/', data, {
    validateStatus: () => true
  })
}