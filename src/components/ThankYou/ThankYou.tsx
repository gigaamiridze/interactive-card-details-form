import React from 'react';
import completeIcon from '../../assets/svg/icon-complete.svg';

function ThankYou() {
  return (
    <div className='thank-you-box'>
      <img src={completeIcon} alt="Complete" />
      <h3>thank you!</h3>
      <p>We've added your card details</p>
      <button type='button'>continue</button>
    </div>
  )
}

export default ThankYou;