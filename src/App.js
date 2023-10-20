import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import AddItem from './AddItem';
import Searchitem from './Searchitem';

function App() {



  const [items,setItems]=useState(JSON.parse
    (localStorage.getItem("todo_list")));


    const [newItem,setNewItem]=useState('')
    const [search,setSearch]=useState('')

const addItem =(item) =>{
    const id=items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem={id,checked:false,item}
    const listitem=[...items,addNewItem]
    setItems(listitem)
    localStorage.setItem("todo_list",JSON.stringify(listitem))
  }

const handleChange=(id)=>{
      const listitem=items.map((item=> 
        item.id===id?{...item,checked:!item.checked}:item))
      setItems(listitem)
      localStorage.setItem("todo_list",JSON.stringify(listitem))
}
const handledelete=(id)=>{
    const listitem=items.filter((item=> item.id!==id))
    setItems(listitem)
    console.log("deleted")
    localStorage.setItem("todo_list",JSON.stringify(listitem))
}
const handleUpdate =(e)=>{
  e.preventDefault();
  if (!newItem) return;
  addItem(newItem)
  setNewItem('')
}
return (
    <div className="App">
    <Header/> 
    <AddItem
    newItem={newItem}
    setNewItem={setNewItem}
    handleUpdate={handleUpdate}
    />
    <Searchitem
    search={search}
    setSearch={setSearch}
    />
    <Content
    items={items.filter(item =>( (item.item)
      .toLowerCase()).includes(search.toLowerCase()))}
    setItems={setItems}
    handleChange={handleChange}
    handledelete={handledelete}
    />
    <Footer
    length={items.length}
    />

     </div>
  );
}

export default App;
