import {
  ADD_USER,
  REMOVE_USER
} from '../constants';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload]
    case REMOVE_USER:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ]
    default:
      return state;
  }
}