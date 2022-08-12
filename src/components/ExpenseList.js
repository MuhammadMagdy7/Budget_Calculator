import React from 'react'
import Item from './Item'

const ExpenseList = ({data , Delete, handleEdit, handleDelete}) => {
  return (
    <>

    {data.length ? (data.map((item)=>{
      return(
      <Item item={item} handleEdit={handleEdit}
      handleDelete={handleDelete}
      />
      )
      })) : <h3 className='text-center py-3'>NO DATA</h3>}

    {data.length ? (<div className='text-center my-2 mb-3'>
        <button onClick={Delete} className='btn btn-danger text-uppercase px-3 ' >Clear Expenses <i className="fa-solid fa-trash-can"></i>
        </button>
    </div>) : ('')}

    </>
  )
}

export default ExpenseList