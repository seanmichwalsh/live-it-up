import { handleResponse, handleError } from './apiUtils';
const API_ROOT = 'http://localhost:3001'; 
const baseUrl = API_ROOT + "/api/v1/committees/";

export function getCommittees() {
    return fetch(baseUrl) 
        .then(handleResponse)
        .catch(handleError)
}

export function saveCommittee(committee) {
    return fetch(baseUrl + (committee.id || ""), {
        method: committee.id ? "PUT" : "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(committee)
    })
        .then(handleResponse)
        .catch(handleError);
}

export function deleteComittee(committeeID) {
    return fetch (baseUrl + committeeID, {
        method: "DELETE"
    })
        .then(handleResponse)
        .catch(handleError)
}