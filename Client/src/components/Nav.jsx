
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <>
      <div className='navbar'>
        <div className="header-title">
          <h1><Link to='/'>FastLaneFleet</Link></h1>
          <div className='Nav-links'>
          <ul className='nav nav-underline navbar-link-danger g-link-danger'>
                <li className='nav-item'>
                  <Link to='/' className='nav-link' >Home</Link>&nbsp;
                </li>
                <li className='nav-item'>
                  <Link to='/carIndex' className='nav-link' >Car Index</Link>&nbsp;
                </li>
                <li className='nav-item'>
                  <Link to='/carIndex/create' className='nav-link' >Create Car</Link>&nbsp;
                </li>
                <li className='nav-item'>
                  <Link to='/profile' className='nav-link' >profile</Link>&nbsp;
                </li>
              </ul>
              </div>
        </div>
        </div>
    </>
  )
}