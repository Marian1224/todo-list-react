import React, { Component } from 'react';
import './input-panel.css';


class InputPanel extends Component {

    state = {
        label: ''
    };

    changeItem = (event) => {
        this.setState({
            label: event.target.value
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addNewItem(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {
        const styly = {
            width: '100%',
            border: 'none',
            outline: 'none',
            opacity: 0.3
        };
    
    return( 
        <form className = 'input-panel' onSubmit = { this.onSubmit }>
            <input type ='text' placeholder = 'Write what you want ?' 
                   onChange = { this.changeItem } 
                   value ={ this.state.label} 
                   style = { styly }/>
        </form>
    )
}
};

export default InputPanel;