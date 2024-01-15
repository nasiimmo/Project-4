import { useEffect } from 'react'
import { Form, useActionData, useNavigate } from 'react-router-dom'
import { setToken } from '../utils/helpers/common'

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
    <h1 className='text-center bold display-3 mb-4'>Login</h1>
    <Form className='form' method='POST'>
      <input type='username' name='username' placeholder='username...' />
      <input type='password' name='password' placeholder='Password...' />
      <button className='btn btn-grey' type='submit'>Login</button>
      {/* Below will return a message to user if username taken, etc. Need to set this up. */}
      {res && <p className='danger'>{res.data.message}</p>}
    </Form>
    </>
  )
}