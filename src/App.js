import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';

function App() {
  return (
    <div className="container">
      <Navbar />
      {/* <Hero /> */}
      <Card />
    </div>
  );
}

export default App;
