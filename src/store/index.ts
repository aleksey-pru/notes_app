import { configureStore } from '@reduxjs/toolkit';

import reducer from './combineReducer';

export default configureStore({
  reducer
});
