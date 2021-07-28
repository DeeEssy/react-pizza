import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore(
    rootReducer, 
    composeEnhancers(applyMiddleware(thunk))
);
//const store = createStore(counter, 5) Число 5 это state по умолчанию

export default store;