import { useNavigate, Form, useActionData } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ImageUploadField from './ImageUploadField'

export default function CarUpdate() {
  const res = useActionData()
  const navigate = useNavigate()
  const [image, setImage] = useState('')
  const [manufacturer, setManufacturer] = useState('')


  const handleManufacturerChange = (e) => {
    setManufacturer({ id: e.target.value })
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
            <ImageUploadField image={image} setImage={setImage} />
          </div>
          <div className='create-Btn-container'>
            <button className='EditBtn' type='submit'>confirm edit</button>
          </div>
          {res?.data?.message && <p className='danger bold mt-4'>{res.data.message}</p>}
      </Form >
    </>
  )
}
// import { useEffect, useState } from 'react'
// import { Form, useActionData, useLoaderData, useNavigate } from 'react-router-dom'
// import ImageUploadField from './ImageUploadField'

// export default function CarUpdate() {
//   const car = useLoaderData()

//   const navigate = useNavigate()
//   const res = useActionData()
//   const id = { 
//     Germany: 1, Italy: 2
//   }

//   const [image, setImage] = useState(car.image)
//   // const [manufacturer, setManufacturer] = useState({})

//   const handleManufacturerChange = (e) => {
//     setFormData({ ...formData, [e.target.value]: e.target.value})
//   }
//   const [formData, setFormData] = useState({
//     manufacturer: id,
//     image: image
//   })

  

//   useEffect(() => {
//     if (res?.status === 201) {
//       console.log('UPDATED SUCCESSFULLY')
//       navigate(`/carIndex/${res.data.id}`)
//     }
//     console.log(res)
//   }, [res, navigate])

//   return (
//     <>
//       <h1 className='text-center bold display-3 mb-4'>Update car</h1>
//       <Form className='form' method='PATCH'>
//         <label hidden htmlFor='make'>Make</label>
//         <input type='text' name='make' placeholder='Make' defaultValue={car.make} />
//         <label hidden htmlFor='model'>Model</label>
//         <input type='text' name='model' placeholder='Model' defaultValue={car.model} />
//         <label hidden htmlFor='year'>Year</label>
//         <input type='text' name='year' placeholder='Year' defaultValue={car.year} />
//         <div className='dropdown-container'>
//           <label htmlFor='manufacturer'>Region:</label>
//           <select
//             id='manufacturer'
//             name='manufacturer'
//             value={formData.manufacturer} onChange={handleManufacturerChange}>
//             <option value={''}>Select a region</option>
//             <option value={1}>Germany</option>
//             <option value={2}>Italy</option>

//           </select>
//         </div>
//         <div className='create-image'>
//           <ImageUploadField image={image} setImage={setImage} />
//         </div>
//         <button className='btn btn-pink' type='submit' name='intent' value='update'>Update</button>
//         {res?.data?.message && <p className='danger bold mt-4'>{res.data.message}</p>}
//       </Form>
//     </>
//   )
// }