export const ADD_USER = "ADD_USER";
export const REQUEST_USER = "REQUEST_USER";
export const RECEIVE_USER = "RECEIVE_USER";
export const EDIT_USER = "EDIT_USER";
export const INVALID_REQUEST = "INVALID_REQUEST";
export const REQUEST_ALL_USERS = "REQUEST_ALL_USERS";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const DELETE_USER = "DELETE_USER";

export function addUser(
  uid,
  firstName,
  lastName,
  onCampus,
  phoneNumber,
  email,
  activeMember,
  committees,
  mainCommittee
) {
  return {
    type: ADD_USER,
    uid,
    firstName,
    lastName,
    onCampus,
    phoneNumber,
    email,
    activeMember,
    committees,
    mainCommittee
  };
}

function requestUser(uid) {
  return {
    type: REQUEST_USER,
    uid
  };
}

export function invalidRequest(uid) {
  return {
    type: INVALID_REQUEST,
    uid
  };
}

function receiveUser(uid, json) {
  return {
    type: RECEIVE_USER,
    uid,
    /*firstName: json.firstName,
    lastName: json.lastName,
    onCampus: json.onCampus,
    email: json.email,
    phoneNumber: json.phoneNumber,
    committees: json.committees,
    mainCommittee: json.mainCommittee*/
    user: json.data.children.map(child => child.data)
  };
}

function receiveAllUsers(json) {
  return {
    type: RECEIVE_ALL_USERS,
    users: json.data.children.map(child => child.data)
  };
}

export function getUser(uid) {
  return dispatch => {
    dispatch(requestUser(uid));
    return fetch(`localhost:3001/api/v1/users/${uid}`)
      .then(response => response.json())
      .then(json => dispatch(receiveUser(uid, json)));
  };
}

export function getAllUsers() {
  return dispatch => {
    dispatch(getAllUsers());
    return fetch(`localhost:3001/api/v1/users`)
      .then(response => response.json())
      .then(json => dispatch(receiveAllUsers(json)));
  };
}

export function editUser(
  uid,
  firstName,
  lastName,
  onCampus,
  phoneNumber,
  email,
  activeMember,
  committees,
  mainCommittee
) {
  return {
    type: EDIT_USER,
    uid,
    firstName,
    lastName,
    onCampus,
    phoneNumber,
    email,
    activeMember,
    committees,
    mainCommittee
  };
}

export function deleteUser(uid) {
  return {
    type: DELETE_USER,
    uid
  };
}
