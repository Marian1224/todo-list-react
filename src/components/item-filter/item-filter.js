import React from 'react';
import './item-filter.css';

const ItemFilter = (props) => {

    const { itemLeft, onFilterChange } = props;

    return (
        <div className ='item-filter'>
            
            <h4>{ itemLeft } Item Left</h4>
            <div>
                <button className = 'btn btn-outline-dark' onClick = {() => onFilterChange('all')}>All</button>
                <button className = 'btn btn-outline-dark' onClick = {() => onFilterChange('active')}>Active</button>
                <button className = 'btn btn-outline-dark' onClick = {() => onFilterChange('complete')}>Complete</button>       
             </div>
            
        </div> 
    )


};

export default ItemFilter;