import React from 'react';
import './todo-list-item.css';


const TodoListItem = (props) => {
    
    const { label, onDelete, onDone, done } = props;
    let classNames = 'todo-list-item';

    if (done) {
        classNames += ' done';
    };
    
    return(
        <span className = { classNames }>
                <button type ='button' className = 'btn btn-outline-light' onClick = { onDone  }>
                    <i className ='fa fa-check'></i>
                </button>

                    <span className = 'todo-list-item-label'> { label } </span>

                <button type ='button' className = 'btn btn-outline-light' onClick = { onDelete }>
                    <i className ='fa fa-close'></i>
                </button>
        </span>
    )
};

export default TodoListItem;