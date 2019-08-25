import * as types from './../actions/actionTypes';

export default function committeeReducer(state = [], action) {
    switch(action.type) {
        case types.CREATE_COMMITTEE:
            return [...state, { ...action.committee }];
        case types.LOAD_COMMITTEES_SUCCESS:
            return action.committees;
        default:
            return state;
    }
}