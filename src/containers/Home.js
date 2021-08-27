import './Home.css'
import dude from '../assets/Afropunk.png'
const Home = () => {
  return (
    <div id="home">
      <img src={dude} alt="some guy chilling" />
      <div id="content">
        <h2>Looking to start your music exploration journey?</h2>
        <button className="lime-btn">Get Started</button>
      </div>
      <div id="description">
        When was the last time you fell in love with a new artist or song? Beat.box helps you find artists you love by creating tailored playlists just for you.
      </div>
    </div>
  )
}

export default Home;