import React from 'react';
import './item-filter.css';

const ItemFilter = (props) => {

    const { itemLeft, onFilterChange } = props;

    // buttons = [
    //     { name: 'all', label: 'All' },
    //     { name: 'active', label: 'Active' },
    //     { name: 'complete', label: 'Complete' }
    // ];

    //     const buttons = this.buttonw.map(({ name, label }) => {
    //         return(
    //             <button key = { name } className = 'btn btn-outline-dark' onClick = {() => onFilterChange(name)}>{ label }</button>
    //         );
    //     });
       
    // return(
        
    //     <div className ='item-filter'>
            
    //         <h4>{ itemLeft } Item Left</h4>
    //         <div className ='btn-toolbar'>
    //             { buttons }          
    //          </div>
            
    //     </div> 
    // )

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