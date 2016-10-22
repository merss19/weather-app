import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import createLogger from 'redux-logger';
import api from '../middlewares/api'

import thunk from 'redux-thunk'
const logger = createLogger()

const dumbMiddleware = store => next => action => next({...action, addition: 'hello world'})

const enhancer = compose(
    applyMiddleware(thunk, dumbMiddleware, api, logger)
)

const store = createStore(reducer, {}, enhancer)



export default store