import { EditorState } from 'draft-js';
import type { TFunction } from 'types';

export type NoteProps = {
  editorState: EditorState;
  onChange: (newState: EditorState) => TFunction;
};
