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
  <Form className='form' method='PATCH'>
  <h1 className='update-car'>Edit your car</h1>
    <div className='mb-3'>
      <input type='text' name='make' className='form-control' placeholder='Make...' />
    </div>
    <div className='mb-3'>
      <input type='text' name='model' className='form-control' placeholder='Model...' />
    </div>
    <div className='mb-3'>
      <input type='text' name='year' className='form-control' placeholder='Year...' />
    </div>
    <div className='mb-3'>
      <input type='text' name='bio' className='form-control' placeholder='Description...' />
    </div>
    <div className='mb-3'>
    <div className='dropdown-container select-container'>
      <label htmlFor='manufacturer' className='form-label'>Region:</label>
      <select
        id='manufacturer'
        name='manufacturer'
        value={manufacturer} onChange={handleManufacturerChange}
        className='form-control'
      >
        <option value=''>Select a region</option>
        <option value={1}>Germany</option>
        <option value={2}>Italy</option>
        <option value={5}>United States</option>
        <option value={6}>Japan</option>
        <option value={7}>England</option>
        <option value={8}>France</option>
      </select>
      </div>
    </div>
    <div className='input-text'>
      <div className='create-image'>
        <ImageUploadField image={newImage} setImage={setNewImage} />
      </div>
    </div>
    <div className='input-text'>
      <div className='create-Btn-container'>
        <button className='EditBtn' type='submit'>Confirm Edit</button>
      </div>
    </div>
    {res?.data?.message && <p className='danger bold mt-4'>{res.data.message}</p>}
  </Form>
</>

  )
}
