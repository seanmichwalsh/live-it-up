import * as types from './actionTypes';
import { toast } from 'react-toastify';

export function addUser(user) {
    return (dispatch, getState) => {
        dispatch({type: types.CREATE_USER});
        
        fetch('http://localhost:3001/api/v1/users/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                firstName:user.firstName, 
                lastName: user.lastName,
                onCampus: user.onCampus,
                phoneNumber: user.phoneNumber,
                email: user.email,
                uid: user.uid,
                committees: user.committees,
                mainCommittee: user.mainCommittee,
                activeMember: user.activeMember
            })
        }).then((res) => res.json())
        .then((data) =>  dispatch(
            {type: types.CREATE_USER_SUCCESS, payload: data},
            toast.success(user.name + " has been added!")))
        .catch((error)=> dispatch(
            {type: types.CREATE_USER_ERROR, error: error},
            toast.error("There was an error adding " + user.firstName + ".")
        ))
    }    
}

export function loadUsers() {
    return (dispatch) => {
        dispatch({type: types.LOAD_ALL_USERS});
        
        fetch('http://localhost:3001/api/v1/users/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                firstName:user.firstName, 
                lastName: user.lastName,
                onCampus: user.onCampus,
                phoneNumber: user.phoneNumber,
                email: user.email,
                uid: user.uid,
                committees: user.committees,
                mainCommittee: user.mainCommittee,
                activeMember: user.activeMember
            })
        }).then((res) => res.json())
        .then((data) =>  dispatch(
            {type: types.LOAD_ALL_USERS_SUCCESS, payload: data}
            ))
        .catch((error)=> dispatch(
            {type: types.LOAD_ALL_USERS_ERROR, error: error},
        ))
    }    
}