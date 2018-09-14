import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import testReducer from './reducer';

const reducer = combineReducers({
    test: testReducer
})

const store = createStore(
    reducer,
    applyMiddleware(reduxPromiseMiddleware())
    );

export default store;