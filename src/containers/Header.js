// import BeatBoxLogo from "../components/BeatBoxLogo";
import {ReactComponent as BeatBoxLogo} from '../assets/beatBox-header-logo.svg';
// import {ReactComponent as HeaderBackground} from '../assets/header-background.png';
import './Header.css'

const Header = ()=> {
  return(
    <div id="header">
      <BeatBoxLogo id="header-logo"/>
      <h2>Great Music. Unexpected Finds. Tailored For You</h2>
    </div>
  )
};

export default Header;