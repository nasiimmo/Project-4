
import { useEffect, useState } from 'react'
import { Form, useActionData, useLoaderData, useNavigate } from 'react-router-dom'
import ImageUploadField from './ImageUploadField'

export default function CarUpdate(){
  const car = useLoaderData()

  const res = useActionData()
  const navigate = useNavigate()


  const [image, setImage] = useState(car.image)
  const [manufacturer, setManufacturer] = useState('')

  const handleManufacturerChange = (e) => {
    setManufacturer(e.target.value);
  }
  useEffect(() => {
    console.log(res)
    if (res?.status === 201) {
      console.log('CREATED SUCCESSFULLY')
      navigate(`/carIndex/${res.data._id}`)
    }
  }, [res, navigate])

  return (
    <>
    <h1 className="text-center bold display-3 mb-4">Update car</h1>
    <Form className='form' method="PATCH">
      <label hidden htmlFor="make">Make</label>
      <input type="text" name="make" placeholder='Make' defaultValue={car.make} />
      <label hidden htmlFor="model">Model</label>
      <input type="text" name="model" placeholder='Model' defaultValue={car.model} />
      <label hidden htmlFor="year">Year</label>
      <input type="text" name="year" placeholder='Year' defaultValue={car.year} />
      <div className="dropdown-container">
        <label htmlFor="manufacturer">Region:</label>
        <select
          id="manufacturer"
          name="manufacturer"
          value={manufacturer} onChange={handleManufacturerChange}>
          <option value="">Select a region</option>
          <option value={1}>Germany</option>
          <option value={2}>Italy</option>
          
        </select>
        </div>
        <div className="create-image">
            <ImageUploadField image={image} setImage={setImage} />
          </div>
      <button className="btn btn-pink" type="submit" name='intent' value='update'>Update</button>
      {res?.data?.message && <p className='danger bold mt-4'>{res.data.message}</p>}
    </Form>
    </>
  )
}