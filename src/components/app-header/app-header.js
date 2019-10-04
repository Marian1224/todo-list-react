import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'


import App from '../app';
import Example2 from '../example-2';
import Example3 from '../example-3';
import MyMenu from '../my-menu';
import Title from '../title';

const AppHeader = () => {

    return(
        <div>
            <Router>
                <Route path = '/' component = { MyMenu }></Route>
                <Route path = '/title' component = { Title }></Route>
                <Route path = '/example-1/todo-list' component = { App }></Route>
                <Route path = '/example-2/name-project-2' component = { Example2 }></Route>
                <Route path = '/example-3/name-project-3' component = { Example3 }></Route>
            </Router>
        </div>
    )
}

export default AppHeader;