import { JSONContent } from '@tiptap/react';
import { EditorState } from 'draft-js';

export type NoteProps = {
  content: JSONContent;
  onUpdate: (newState: EditorState) => void;
};
