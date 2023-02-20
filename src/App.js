import React, { useState, useEffect } from 'react';
import ChoseCoin from './Components/ChoseCoin';
import LineChart from './Components/LineChart';
import './App.css'
import { Button } from 'react-bootstrap';


function App() {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [timeFrame, setTimeFrame] = useState(180);
  const [selectedSymbol, setSelectedSymbol] = useState('BTC');

  useEffect(() => {
    fetch(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=${selectedSymbol}&tsym=USD&limit=${timeFrame}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result.Data.Data.map(d => d.close));
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [selectedSymbol, timeFrame]);

  const handleCurrencyChange = (newCurrency) => {
    setSelectedSymbol(newCurrency);
  };

  const handleTime = (time) => {
    if (time === 10) {
      setTimeFrame(10);
    } else if (time === 180) {
      setTimeFrame(180);
    } else {
      setTimeFrame(360);
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h2 style={{ textAlign: 'center' }}>Chart of a cryptocurrency</h2>
        <p>Choose a period:</p>
        <div className='btn-group'>
          <Button variant="secondary" onClick={() => handleTime(10)}>10 days</Button>
          <Button variant="secondary" onClick={() => handleTime(180)}>6 months</Button>
          <Button variant="secondary" onClick={() => handleTime(360)}>1 year</Button>
        </div>
        <ChoseCoin selectedSymbol={selectedSymbol} onCurrencyChange={handleCurrencyChange} />
        <LineChart data={data} currencyName={selectedSymbol} />
      </div>
    );
  }
}

export default App;