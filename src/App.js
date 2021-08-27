import './App.css';
import Header from './containers/Header';
import Navbar from './containers/Navbar';
import Register from './containers/Register';
import Login from './containers/Login';
import AppStore from './containers/AppStore';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Register />
      <Login />
      <AppStore />
    </>
  );
}

export default App;
