import React from 'react'

const Searchitem = ({search,setSearch}) => {
  return (
   <form className='Searchitem' onSubmit={(e)=>e.preventDefault()}>
    <label>SearchItem</label>
    <input type='text'
    id='SearchItem'
    placeholder='SearchItem'
    value={search}
    onChange={(e)=>setSearch(e.target.value)}/>
   </form>
  )
}

export default Searchitem