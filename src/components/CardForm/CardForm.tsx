import React from 'react';

function CardForm() {
  return (
    <form>
      <div className='form-group'>
        <label htmlFor="name">cardholder name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className='form-group'>
        <label htmlFor="card-number">card number</label>
        <input type="text" name="card-number" id="card-number" />
      </div>
      <div className='form-group'>
        <div className='flex-box'>
          <label htmlFor="exp-date">exp. date (MM/YY)
            <div className='flex-box'>
              <input type="text" name="exp-date" id="exp-date" />
              <input type="text" name="exp-date" id="exp-date" />
            </div>
          </label>
          <label htmlFor="cvc">cvc
            <input type="text" name="cvc" id="cvc" />
          </label>
        </div>
      </div>
      <button type='submit'>confirm</button>
    </form>
  )
}

export default CardForm;