import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory,Redirect } from 'react-router';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
import CityHandler from './routeHandlers/CityHandler';
import Main from './containers/Main';



function httpGet(url) {

    return new Promise(function(resolve, reject) {

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onload = function() {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function() {
            reject(new Error("Network Error"));
        };

        xhr.send();
    });

}
httpGet('http://api.openweathermap.org/data/2.5/weather?q=London&appid=b1c0b967a2eae065899828eab3a7ae46')
    .then(
        response => console.log(JSON.parse(response)),
        error => console.log(`Rejected: ${error}`)
    );




ReactDOM.render((
        <Provider store={store}>
            <Router history={browserHistory}>
                <Redirect from = "/" to = "/cities" />
                <Route path="/" component = { App }>
                    <Route path="/cities" component = { Main }/>
                    <Route path = "/cities/:id" component = { CityHandler } />
                </Route>
            </Router>
        </Provider>
    ), document.getElementById('root')
);
