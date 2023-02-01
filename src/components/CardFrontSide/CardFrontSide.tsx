import React from 'react';
import cardLogo from '../../assets/svg/card-logo.svg';
import { CardProps } from '../../types/form';

function CardFrontSide({formData}: CardProps) {
  return (
    <div className='card-front'>
      <img src={cardLogo} className='card-logo' alt="Card Logo" />
      <div>
        <span className='card-number'>{formData.number || '0000 0000 0000 0000'}</span>
        <div className='flex-box'>
          <span className='name'>{formData.name || 'jane appleseed'}</span>
          <span>{formData.mm || '00'}/{formData.yy || '00'}</span>
        </div>
      </div>
    </div>
  )
}

export default CardFrontSide;