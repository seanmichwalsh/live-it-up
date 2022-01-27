import {
  GET_ALL_USER,
  GET_USER,
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
  USER_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
} from "./actionTypes";
import { toast } from "react-toastify";
const apiBaseURL = process.env.REACT_APP_API_BASE_URL

//Get current login user id
export const getCurrentUserID = () => async (dispatch) => {
  try {
    const res = await fetch(`${apiBaseURL}/user/me`);
    const data = await res.json();
    dispatch(data.uid);
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: err.message,
    });
  }
};

//Get current user object
export const getCurrentUser = () => async (dispatch) => {
  try {
    const res = await fetch(`${apiBaseURL}/user/me`);
    const data = await res.json();
    dispatch({
      type: GET_USER,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: err.message,
    });
  }
};

//Get all users from server
export const getUsers = () => async (dispatch) => {
  try {
    const res = await fetch(`${apiBaseURL}/user/`);
    const data = await res.json();
    dispatch({
      type: GET_ALL_USER,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: err.message,
    });
  }
};

//Get a specific user from server
export const getUser = (id) => async (dispatch) => {
  try {
    const res = await fetch(`${apiBaseURL}/user/${id}`);
    const data = await res.json();
    dispatch({
      type: GET_USER,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: err.message,
    });
  }
};

//Add new user
export const addUser = (user) => async (dispatch) => {
  try {
    const res = await fetch(`${apiBaseURL}/user/`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        Accept: "Content-Type",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(res);
    if (res.status === 200) {
      dispatch({
        type: ADD_USER,
        payload: data,
      });
      toast("A new user was added successfully!");
    } else {
      dispatch({
        type: USER_ERROR,
        payload: data.message,
      });
      toast.error(
        `There was an error adding ${user.firstName + " " + user.lastName}.`
      );
    }
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: err.message,
    });
    toast.error(
      `There was an error adding ${user.firstName + " " + user.lastName}.`
    );
  }
};

//Delete user from server
export const deleteUser = (uid) => async (dispatch) => {
  try {
    await fetch(`${apiBaseURL}/user/${uid}`, {
      method: "DELETE",
    });
    dispatch({
      type: DELETE_USER,
      payload: uid,
    });
    toast("The user was deleted successfully!");
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: err.message,
    });
    toast.error(
      `There was an error deleting the user.`
    );
  }
};

//Update user on server
export const updateUser = (user, uid) => async (dispatch) => {
  try {
    const res = await fetch(`${apiBaseURL}/user/${uid}`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        Accept: "Content-Type",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (res.status !== 200) {
      dispatch({
        type: USER_ERROR,
        payload: data.message,
      });
      toast.error(`There was an error updating ${user.firstName + " " + user.lastName}.`);
    } else {
      dispatch({
        type: UPDATE_USER,
        payload: data,
      });
      toast(`${user.firstName + " " + user.lastName} was updated successfully!`);
    }
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: err.message,
    });
    toast.error(`There was an error updating the ${user.firstName + " " + user.lastName}!`);
  }
};

//Set Current
export const setCurrent = (user) => {
  return {
    type: SET_CURRENT,
    payload: user,
  };
};

//Clear Current
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};
