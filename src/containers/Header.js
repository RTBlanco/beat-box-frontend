// import BeatBoxLogo from "../components/BeatBoxLogo";
import {ReactComponent as BeatBoxLogo} from '../svgs/beatBox-header-logo.svg';
import {ReactComponent as HeaderBackground} from '../svgs/header-background.svg';
import './Header.css'

const Header = ()=> {
  const headerStyle = {
    backgroundImage :`url(${HeaderBackground})`
  }
  return(
    <div id="header" styles={headerStyle}>
      <BeatBoxLogo />
      <h2>Great Music. Unexpected Finds. Tailored For You</h2>
    </div>
  )
};

export default Header;