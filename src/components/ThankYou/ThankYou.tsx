import React from 'react';
import completeIcon from '../../assets/svg/icon-complete.svg';
import { defaultFormData } from '../../App';
import { ThankYouProps } from '../../types/thankYou';

function ThankYou({setFormData, setValidate}: ThankYouProps) {
  const resetForm = () => {
    setFormData(defaultFormData);
    setValidate(false);
  }

  return (
    <div className='thank-you-box'>
      <img src={completeIcon} alt="Complete" />
      <h3>thank you!</h3>
      <p>We've added your card details</p>
      <button type='button' onClick={resetForm}>continue</button>
    </div>
  )
}

export default ThankYou;