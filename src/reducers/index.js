import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';

import users from './users';

const rootReducer = combineReducers({
  users,
  form
});

export default rootReducer;
