import * as types from './actionTypes';
import * as committeeApi from './../../api/committeeApi';
import { toast } from 'react-toastify';
import { push } from 'react-router-redux';

export function addCommittee(committee) {
    return (dispatch, getState) => {
        dispatch({type: "REQUEST_STARTED"});
        
        fetch('http://localhost:3001/api/v1/committees/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({name:committee.name, type:committee.type})
        }).then((res) => res.json())
        .then((data) =>  dispatch(
            {type: "REQUEST_SUCCEEDED", payload: data},
            toast.success(committee.name + " committee has been added!")        ))
        .catch((error)=> dispatch(
            {type: "REQUEST_FAILED", error: error},
            toast.error("There was an error adding " + committee.name + ".")
        ))
    }    
}

export function loadCommitteeSuccess(committees) {
    return {
        type: types.LOAD_COMMITTEES_SUCCESS,
        payload: committees
    }
}

export function loadCommittees() {
    return function (dispatch) {
        return committeeApi.getCommittees().then(committees => {
            dispatch(loadCommitteeSuccess(committees));
        }).catch(error => {
            throw error;
        })
    }
}