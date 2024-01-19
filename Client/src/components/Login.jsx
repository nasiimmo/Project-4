import { useEffect } from 'react'
import { Form, useActionData, useNavigate } from 'react-router-dom'
import { setToken } from '../utils/helpers/common'
import { Link } from 'react-router-dom'
export default function Login() {


  const res = useActionData()
  console.log(res)
  const navigate = useNavigate()

  useEffect(() => {
    // If login is successful, navigate to home page
    // Use optional chaining to check if res is defined and not throw error if not
    if (res?.status === 200) {
      setToken(res.data.access)
      console.log('LOG-IN SUCCESSFUL')
      navigate('/')
    }
  }, [res, navigate])

  return (
    <>
    <div className='image-container'>
    <div className='login-container'>
    <h1 className='log-in text-center bold display-3 mb-4'>Login</h1>
    <Form className='custom-form' method='POST'>
      <input type='username' name='username' className='form-input' placeholder='Username...' />
      <input type='password' name='password' className='form-input' placeholder='Password...' />
      <button className='btn btn-blueish form-btn' type='submit'>Login</button>
      {res && <p className='danger'>{res.data.message}</p>}
    <p className="text-center mt-3">
      <Link to="/auth/register" className="signup-link">Back to Register</Link>
    </p>
    </Form>
    </div>
    </div>
  </>
  )
}