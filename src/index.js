import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory,Redirect } from 'react-router';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
import CityHandler from './routeHandlers/CityHandler';
import addCity from './containers/addCity';
import './app.css';


ReactDOM.render((
        <Provider store={store}>
            <Router history={browserHistory}>
                <Redirect from = "/" to = "/cities" />
                <Route path="/" component = { App }>
                    <Route path="/cities" component = { addCity }/>
                    <Route path = "/cities/:id" component = { CityHandler } />
                </Route>
            </Router>
        </Provider>
    ), document.getElementById('root')
);
