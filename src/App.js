import React, { useState, useEffect } from 'react';
import ChoseCoin from './Components/ChoseCoin';
import LineChart from './Components/LineChart';
import './App.css'

import Button from 'react-bootstrap/Button';




function App() {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState('BTC');
  const [isLoaded, setIsLoaded] = useState(false);
  const [timeFrame, setTimeFrame] = useState();

  useEffect(() => {
    fetch(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=${selectedCurrency}&tsym=USD&limit=${timeFrame}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setData(result.Data.Data.map(d => d.close));
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [selectedCurrency, timeFrame]);

  const handleCurrencyChange = (newCurrency) => {
    setSelectedCurrency(newCurrency);
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
        <div className='text'>
          <p>Choose a period</p>
        </div>
        <div className='btn-group'>
          <Button onClick={() => handleTime(10)}>10 days</Button>{' '}
          <Button onClick={() => handleTime(180)}>6 months</Button>{' '}
          <Button onClick={() => handleTime(360)}>1 year</Button>{' '}
        </div>
        <ChoseCoin selectedCurrency={selectedCurrency} onCurrencyChange={handleCurrencyChange} />
        <LineChart data={data} currencyName={selectedCurrency} />
      </div>
    );
  }
}

export default App;