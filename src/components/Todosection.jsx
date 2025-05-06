import React, {useState} from 'react';
import Container from './Container';
import List from './List';
import TodoSection from '../../public/styles/Todosection.module.css';
import InputSection from './Input';

function Todosection({ heading }) {

    // let date = new Date().toLocaleDateString();

    const [listItems, setListItems] = useState([]);

    function handelTodoItems (newItemName, newItemDate) {

        setListItems([...listItems, { name: newItemName, date: newItemDate }]);

    }

    function handelTodoDelete(todoItemToDelete) {
        const deleteItems = listItems.filter((item) => item.name !== todoItemToDelete.name);
        setListItems(deleteItems);
    }
    
    return (

        <Container>

            <h1 className={TodoSection.heading}> {heading} </h1>

            <InputSection
            
                handelTodoItems = {handelTodoItems}
                
            /> 

            <List
            
                listItems={listItems}
                handelDelete={handelTodoDelete}
                
            />

        </Container>

    );

}

export default Todosection;