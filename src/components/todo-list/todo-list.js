import React from 'react';
import TodoListItem from '../todo-list-items';
import './todo-list.css';


const TodoList = ( { todoArray, onDelete, onDone } ) => {

    const element = todoArray.map((item) => {

        const { id, ...itemWithOutKey } = item;
        return(
            <li key ={id}  className = 'list-group-item'> 
                <TodoListItem {...itemWithOutKey}  
                               onDelete = {() => onDelete(id)} 
                               onDone = {() => onDone(id)}/> 
            </li>
        )
    });

    return (
        <ul className = 'list-group'>
            { element }
        </ul>
    )
}

export default TodoList;