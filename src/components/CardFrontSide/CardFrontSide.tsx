import React from 'react';
import cardLogo from '../../assets/svg/card-logo.svg';

function CardFrontSide() {
  return (
    <div className='card-front'>
      <img src={cardLogo} className='card-logo' alt="Card Logo" />
      <div>
        <span className='card-number'>0000 0000 0000 0000</span>
        <div className='flex-box'>
          <span className='name'>jane appleseed</span>
          <span>00/00</span>
        </div>
      </div>
    </div>
  )
}

export default CardFrontSide;