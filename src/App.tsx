import React, { useState } from 'react';
import mainBg from './assets/image/bg-main-desktop.png';
import { Inputs } from './types/form';
// Importing Components
import CardFrontSide from './components/CardFrontSide/CardFrontSide';
import CardBackSide from './components/CardBackSide/CardBackSide';
import CardForm from './components/CardForm/CardForm';
import ThankYou from './components/ThankYou/ThankYou';

const defaultFormData = {
  name: null,
  number: null, 
  mm: null, 
  yy: null, 
  cvc: null,
};

function App() {
  const [formData, setFormData] = useState<Inputs>(defaultFormData);

  return (
    <div className="App">
      <img src={mainBg} className='main-bg' alt="Main Bg" />
      <div className='flex-container'>
        <div className='cards'>
          <CardFrontSide formData={formData} />
          <CardBackSide formData={formData} />
        </div>
        <CardForm formData={formData} setFormData={setFormData} />
        {/* <ThankYou /> */}
      </div>
    </div>
  )
}

export default App;