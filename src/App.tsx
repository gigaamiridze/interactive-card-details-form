import React from 'react';
import mainBg from './assets/image/bg-main-desktop.png';
// Importing Components
import CardFrontSide from './components/CardFrontSide/CardFrontSide';
import CardBackSide from './components/CardBackSide/CardBackSide';
import CardForm from './components/CardForm/CardForm';
import ThankYou from './components/ThankYou/ThankYou';

function App() {
  return (
    <div className="App">
      <img src={mainBg} className='main-bg' alt="Main Bg" />
      <div className='flex-container'>
        <div className='cards'>
          <CardFrontSide />
          <CardBackSide />
        </div>
        <CardForm />
        {/* <ThankYou /> */}
      </div>
    </div>
  )
}

export default App;