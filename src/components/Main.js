import React from 'react'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'

const Main = ({data, amount, title, handleTitle, handleAmount, handleSubmit, Delete, handleEdit, handleDelete, edit}) => {
  return (
    <div className='container d-flex justify-content-center'>
    <div className='main'>
        <ExpenseForm amount={amount}
          title={title} 
          handleTitle={handleTitle} 
          handleAmount={handleAmount} 
          handleSubmit={handleSubmit}
          edit={edit} />
        
        <ExpenseList
         data={data} 
         Delete={Delete}
         handleEdit={handleEdit}
         handleDelete={handleDelete} />

    </div>
    </div>
  )
}

export default Main