import { combineReducers } from 'redux';

import notesReducer from './notes';

const combinedReducer = combineReducers({
  notes: notesReducer
});

// eslint-disable-next-line
export default (state: any, action: any): any => {
  return combinedReducer(state, action);
};
