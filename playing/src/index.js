import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './App';
import NotFound from "./NotFound";
import Test from "./Test";

import './index.css';

const Root = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/test/" component={Test} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
