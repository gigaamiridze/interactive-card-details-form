import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Inputs } from '../../types/form';

function CardForm() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='form-group'>
        <label htmlFor="name">cardholder name</label>
        <input type="text" {...register("name")} placeholder="e.g. Jane Appleseed" name="name" id="name" />
      </div>
      <div className='form-group'>
        <label htmlFor="number">card number</label>
        <input type="text" {...register("number")} maxLength={16} placeholder="e.g. 1234 5678 9123 0000" name="number" id="number" />
      </div>
      <div className='form-group'>
        <div className='wrapper-box'>
          <label htmlFor="exp-date">exp. date (MM/YY)
            <div className='flex-box'>
              <input type="text" {...register("mm")} placeholder="MM" name="mm" id="exp-date" />
              <input type="text" {...register("yy")} placeholder="YY" name="yy" id="exp-date" />
            </div>
          </label>
          <label htmlFor="cvc">cvc
            <input type="text" {...register("cvc")} placeholder="e.g. 123" name="cvc" id="cvc" />
          </label>
        </div>
      </div>
      <button type='submit'>confirm</button>
    </form>
  )
}

export default CardForm;