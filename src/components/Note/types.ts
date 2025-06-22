import { JSONContent } from '@tiptap/react';

export type NoteProps = {
  content: string;
  onUpdate: (content: JSONContent) => void;
};
