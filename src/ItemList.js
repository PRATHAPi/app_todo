import React from 'react'
import Lineitem from './Lineitem'

const ItemList = ({items,handleChange,handledelete}) => {
  return (
    <main>
        <ul>
            {items.map((item =>
                <Lineitem
                item={item}
                key={item.id}
                handleChange={handleChange}
                handledelete={handledelete}/>
            ))}
           </ul>
    </main>
  )
}

export default ItemList