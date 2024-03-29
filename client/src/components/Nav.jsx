
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { getUserId } from '../utils/helpers/common'
import { removeToken } from '../utils/helpers/common'
export default function Nav() {

  const navigate = useNavigate()
  console.log(getUserId())
  function logOut() {
    removeToken()
    navigate('/auth/login/')
  }
  return (
    <>
      <div className='navbar'>
        <div className="header-title">
          <h1 className='logo'><Link to='/' style={{ textDecoration: 'none', color: 'white' }}>FastLaneFleet</Link></h1>
        </div>
        <div className='Nav-links'>
          <ul className='nav nav-underline'>
            <li className='nav-item'>
              <Link to='/' className='nav-link' style={{ color: 'white' }}>Home</Link>&nbsp;
            </li>
            {getUserId() ?
              <>
                <li className='nav-item'>
                  <Link to='/carIndex' className='nav-link' style={{ color: 'white' }}>Browse</Link>&nbsp;
                </li>
                <li className='nav-item'>
                  <Link to='/cars/create' className='nav-link' style={{ color: 'white' }}>Showcase</Link>&nbsp;
                </li>
                <li className='nav-item'>
                <span className='nav-link' type='submit' onClick={logOut}>Log out</span>
                </li>
              </>
              :
              <>
                <li className='nav-item'>
                  <Link to='/carIndex' className='nav-link' style={{ color: 'white' }}>Browse</Link>&nbsp;
                </li>
                <li className='nav-item'>
                  <Link to='/auth/register/' className='nav-link' style={{ color: 'white' }}>Profile</Link>&nbsp;
                </li>
              </>
            }
          </ul>
        </div>
      </div>
    </>
  )
}