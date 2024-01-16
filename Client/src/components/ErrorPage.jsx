import { useRouteError, Link } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)
  console.log('SPECIFIC ERROR LAYOUTS ->', error.status)
  return (
    <>
      <div id='error-page'>
        <div className='error-message'>
          <h1 className='error-text'>oops, something's gone wrong</h1>
        </div>
        {/* <h1><i>{error.statusText || error.message}</i></h1> */}
        <img className="error-gif" src="" />
        <h2 className='h2-error'>Not to worry why dont you try <br /> 
        this helpful link</h2>
        <Link to={`/carIndex`} className="backBtn">Homepage</Link>
      </div>
    </>
  )
}