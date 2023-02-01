import React, { ChangeEvent, FormEvent } from 'react';
import { FormProps } from '../../types/form';

function CardForm({setFormData}: FormProps) {
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor="name">cardholder name</label>
        <input 
          type="text" 
          placeholder="e.g. Jane Appleseed" 
          name="name" 
          id="name"
          onChange={handleInput}
        />
      </div>
      <div className='form-group'>
        <label htmlFor="number">card number</label>
        <input 
          type="text" 
          maxLength={16} 
          placeholder="e.g. 1234 5678 9123 0000" 
          name="number" 
          id="number" 
          onChange={handleInput}
        />
      </div>
      <div className='form-group'>
        <div className='wrapper-box'>
          <label htmlFor="exp-date">exp. date (MM/YY)
            <div className='flex-box'>
              <input 
                type="text" 
                placeholder="MM" 
                name="mm" 
                id="exp-date" 
                onChange={handleInput}
              />
              <input 
                type="text" 
                placeholder="YY" 
                name="yy" 
                id="exp-date" 
                onChange={handleInput}
              />
            </div>
          </label>
          <label htmlFor="cvc">cvc
            <input 
              type="text" 
              placeholder="e.g. 123" 
              name="cvc" 
              id="cvc"
              onChange={handleInput} 
            />
          </label>
        </div>
      </div>
      <button type='submit'>confirm</button>
    </form>
  )
}

export default CardForm;