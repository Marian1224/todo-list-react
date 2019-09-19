import React, { Component } from 'react';
import './app.css';

import Header from '../header';
import InputPanel from '../input-panel';
import TodoList from '../todo-list';
import ItemFilter from '../item-filter';

class App extends Component {

    maxId = 10;

    state = { 
        todoData: [
            this.createItem('Work'),
            this.createItem('Work example'),
            this.createItem('Just example')
            ],
            filter: 'all'
        
};

    filter(items, filter){
        switch(filter){
            case 'all': 
                return items;
            case 'active': 
                return items.filter((item) => !item.done);
            case 'complete': 
                return items.filter((item) => item.done);
            default: 
                return items;
        }
    }

    createItem(label) {
        return {
            label,
            done: false,
            important: false,
            id: this.maxId++
        }
    }

    addItem = (text) => {
        const newItem = this.createItem(text);
        this.setState(({ todoData }) => {
            const newArray = [...todoData, newItem];
            return {
                todoData: newArray
            }
        });
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [...todoData.slice(0, idx),...todoData.slice(idx + 1)];
            return {
                todoData: newArray
            }
        });
    };

    onDone = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[idx];
            const newItem = {...oldItem, done: !oldItem.done };
            const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];
            return {
                todoData: newArray
            }
        });
    };

    onFilterChange = (filter) => {
        this.setState({ filter });
    }

    render(){
        
        const { todoData, filter } = this.state;
        const filterItems = this.filter((todoData), filter);

        const countDone = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - countDone;

    return(
        <div>
                <Header />
                <InputPanel addNewItem = { this.addItem }/>
                <TodoList todoArray = { filterItems } onDelete = { this.deleteItem } onDone = { this.onDone }/>
                <ItemFilter done = { todoCount } filter = { filter } onFilterChange = { this.onFilterChange }/>
        
        </div>
    )
}
};

export default App;