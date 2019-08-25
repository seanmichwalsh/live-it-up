import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

const middleware = [thunk];

export default function configureStore(initialState) {
    const composeEnhancers = 
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //add support for Redux Dev Tools

    return createStore(
        rootReducer, 
        initialState,
        composeEnhancers(applyMiddleware(...middleware))
    );
}