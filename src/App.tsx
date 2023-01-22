import React from 'react';
import mainBg from './assets/image/bg-main-desktop.png';
// Importing Components
import CardFrontSide from './components/CardFrontSide/CardFrontSide';

function App() {
  return (
    <div className="App">
      <img src={mainBg} className='main-bg' alt="Main Bg" />
      <div className='flex-container'>
        <div className='cards'>
          <CardFrontSide />
        </div>
      </div>
    </div>
  )
}

export default App;