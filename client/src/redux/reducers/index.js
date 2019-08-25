import { combineReducers } from 'redux';
import { RESET_ERROR_MESSAGE } from '../actions';
import committee from './committeeReducer';

const user = (state = {
    user: {}
    }, action) => {
    if (action.user) {
        return action.user;
    }
    return state;
}

const errorMessage = (state = null, action) => {
    const {
        type,
        error
    } = action;

    if (type === RESET_ERROR_MESSAGE) {
        return null;
    } else if (error) {
        return error;
    }

    return state;
}


const rootReducer = combineReducers({
    user,
    errorMessage,
    committee,
})

export default rootReducer;