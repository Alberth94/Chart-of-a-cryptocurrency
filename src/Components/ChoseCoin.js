import React from 'react';
import { Form } from 'react-bootstrap';
import './ChoseCoin.css';

function ChoseCoin(props) {
  const symbols = ['BTC', 'ETH', 'BNB', 'XRP', 'ADA', 'MATIC', 'DOT', 'LTC', 'SOL', 'UNI'];
  
  const handleCurrencyChange = (event) => {
    props.onCurrencyChange(event.target.value);
  }

  return (
    <div>
    <h5 style={{ marginLeft: '1000px', marginTop: '120px' }}>Choose a coin</h5>
    <div className='ChoseCoin'>
      <Form.Select value={props.selectedSymbol} onChange={handleCurrencyChange}>
        {symbols.map((symbol) => (
          <option key={symbol} value={symbol}>{symbol}</option>
        ))}
      </Form.Select>
    </div>
    </div>
  );
}

export default ChoseCoin;