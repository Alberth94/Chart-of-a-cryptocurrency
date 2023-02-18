import React from 'react';
import './ChoseCoin.css'

function ChoseCoin(props) {
  const handleCurrencyChange = (event) => {
    
    props.onCurrencyChange(event.target.value);
  }

  return (
    <div className='ChoseCoin'>
      <p>Choose a cryptocurrency</p>
      <select value={props.selectedCurrency} onChange={handleCurrencyChange}>
        <option value="BTC">Bitcoin</option>
        <option value="ETH">Ethereum</option>
        <option value="XRP">Ripple</option>
        <option value="LTC">Litecoin</option>
        <option value="BCH">Bitcoin Cash</option>
        <option value="BNB">Binance Coin</option>
        <option value="ADA">Cardano</option>
        <option value="DOT">Polkadot</option>
        <option value="USDT">Tether</option>
        <option value="DOGE">Dogecoin</option>
        <option value="SOL">Solana</option>
        <option value="UNI">Uniswap</option>
        <option value="LINK">Chainlink</option>
        <option value="AVAX">Avalanche</option>
        <option value="ATOM">Cosmos</option>
      </select>
    </div>
  );
}

export default ChoseCoin;
