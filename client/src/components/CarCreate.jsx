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
    <div className='showcase-section'>
    <div className='text-box'>
    Share the spotlight with your car, boasting about its amazing performance and unique features.
    Take a moment to reveal where it was made and take pride in its origins.
    Let&apos;s have some fun and see who can claim the title of making the best car. 
    Show off your wheels, appreciate the craftsmanship, and let the friendly competition begin!
    </div>
  <Form className='form' method='POST'>
  <h1 className='show-case text-center'>Show-case</h1>
    <div className='input-text'>
      <input type='text' name='make' placeholder='Enter your make...' />
    </div>
    <div className='input-text'>
      <input type='text' name='model' placeholder='Enter your Model...' />
    </div>
    <div className='input-text'>
      <input type='text' name='year' placeholder='Enter the Year of your car...' />
    </div>
    <div className='input-text'>
      <textarea className='form-control' name='bio' placeholder='Description about your car!!'></textarea>
    </div>
    <div className='input-text'>
    <div className='dropdown-container select-container'>
      <label htmlFor='manufacturer' className='form-label'>Region:</label>
      <select
        id='manufacturer'
        name='manufacturer'
        value={manufacturer} onChange={handleManufacturerChange}>
        <option value='' className='region'>Select a region</option>
        <option value={1}>Germany</option>
        <option value={2}>Italy</option>
        <option value={3}>United States</option>
        <option value={4}>Japan</option>
        <option value={5}>England</option>
        <option value={6}>France</option>
      </select>
      </div>
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
  </div>
</>
  )
}