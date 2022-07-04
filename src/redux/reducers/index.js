import { combineReducers } from 'redux';
import habitsReducer from './habits';
import usersReducer from './users';

const rootReducer = combineReducers({
  habits: habitsReducer,
  users: usersReducer,
});

export default rootReducer;
