import { EditorState } from 'draft-js';

export type TNote = {
  id: string;
  title: string;
  content: EditorState;
};

export type TNoteItem = {
  [id: string]: TNote;
};
