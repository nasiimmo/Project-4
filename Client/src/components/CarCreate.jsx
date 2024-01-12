import { Form } from 'react-router-dom'


export default function CarCreate() {
  return (
    <>
      <h1>Show-case</h1>
      <Form className='form' method='POST'>
        <input type='text' name='Make' placeholder='Make...' />
        <input type='text' name='model' placeholder='Model...' />
        <input type='text' name='year' placeholder='Year...' />
        <input type='text' name='model' placeholder='Model...' />
        <input type='text' name='region' placeholder='* Region' />
        {/* <div className="create-image">
            <ImageUploadField image={image} setImage={setImage} />
            </div> */}
            <div className="create-Btn-container">
            <button className="createBtn" type="submit">Create your car</button>
          </div>
    </Form >
    </>
  )
}