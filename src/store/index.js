import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import createLogger from 'redux-logger';
import api from '../middlewares/api'

const logger = createLogger()

const enhancer = compose(
    applyMiddleware(api, logger)
)

const store = createStore(reducer, {}, enhancer)


export default store