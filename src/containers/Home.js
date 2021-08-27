import './Home.css'
import dude from '../assets/Afropunk.png'
const Home = () => {
  return (
    <div id="home">
      <h2>Looking to start your music exploration journey?</h2>
      <button className="lime-btn">Get Started</button>
      <img src={dude} alt="some guy chilling" />

    </div>
  )
}

export default Home;