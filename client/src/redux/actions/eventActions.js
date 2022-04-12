import {
  GET_ALL_EVENTS,
  GET_EVENT,
  ADD_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  EVENT_ERROR
} from "./actionTypes";
import { toast } from "react-toastify";
const apiBaseURL = process.env.REACT_APP_API_BASE_URL

//Get all events from server
export const getEvents = () => async dispatch => {
  try {
    const res = await fetch(`${apiBaseURL}/event/`);
    const data = await res.json();
    dispatch({
      type: GET_ALL_EVENTS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: err.message
    });
  }
};

//Get a specific event from server
export const getEvent = _id => async dispatch => {
  try {
    const res = await fetch(`${apiBaseURL}/event/${_id}`);
    const data = await res.json();
    dispatch({
      type: GET_EVENT,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: err.message
    });
  }
};

//Add new event
export const addEvent = event => async dispatch => {
  try {
    const res = await fetch(`${apiBaseURL}/event/`, {
      method: "POST",
      body: JSON.stringify(event),
      headers: {
        Accept: "Content-Type",
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    if (res.status === 200) {
      dispatch({
        type: ADD_EVENT,
        payload: data
      });
      toast("A new event is added successfully!");
    } else {
      dispatch({
        type: EVENT_ERROR,
        payload: data.message
      });
      toast.error(`There was an error adding ${event.eventName}.`);
    }
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: err.message
    });
    toast.error(`There was an error adding ${event.eventName}.`);
  }
};

//Delete event from server
export const deleteEvent = _id => async dispatch => {
  try {
    await fetch(`${apiBaseURL}/event/${_id}`, {
      method: "DELETE"
    });
    dispatch({
      type: DELETE_EVENT,
      payload: _id
    });
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: err.message
    });
  }
};

//Update event on server
export const updateEvent = (event, _id) => async dispatch => {
  try {
    const res = await fetch(`${apiBaseURL}/event/${_id}`, {
      method: "PUT",
      body: JSON.stringify(event),
      headers: {
        Accept: "Content-Type",
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    if (res.status !== 200) {
      dispatch({
        type: EVENT_ERROR,
        payload: data.message
      });
      toast.error("There was an error updating the event!");
    } else {
      dispatch({
        type: UPDATE_EVENT,
        payload: data
      });
      toast("The event is updated succesfully!");
    }
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: err.message
    });
    toast.error("There was an error updating the event!");
  }
};
