import './App.css';
import Header from './containers/Header';
import Navbar from './containers/Navbar';
import Register from './containers/Register';
import Login from './containers/Login';
import AppStore from './containers/AppStore';
import About from './containers/About';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Register />
      <Login />
      <AppStore />
      <About />
    </>
  );
}

export default App;
