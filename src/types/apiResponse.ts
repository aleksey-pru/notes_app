import type { EditorState, RawDraftContentState } from 'draft-js';

import type { RootState } from './store';

export type TNoteApiResponse = {
  _id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TNote = {
  id: string;
  title: string;
  content: RawDraftContentState;
  createdAt: Date;
};

export type TNoteWithEditorState = Omit<TNote, 'content'> & {
  content: EditorState;
};
export type TNoteItem = {
  [id: string]: TNoteWithEditorState;
};

export type TSelectNotes = (state: RootState) => TNote[];
