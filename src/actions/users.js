import {
  ADD_USER,
  REMOVE_USER
} from '../constants';

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user
  }
}

export const removeUser = (id) => {
  return {
    type: REMOVE_USER,
    payload: id
  }
}