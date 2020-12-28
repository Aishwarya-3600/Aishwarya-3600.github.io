import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ToDoList from './ToDoList';
const App = () =>  {
  const [inputList,setInputList] = useState("");
  const [items, setItems] = useState([]);
  const addItemEvent = (event) => {
    setInputList(event.target.value);

  }
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems,inputList];
    });
    setInputList('');

  };
    const deleteItems = (id) => {
        console.log("delete");
        setItems((oldItems) => {
          return oldItems.filter((arrItem,index) => {
            return index !== id;
          });
        });


    
  }

  return (
    
    <div class = "body">
        <div class = "center-body">
            <br/>
            <h1 class="heading"> ToDo List</h1>
            <br/>
            <input type = "text" placeholder = "Add Item" onChange={addItemEvent}/>
            <button onClick={listOfItems}> + </button>
            <ol>
              {items.map( (itemval,index) => {
                return <ToDoList key={index} id={index} text = {itemval}
                        onSelect={deleteItems}/>
              })}

            </ol>
        </div>
    </div>
);
};

export default App;
