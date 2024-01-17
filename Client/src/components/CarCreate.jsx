import { useNavigate, Form, useActionData } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ImageUploadField from './ImageUploadField'

export default function CarCreate() {
  const res = useActionData()
  const navigate = useNavigate()
  const [image, setImage] = useState('')
  const [manufacturer, setManufacturer] = useState('')


  const handleManufacturerChange = (e) => {
    setManufacturer(e.target.value)
  }


  useEffect(() => {
    if (res?.status === 201) {
      console.log('CREATED SUCCESSFULLY')
      navigate(`/carIndex/${res.data.id}`)
    }
  }, [res, navigate])

  return (
    <>
  <h1 className='show-case'>Show-case</h1>
  <Form className='form' method='POST'>
    <div className='input-text'>
      <input type='text' name='make' placeholder='Make...' />
    </div>
    <div className='input-text'>
      <input type='text' name='model' placeholder='Model...' />
    </div>
    <div className='input-text'>
      <input type='text' name='year' placeholder='Year...' />
    </div>
    <div className='input-text'>
      <textarea className='form-control' name='bio' placeholder='Description about your car!!'></textarea>
    </div>
    <div className='input-text'>
      <label htmlFor='manufacturer' className='form-label'>Region:</label>
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
    <div className='input-text'>
      <div className='create-image'>
        <ImageUploadField image={image} setImage={setImage} />
      </div>
    </div>
    <div className='input-text'>
      <div className='create-Btn-container'>
        <button className='createBtn' type='submit'>Create your car</button>
      </div>
    </div>
    {res?.data?.message && <p className='danger bold mt-4'>{res.data.message}</p>}
  </Form>
</>

  )
}