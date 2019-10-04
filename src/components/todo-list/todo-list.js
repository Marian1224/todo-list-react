import React from 'react';
import TodoListItem from '../todo-list-items';
import './todo-list.css';


const TodoList = ( { todoList, onDelete, onDone } ) => {

    const elements = todoList.map((item) => {

        const { id, ...itemParametrs } = item;
        return(
            <li key ={id}  className = 'list-group-item'> 
                <TodoListItem {...itemParametrs}  
                               onDelete = {() => onDelete(id)} 
                               onDone = {() => onDone(id)}/> 
            </li>
        )
    });

    return (
        <ul className = 'list-group'>
            { elements }
        </ul>
    )
}

export default TodoList;