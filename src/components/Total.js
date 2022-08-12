import React from 'react'

const Total = ({data}) => {
  return (
    <div className='text-center pt-3'>
        <h2>Total Spending: <span className='bg-danger'>{data.reduce((acc, curr) => {
          return (acc += Number(curr.amount));
        }, 0)}
        $</span></h2>

    </div>
  )
}

export default Total