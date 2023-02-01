import React, { ChangeEvent, FormEvent } from 'react';
import { FormProps } from '../../types/form';

function CardForm({formData, setFormData, setValidate}: FormProps) {

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'number') event.target.value = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 19);   
    if (name === 'mm' || name === 'yy') event.target.value = value.toString().replace(/[^0-9]/g, '').substring(0, 2); 
    if (name === 'mm' && value > '12') event.target.value = '12';
    if (name === 'cvc') event.target.value = value.substring(0, 4); 

    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValidate(true);
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
          maxLength={19} 
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