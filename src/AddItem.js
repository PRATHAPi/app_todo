import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({newItem,setNewItem,handleUpdate}) => {
  return (
    <form className='addForm' onSubmit={handleUpdate}>
        <label>AddItem</label>
        <input
        autoFocus 
        type='text'
        id='addItem'
        placeholder='Add Item'
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        />
        <button type='submit'
        aria-label='add item'>
            <FaPlus/></button>
    </form>
  )
}

export default AddItem