import { EditorState } from 'draft-js';

export type NoteProps = {
  editorState: EditorState;
  onChange: (newState: EditorState) => void;
};
