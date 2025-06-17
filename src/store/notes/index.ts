import { createSlice } from '@reduxjs/toolkit';
import { ContentState, convertToRaw, RawDraftContentState } from 'draft-js';
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

export const handleCreateNote =
  (title: string, content: RawDraftContentState) =>
  async (dispatch: AppDispatch): Promise<void> => {
    const response = await rest.post('http://localhost:3000/api/notes', { title, content });

    const normalizedNotes: TNote = {
      id: response._id,
      title: response.title,
      content: convertToRaw(ContentState.createFromText(''))
    };

    dispatch(handleGetNotes(normalizedNotes));
  };

export const handleDeleteNote =
  (id: string) =>
  async (dispatch: AppDispatch): Promise<void> => {
    const response = await rest.delete(`http://localhost:3000/api/notes/${id}`);
    dispatch(handleGetNotes());
  };

export const handleUpdateNote =
  (id: string | null, content: RawDraftContentState, title?: string) =>
  async (dispatch: AppDispatch): Promise<void> => {
    const response = await rest.put(`http://localhost:3000/api/notes/${id}`, { title, content });
  };
