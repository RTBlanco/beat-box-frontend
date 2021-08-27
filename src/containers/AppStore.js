import './AppStore.css';
import { ReactComponent as BeetBox } from '../assets/beatBox-black-logo.svg'
import apps from '../assets/apps.png'

const AppStore = () => {
  return (
    <div id="app-store">
      <div id="logo-text">
        <p>GET</p>
        <BeetBox />
      </div>
      <img src={apps} alt="apps" />
    </div>
  )
}

export default AppStore;