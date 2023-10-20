import React from 'react'
import ItemList from './ItemList'
const Content = ({items,handleChange,handledelete}) => {
   
  return (
    <main>     
        {(items.length) ? (  
            <ItemList 
            items={items}
            handleChange={handleChange}
            handledelete={handledelete}
            />
        ):(
        <p>Your list is empty</p>)}
           </main>
        )
}

export default Content