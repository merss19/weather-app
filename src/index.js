import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './components/App';

import store from './store';

import AuthForm from './components/Forms/AuthForm';
import ValidationsForm from './components/Forms/ValidationsForm';




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
httpGet('http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=b1c0b967a2eae065899828eab3a7ae46')
    .then(
        response => console.log(JSON.parse(response)),
        error => console.log(`Rejected: ${error}`)
    );

/*const routes = (
    <Route path="/" component = {App}>
        <IndexRoute component={Welcome} />
        <Route path='welcome' component={Welcome}/>
        <Route path='examples' component={Examples}>
            <IndexRoute component={AuthForm} />
            <Route path='auth' component={AuthForm} />
            <Route path='validations' component={ValidationsForm} />
        </Route>
    </Route>
)*/


ReactDOM.render((
        <Provider store={store}>
            <App />
        </Provider>
    ), document.getElementById('root')
);
