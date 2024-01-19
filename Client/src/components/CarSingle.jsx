import { Link, Form, useLoaderData } from "react-router-dom"



import { getUserId } from '../utils/helpers/common'
export default function CarSingle() {
  const car = useLoaderData()
  // const navigate = useNavigate()
  console.log('car Data:', car)

  const { id, image, make, model, bio } = car

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
                
                <button type='submit' className="delete">Delete</button>
                
              </Form>
            </div>
          )}
    </div>
    </>
  )
}