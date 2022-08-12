import React from 'react'

const ExpenseForm = ({edit, amount, title, handleTitle, handleAmount, handleSubmit}) => {
  return (
    <>
    <form>
    <div className="row g-3 m-3">
  <div className="col-md">
    <div className="form-floating">
      <input type="text" className="form-control" id="floatingInputGrid" 
      placeholder=' '
      value={title} 
      onChange={handleTitle} />
      <label htmlFor="floatingInputGrid">Charge</label>
    </div>
  </div>
  <div className="col-md">
    <div className="form-floating">
      <input type="number" className="form-control" id="floatingInputGrid" 
      placeholder=' '

      value={amount} 
      onChange={handleAmount} />
      <label htmlFor="floatingInputGrid">Amount</label>
    </div>
  </div>
</div>

<div className='text-center mb-2'>
<button onClick={handleSubmit} type='submit' className='btn btn-danger text-uppercase'>
  {edit ? 'Edit' :'submit'} 
  <i className="fa-solid fa-circle-chevron-right"></i>
</button>
</div>
</form>
</>
  )
}

export default ExpenseForm