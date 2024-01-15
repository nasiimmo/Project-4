import { useNavigate, Form, useActionData } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ImageUploadField from './ImageUploadField'

export default function CarCreate() {
  const res = useActionData()
  const navigate = useNavigate()
  const [image, setImage] = useState('')


  useEffect(() => {
    if (res?.status === 201) {
      console.log('CREATED SUCCESSFULLY')
      navigate(`/carIndex/${res.data._id}`)
    }
  }, [res, navigate])

  return (
    <>
      <h1 className='show-case'>Show-case</h1>
      <Form className='form' method='POST'>
        <input type='text' name='make' placeholder='Make...' />
        <input type='text' name='model' placeholder='Model...' />
        <input type='text' name='year' placeholder='Year...' />
        <input type='text' name='manufacturer' placeholder='* Region' />
        <div className="create-image">
        <ImageUploadField image={image} setImage={setImage} />
        </div>
        <div className="create-Btn-container">
          <button className="createBtn" type="submit">Create your car</button>
        </div>
        {res?.data?.message && <p className='danger bold mt-4'>{res.data.message}</p>}
      </Form >
    </>
  )
}