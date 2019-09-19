import React, { Component } from 'react';
import './item-filter.css';

class ItemFilter extends Component {

    buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'complete', label: 'Complete' }
    ];
    
    render(){

        const { done, onFilterChange } = this.props;
        const buttons = this.buttons.map(({ name, label }) => {
            return(
                <button key = { name } className = 'btn btn-outline-dark' onClick = {() => onFilterChange(name)}>{ label }</button>
            );
        });
       
    return(
        
        <div className ='item-filter'>
            <h4>{ done } Item Left</h4>
            <div className ='btn-toolbar'>
                { buttons }          
             </div>
            
        </div> 
    )
}
};

export default ItemFilter;