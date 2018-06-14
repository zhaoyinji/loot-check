import React from 'react';
import Wallet from './Wallet';
import Loot from './loot';

const App = () =>  {
  return (
    <div>
      <h2>Loot Check</h2>
      <hr/>
      <Wallet></Wallet>
      <Loot></Loot>
    </div>
  )
}

export default App;