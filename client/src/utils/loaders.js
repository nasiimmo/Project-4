import axios from 'axios'

export async function getAllCars(){
  const res = await axios.get(`/api/cars/`)
  return res.data
}
export async function getSingleCar(id){
  const res = await axios.get(`/api/cars/${id}/`)
  console.log(res)
  return res.data
}
export async function getProfile(id){
  const res = await axios.get(`/api/auth/${id}`)
  return res.data
}