import * as types from './../actions/actionTypes';

export default function userReducer(state = [], action) {
    switch(action.type) {
        case types.CREATE_USER:
            return [...state, { ...action.user }];
        default:
            return state;
    }
}