import { useNavigate, Form, useActionData } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ImageUploadField from './ImageUploadField'

export default function CarUpdate() {
  const res = useActionData()
  const navigate = useNavigate()
  const [newImage, setNewImage] = useState()
  const [manufacturer, setManufacturer] = useState('')


  const handleManufacturerChange = (e) => {
    setManufacturer(e.target.value )
    console.log(e.target.value)
  }


  useEffect(() => {
    if (res?.status === 200) {
      console.log('UPDATED SUCCESSFULLY')
      navigate(`/carIndex/${res.data.id}`)
    }
    console.log(res)
  }, [res, navigate])

  return (
    <>
      <h1 className='show-case'>Edit your car</h1>
      <Form className='form' method='PATCH'>
        <input type='text' name='make' placeholder='Make...' />
        <input type='text' name='model' placeholder='Model...' />
        <input type='text' name='year' placeholder='Year...' />
        <input type='text' name='bio' placeholder='Description...' />
        <div className='dropdown-container'>
          <label htmlFor='manufacturer'>Region:</label>
          <select
            id='manufacturer'
            name='manufacturer'
            value={manufacturer} onChange={handleManufacturerChange}>
            <option value=''>Select a region</option>
            <option value={1}>Germany</option>
            <option value={2}>Italy</option>
            <option value={5}>United States</option>
            <option value={6}>Japan</option>
            <option value={7}>England</option>
            <option value={8}>France</option>
            
          </select>
          </div>
          <div className='create-image'>
            <ImageUploadField image={newImage} setImage={setNewImage} />
          </div>
          <div className='create-Btn-container'>
            <button className='EditBtn' type='submit'>confirm edit</button>
          </div>
          {res?.data?.message && <p className='danger bold mt-4'>{res.data.message}</p>}
      </Form >
    </>
  )
}
