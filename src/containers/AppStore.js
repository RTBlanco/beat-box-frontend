import './AppStore.css';
import { ReactComponent as BeetBox } from '../assets/beatBox-black-logo.svg'

const AppStore = () => {
  return (
    <div id="app-store">
      <div id="logo-text">
        <p>GET</p>
        <BeetBox />
      </div>
    </div>
  )
}

export default AppStore;