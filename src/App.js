import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';
import cardData from './Data/cardData';

function App() {
  console.log(cardData);
  const getCardData = cardData.map(data => {
    return <Card 
              key={data.id}
              data={data}
            />
  })
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="card--list">
        {getCardData}
      </section>
    </div>
  );
}

export default App;
