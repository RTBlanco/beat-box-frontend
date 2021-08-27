import './Register.css'
import dude from '../assets/Afropunk.png'
const Register = () => {
  return (
    <div id="register-area">
      <img id='back-img' src={dude} alt="some guy chilling" />
      <div id="reg-content">
        <h2>Looking to start your music exploration journey?</h2>
        <button className="light-btn">Get Started</button>
      </div>
      <div id="description">
        When was the last time you fell in love with a new artist or song? Beat.box helps you find artists you love by creating tailored playlists just for you.
      </div>
    </div>
  )
}

export default Register;