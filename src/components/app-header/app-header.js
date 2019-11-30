import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'


import App from '../app';
import Example2 from '../example-2';
import Example3 from '../example-3';
import MyMenu from '../my-menu';
import Title from '../title';

const AppHeader = () => {

    return (
        <div>
            <Router>
                <Route path='/' component={MyMenu}></Route>
                <Route path='/todo-list-react' component={Title} exact></Route>
                <Route path='/todo-list-react/example-1/todo-list' component={App} exact></Route>
                <Route path='/todo-list-react/example-2/name-project-2' component={Example2} exact></Route>
                <Route path='/todo-list-react/example-3/name-project-3' component={Example3} exact></Route>
            </Router>
        </div>
    )
}

export default AppHeader;