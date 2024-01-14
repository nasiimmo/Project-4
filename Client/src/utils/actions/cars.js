import axios from 'axios'
import { formToObj, getToken } from '../helpers/common'
import { redirect } from 'react-router-dom'

export async function createCar(request) {
  const data = await formToObj(request)
  // setTimeout(console.log(data), 5000)
  return await axios.post('/api/cars/', data, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}

export async function updateOrDeleteCar(request, id) {

  let data = await formToObj(request)


  if (data.intent === 'update') {
    return await axios.patch(`/api/cars/${id}`, data, {
      validateStatus: () => true,
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  }
  if (data.intent === 'delete') {
    await axios.delete(`/api/cars/${id}`, {
      validateStatus: () => true,
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
    return redirect('/carIndex')
  }
}








