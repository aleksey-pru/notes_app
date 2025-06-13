import { createSlice } from '@reduxjs/toolkit';
import { ContentState, convertToRaw } from 'draft-js';
import { rest } from 'services/rest';
import type { RootState, TNote, TNoteApiResponse, TSelectNotes } from 'types';
import { type AppDispatch } from 'types';

import { INITIAL_STATE } from './constants.ts';
/**
 * Reducer
 */
const { reducer, actions } = createSlice({
  name: 'notes',
  initialState: INITIAL_STATE,
  reducers: {
    saveNotes: (_state: RootState, { payload }: { payload: TNote[] }) => payload,
    resetData: () => INITIAL_STATE
  }
});

export default reducer;
/**
 * Selectors
 */
export const selectNotes: TSelectNotes = (state: RootState) => state.notes;
/**
 * Actions
 */
export const { saveNotes } = actions;
/**
 * Dispatchers
 */
export const handleGetNotes =
  () =>
  async (dispatch: AppDispatch): Promise<void> => {
    const response = await rest.get<{ notes: TNoteApiResponse[] }>(
      `http://localhost:3000/api/notes`
    );

    const normalizedNotes: TNote[] = response.notes.map((note) => ({
      id: note._id,
      title: note.title,
      content: convertToRaw(ContentState.createFromText(note.content || '')),
      createdAt: note?.createdAt
    }));

    dispatch(saveNotes(normalizedNotes));
  };
