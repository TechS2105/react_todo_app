import React, {useState} from 'react';
import InputStyle from '../../public/styles/Input.module.css';

function Input({ handelTodoItems }) {

    const [newItem, setNewItem] = useState("");
    const [newDate, setNewDate] = useState("");

    function itemValue(event) {
        
        setNewItem(event.target.value);

    }

    function dateValue(event) {
        
        setNewDate(event.target.value);

    }

    function handelOnChange() {
        
        handelTodoItems(newItem, newDate);
        setNewItem("");
        setNewDate("");

    }

  return (
    <div className={InputStyle.container}>
      <input type="text" placeholder="Enter Your Work" onChange={itemValue} value={newItem}/>
      <input type="date" onChange={dateValue} value={newDate}/>
      <button onClick={handelOnChange}> Add </button>
    </div>
  );
}

export default Input;