import { useEffect } from 'react'
import { Form, useActionData, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default function Register() {
  const res = useActionData()
  const navigate = useNavigate()

  useEffect(() => {
    if (res?.status === 201) {
      console.log('REGISTRATION SUCCESFUL')
      navigate('/auth/login')
    }
  }, [res, navigate])



  return (
    <>
      <h1 className="register text-center">Register</h1>
      <Form className='custom-form' method="POST">
        <input type="text" name="username" className='form-input' placeholder='Username...' />
        <input type="email" name="email" className='form-input' placeholder='Email...' />
        <input type="password" name="password" className='form-input' placeholder='Password...' />
        <input type="password" name="password_confirmation" className='form-input' placeholder='Confirm password...' />
        <button className='btn btn-pink form-btn' type="submit">Register</button>
        {res && <p className='danger'>{res.data.message}</p>}
        <p className="text-center mt-3">
          If you already have an account, <Link to="/auth/login" className="signup-link">sign up</Link>
        </p>
      </Form>
    </>
  )

}