import React, { useState } from 'react';
import './App.css';


function App() {
  const [openPrice, setOpenPrice] = useState('');
  const [bitcoinPrice, setBitcoinPrice] = useState('');

  const clearInput = () => {
    setOpenPrice('');
  };
  

  return (
    <div className="App">
      <div className='space'></div>
      <div className='logo'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png" alt="logo" />
      </div>
      <div className="container">
        <div className='result result1'>High bitcoin price:</div>
        <h1 className='result result12'>{bitcoinPrice}</h1>
        <div className='result'>Open bitcoin price:</div>
        <input
          type="number"
          className='inputs'
          placeholder='please enter open price'
          value={openPrice}
          onChange={(e) => setOpenPrice(e.target.value)} // Update the input field's value
        />
        <br/>
        <div className='btns'>
          <button type='button' className='btn' >Submit</button>
          <button type='button' className='btn1' onClick={clearInput}>Clear</button> {/* Use clearInput function to clear input */}
        </div>
      </div>
    </div>
  );
}

export default App;
