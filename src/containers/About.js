import './About.css'
import {ReactComponent as LogoImg} from '../assets/logo.svg'

const About = () => {
  return (
    <div id="about-area">
      <h2>Abouts Us</h2>
      <p id="about-area-text" >Beat.Box offers customer profile tailored music playlists based on customers interests, tastes, likes and cultural touch-points. </p>
      <h2>Stay Connected</h2>
      <p id="links">Privacy | Terms & Conditions | About Ads | Customer Support</p>
      <LogoImg id="logo-sm" />
    </div>
  )
}

export default About;