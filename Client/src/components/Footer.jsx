import { FaInstagram, FaGithub } from "react-icons/fa"


import { TiSocialFacebook } from "react-icons/ti"
import { FaXTwitter } from "react-icons/fa6"

export default function Footer(){
  return (
    <footer>
      <h1 className='footer-h1'>FastLaneFleet</h1>
      <div className="github">
      <FaGithub /> &copy; Made by  
        and <a href='https://github.com/nasiimmo' className="github-link"> Nasiim </a>
        {new Date().getFullYear()}
      </div>
      <div className='socials'>
      <a href='https://www.instagram.com' className='footer-icon'><FaInstagram /></a>
      <a href='https://www.facebook.com' className='footer-icon'><TiSocialFacebook /></a>
      <a href='https://twitter.com' className='footer-icon'><FaXTwitter /></a>
      </div>
    </footer>
  )
}