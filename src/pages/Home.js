import React, {useState} from 'react'
import Main from '../components/Main'
import Title from '../components/Title'
import Total from '../components/Total'
import {v4 as uuidv4} from 'uuid'

const data = [

]


const Home = () => {


  
  const [first, setfirst] = useState(data)
  
  const [amount, setAmount] = useState('')
  
  const [title, setTitle] = useState('')
  
  const [edit, setEdit] = useState(false)
  
  const [id, setId] = useState('')



const handleTitle = e =>{
  setTitle(e.target.value);
} 

const handleAmount = e =>{
  setAmount(e.target.value);
} 

const Delete = () => {
  setfirst([])
}


const handleSubmit = e =>{
  e.preventDefault();
  if (title !== '' && amount > 0){
    if(edit){
      let temp = first.map(item => {
        return item.id === id ? {...item, title, amount} : item
      })
      setfirst(temp)
      setEdit(false)

    }else{
      const singleExpense = {id:uuidv4(), title, amount};
      setfirst([...first, singleExpense])
    }



    setAmount('')
    setTitle('')
    
  }else{
    
  }
} 

// --------------------------
// handle edit
const handleEdit = id => {
  const newList = first.find(item => item.id === id);
  setAmount(newList.amount)
  setTitle(newList.title)
  setEdit(true)
  setId(id)
}


const handleDelete = id => {
  const newList = first.filter(item => item.id !== id);
  setfirst(newList)
}


  return (
<div className='home'>
<Title />
<Main
 data={first} 
 amount={amount}
 title={title} 
 handleTitle={handleTitle} 
 handleAmount={handleAmount} 
 handleSubmit={handleSubmit}
 Delete={Delete} 
 handleEdit={handleEdit}
 handleDelete={handleDelete}
 edit ={edit} />

<Total data={first}/>

</div>

    )
}

export default Home