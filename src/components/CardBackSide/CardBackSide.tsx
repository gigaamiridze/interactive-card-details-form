import React from 'react';
import { CardProps } from '../../types/form';

function CardBackSide({formData}: CardProps) {
  return (
    <div className='card-back'>
      <span className='cvc'>{formData.cvc || '000'}</span>
    </div>
  )
}

export default CardBackSide;