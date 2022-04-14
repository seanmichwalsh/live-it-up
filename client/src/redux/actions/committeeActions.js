import {
  COMMITTEE_ERROR,
  GET_ALL_COMMITTEE,
  GET_COMMITTEE,
  ADD_COMMITTEE,
  UPDATE_COMMITTEE,
  DELETE_COMMITTEE,
  SET_CURRENT_COMMITTEE,
  CLEAR_CURRENT
} from './actionTypes'
import { toast } from 'react-toastify'
const apiBaseURL = process.env.REACT_APP_API_BASE_URL

// Get all committees from server
export const getCommittees = () => async dispatch => {
  try {
    const res = await fetch(`${apiBaseURL}/committee/`)
    const data = await res.json()
    dispatch({
      type: GET_ALL_COMMITTEE,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: COMMITTEE_ERROR,
      payload: err.message
    })
  }
}

// Get a specific committee from server
export const getCommittee = id => async dispatch => {
  try {
    const res = await fetch(`${apiBaseURL}/committee/${id}`)
    const data = await res.json()
    dispatch({
      type: GET_COMMITTEE,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: COMMITTEE_ERROR,
      payload: err.message
    })
  }
}

// Add new committee
export const addCommittee = committee => async dispatch => {
  try {
    const res = await fetch(`${apiBaseURL}/committee/`, {
      method: 'POST',
      body: JSON.stringify(committee),
      headers: {
        Accept: 'Content-Type',
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()

    if (!(res.ok)) {
      throw ({ message: res.body })
    }

    dispatch({
      type: ADD_COMMITTEE,
      payload: data
    })
    toast('A new committee was added successfully!')
  } catch (err) {
    dispatch({
      type: COMMITTEE_ERROR,
      payload: err.message
    })
    toast.error(`There was an error adding ${committee.name}.`)
  }
}

// Delete committee from server
export const deleteCommittee = id => async dispatch => {
  try {
    await fetch(`${apiBaseURL}/committee/${id}`, {
      method: 'DELETE'
    })
    dispatch({
      type: DELETE_COMMITTEE,
      payload: id
    })
    toast('The committee was deleted succesfully.')
  } catch (err) {
    dispatch({
      type: COMMITTEE_ERROR,
      payload: err.message
    })
    toast.error('There was an error deleting the committee')
  }
}

// Update committee on server
export const updateCommittee = (committee, id) => async dispatch => {
  try {
    const res = await fetch(`${apiBaseURL}/committee/${id}`, {
      method: 'PUT',
      body: JSON.stringify(committee),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    dispatch({
      type: UPDATE_COMMITTEE,
      payload: data
    })
    toast('The committee was updated successfully!')
  } catch (err) {
    dispatch({
      type: COMMITTEE_ERROR,
      payload: err.message
    })
    toast.error(`There was an error updating ${committee.name}.`)
  }
}

// Set Current
export const setCurrentCommittee = committee => {
  return {
    type: SET_CURRENT_COMMITTEE,
    payload: committee
  }
}

// Clear Current
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  }
}
