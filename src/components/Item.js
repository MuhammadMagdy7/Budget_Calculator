import React from 'react'

const Item = ({item, handleEdit, handleDelete}) => {
  return (
    <div className='d-flex justify-content-center py-2'>
    <div className='item p-1 d-flex justify-content-between'>
        <span>{item.title}</span>
        <span>{item.amount}$</span>
        <span>
          <button onClick={()=>handleEdit(item.id)} className='btn'><i className="fa-solid fa-pen "></i>
        </button>
        <button onClick={()=>handleDelete(item.id)} className='btn'><i className="fa-solid fa-trash-can"></i>
        </button>
        </span>
    </div>
</div>
  )
}

export default Item
