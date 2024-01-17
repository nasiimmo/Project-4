import { Link, Form, useLoaderData } from "react-router-dom"
// import { useState } from "react"
// import { useNavigate } from "react-router-dom"
// import axios from 'axios'
// import { getToken } from "../utils/helpers/common"



import { getUserId } from '../utils/helpers/common'
export default function CarSingle() {
  const car = useLoaderData()
  // const navigate = useNavigate()
  console.log('car Data:', car)

  const { id, image, make, model, bio } = car

  // const [formData, setFormData] = useState({
  //   text: "",
  //   car: id

  // })

  // console.log(formData)
  // function handleChange(e) {
  //   setFormData({ ...formData, [e.target.name]: e.target.value })
  // }

  // async function createReview(e) {
  //   e.preventDefault()

  //   try {
  //     const res = await axios.post(`/api/reviews/`, formData, {
  //       validateStatus: () => true,
  //       headers: {
  //         Authorization: `Bearer ${getToken()}`,
  //       }
  //     })
  //     return res, navigate(``)

  //   } catch (error) {
  //     console.log(error)
  //   }

  // }

  return (
    <>
    <div className='container'>
        {/* <Row md={3} className='single-page'> */}
          <img src={image} className='img-single'/>
          <p className='description'>
          {make}&nbsp;
          {model}
          <br />
          
          {bio}
          </p>
          
          </div>
          <Link className='back-button' to="/carIndex">Back</Link>
          <div>
          {getUserId() === car.owner && (
            <div className='edit-delete'>
              <Link className='single-to-edit' to={`/carIndex/${id}/update`}>edit car</Link>
              <Form method='POST'>
                <ul>
                <li type='submit' className="delete">Delete</li>
                </ul>
              </Form>
            </div>
          )}
        {/* </Row> */}
        {/* <p>comments:
        {reviews.map(review => (
          <li key={review.id}>
            <p>{review.text}</p>
          </li>
        ))}</p>

      <form method='POST' onSubmit={createReview}>
        <label hidden htmlFor="text">Comment</label>
        <textarea name="text" placeholder="Let them know what you think" onChange={handleChange} value={formData.text} ></textarea>
        <button type='submit' className='btn btn-primary btn-sm' style={{ marginTop: '5px' }}  >Post comment</button>

      </form> */}
    </div>
    </>
  )
}