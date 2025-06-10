import { createSlice } from '@reduxjs/toolkit';
import { rest } from 'services/rest';
import { type AppDispatch } from 'types';

import { INITIAL_STATE } from './constants.ts';
import type { TSelectNoteData } from './types.ts';
/**
 * Reducer
 */
const { reducer, actions } = createSlice({
  name: 'creationNote',
  initialState: INITIAL_STATE,
  reducers: {
    saveData: (state, { payload: { id, title, description } }) => {
      state.id = id;
      state.title = title;
      state.description = description;
    },
    resetData: () => INITIAL_STATE
  }
});

export default reducer;
/**
 * Selectors
 */
export const selectNoteData: TSelectNoteData = ({ singleNote: { title, description } }) => ({
  title,
  description
});
/**
 * Actions
 */
export const { saveData } = actions;
/**
 * Dispatchers
 */
export const handleGetNoteData =
  (id: string) =>
  async (dispatch: AppDispatch): Promise<void> => {
    const response = await rest.get(`/SOME_REQUEST/${id}`);

    dispatch(saveData(response));
  };
