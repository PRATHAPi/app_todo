import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'

const Lineitem = ({item,handleChange,handledelete}) => {
  return (
    <li className='item' key={item.id}>
    <input type='checkbox' 
    onChange={() =>handleChange(item.id)} 
    checked={item.checked}/>
    <label 
    style={(item.checked)? {
       textDecoration:'line-through'
    }:null}
    onDoubleClick={()=>handleChange(item.id)}
    >{item.item}</label>
    <FaTrashAlt 
    onClick={()=>handledelete(item.id)}
    />
</li>
  )
  
}

export default Lineitem