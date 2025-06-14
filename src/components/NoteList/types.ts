import type { TNoteWithEditorState } from 'types';

export type NoteListProps = {
  notes: TNoteWithEditorState[];
  activeId: string | null;
  setActiveId: (id: string) => void;
  onDelete: (id: string) => void;
  onCreate: () => void;
};
