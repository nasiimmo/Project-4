import { Link, Form, useLoaderData } from "react-router-dom"


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import { getUserId } from '../utils/helpers/common'
export default function CarSingle() {
  const car = useLoaderData()
  console.log('car Data:', car)

const { id, image, make, model, owner } = car

return (
<Container fluid className='car-single'>
  <Row>
    <Col md={6} className='single-detail text-center'>
      {getUserId() === car.owner && (
        <div>
        </div>
      )}
      <h1 className='username'>{owner}</h1>
      <img src={image} />
      <p>{make}</p>
      <p>{model}</p>
      
      <Link className='btn btn-blue' to="/carIndex">Back</Link>
    </Col>
  </Row>
          <Link classNme='single-to-edit' to={`/carIndex/${id}/update`}>edit car</Link>
          <Form method='POST'>
            <button type='submit'>Delete</button>
          </Form>
</Container>
  )
  
}