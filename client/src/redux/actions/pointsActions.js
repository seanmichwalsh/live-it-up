import {
    POINTS_ERROR,
    GET_ALL_POINTS,
    GET_POINTS,
    ADD_POINTS,
    UPDATE_POINTS,
    DELETE_POINTS,
    SET_CURRENT_POINTS,
    CLEAR_CURRENT
  } from "./actionTypes";
  import { toast } from "react-toastify";

  //get semester points report
  export const getPointsReport = semester => async dispatch => {
    try {
      const res = await fetch(`http://localhost:3001/api/v1/pointsReport/${semester}`);
      const data = await res.json();
      dispatch({
        type: GET_ALL_POINTS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: POINTS_ERROR,
        payload: err.message
      });
    }
  };


  export const getUserPointsReport = (semester, id) => async dispatch => {
    try {
      const res = await fetch(`http://localhost:3001/api/v1/pointsReport/${semester}/${id}`);
      const data = await res.json();
      dispatch({
        type: GET_ALL_POINTS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: POINTS_ERROR,
        payload: err.message
      });
    }
  };

    export const getUserReport = uid => async dispatch => {
    try {
      const res = await fetch(`http://localhost:3001/api/v1/point/user/${uid}`);
      const data = await res.json();
      dispatch({
        type: GET_ALL_POINTS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: POINTS_ERROR,
        payload: err.message
      });
    }
  };


  
  //Get all points from server
  export const getPoints = () => async dispatch => {
    try {
      const res = await fetch("http://localhost:3001/api/v1/point/");
      const data = await res.json();
      dispatch({
        type: GET_ALL_POINTS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: POINTS_ERROR,
        payload: err.message
      });
    }
  };
  
  //Get a specific point from server
  export const getPoint = id => async dispatch => {
    try {
      const res = await fetch(`http://localhost:3001/api/v1/point/${id}`);
      const data = await res.json();
      dispatch({
        type: GET_POINTS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: POINTS_ERROR,
        payload: err.message
      });
    }
  };
  
  //Add new points
  export const addPoint = points => async dispatch => {
    try {
      const res = await fetch("http://localhost:3001/api/v1/point/", {
        method: "POST",
        body: JSON.stringify(points),
        headers: {
          Accept: "Content-Type",
          "Content-Type": "application/json"
        }
      });
      const data = await res.json();
      console.log(data);
      dispatch({
        type: ADD_POINTS,
        payload: data
      });
      toast("A new points is added successfully!");
    } catch (err) {
      dispatch({
        type: POINTS_ERROR,
        payload: err.message
      });
      toast.error(`There was an error adding ${points.name}.`);
    }
  };
  
  //Delete points from server
  export const deletePoint = id => async dispatch => {
    try {
      await fetch(`http://localhost:3001/api/v1/point/${id}`, {
        method: "DELETE"
      });
      dispatch({
        type: DELETE_POINTS,
        payload: id
      });
      toast("The points is deleted succesfully.");
    } catch (err) {
      dispatch({
        type: POINTS_ERROR,
        payload: err.message
      });
      toast.error(`There was an error deleting the points`);
    }
  };
  
  //Update points on server
  export const updatePoint = (points, id) => async dispatch => {
    try {
      const res = await fetch(`http://localhost:3001/api/v1/point/${id}`, {
        method: "PUT",
        body: JSON.stringify(points),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await res.json();
      dispatch({
        type: UPDATE_POINTS,
        payload: data
      });
      toast("The points is updated successfully!");
    } catch (err) {
      dispatch({
        type: POINTS_ERROR,
        payload: err.message
      });
      toast.error(`There was an error updating ${points.name}.`);
    }
  };
  
  //Set Current
  export const setCurrentPoint = points => {
    return {
      type: SET_CURRENT_POINTS,
      payload: points
    };
  };
  
  //Clear Current
  export const clearCurrent = () => {
    return {
      type: CLEAR_CURRENT
    };
  };
  