import './Login.css'
import boombox from '../assets/boombox.png'

const Login = () => {
  return (
    <div className="login-area">
      <div id="log-content">
        <p>Already Registerd?</p>
        <button className="dark-btn">Get Premium</button>
      </div>
      <img id="boombox" src={boombox} alt="boombox" />
    </div>
  )
}

export default Login;
