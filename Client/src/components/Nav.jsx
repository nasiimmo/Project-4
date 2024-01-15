
import { Link } from 'react-router-dom'

export default function Nav() {


  return (
    <>
      <div className='navbar'>
        <div className="header-title">
          <h1><Link to='/'>FastLaneFleet</Link></h1>
          </div>
          <div className='Nav-links'>
            <ul className='nav nav-underline navbar-link-danger g-link-danger'>
              <li className='nav-item'>
                <Link to='/' className='nav-link' >Home</Link>&nbsp;
              </li>
              <li className='nav-item'>
                <Link to='/carIndex' className='nav-link' >Browse</Link>&nbsp;
              </li>
              <li className='nav-item'>
                <Link to='/cars/create' className='nav-link' >Showcase</Link>&nbsp;
              </li>
              <li className='nav-item'>
                <Link to='/auth/register' className='nav-link' >Register</Link>&nbsp;
              </li>
              
            </ul>
          </div>
      </div>
    </>
  )
}