import { combineReducers } from 'redux';
import tasksReducer from './tasksSlice';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  // potentiels autres reducers ici
});

export default rootReducer;