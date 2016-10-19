import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'



import thunk from 'redux-thunk'

const dumbMiddleware = store => next => action => next({...action, addition: 'hello world'})

const enhancer = compose(
    applyMiddleware(thunk, dumbMiddleware)
)

const store = createStore(reducer, {}, enhancer)

window.store = store

export default store