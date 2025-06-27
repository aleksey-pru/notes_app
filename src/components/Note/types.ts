import type { JSONContent } from '@tiptap/react';

export type NoteProps = {
  content: JSONContent;
  onUpdate: (newContent: JSONContent) => void;
};
