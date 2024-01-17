import axios from 'axios'
import { formToObj, getToken } from '../helpers/common'
import { redirect } from 'react-router-dom'


export async function createCar(request) {
  const token = getToken()
  console.log('Token:', token)

  const data = await formToObj(request)
  console.log('data', data)
  return await axios.post('/api/cars/', data, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}

export async function updatedCar(request, id){
    const data = await formToObj(request)
    return await axios.patch(`/api/cars/${id}/`, data, {
        validateStatus: () => true,
        headers: {
            Authorization: `Bearer ${getToken()}`
          }
        })
      }
      
      export async function deleteCar(id){
          await axios.delete(`/api/cars/${id}/`, {
              validateStatus: () => true,
              headers: {
                  Authorization: `Bearer ${getToken()}`
                }
              })
              return redirect('/carIndex')
            }
            

