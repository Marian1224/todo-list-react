import React from 'react';
import './my-menu.css';
import { Link } from 'react-router-dom';


const MyMenu = () => {

    return(
        <div className ='menu'>
            <div className = 'my-menu'>
                <h1><Link to = '/title'>My projects</Link></h1>
                <ul className = 'list'>
                    <li><Link to = '/example-1/todo-list' className = 'btn btn-outline-dark bt'>Example 1 (Todo List)</Link></li>
                    <li><Link to = '/example-2/name-project-2' className = 'btn btn-outline-dark bt'>Example 2(name ....)</Link></li>
                    <li><Link to = '/example-3/name-project-3' className = 'btn btn-outline-dark bt'>Example 3(name ....)</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default MyMenu;
