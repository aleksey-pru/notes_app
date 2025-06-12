import type { TNote } from 'types';

export type NoteListProps = {
  notes: TNote[];
  activeId: string | null;
  setActiveId: (id: string) => void;
  onDelete: (id: string) => void;
  onCreate: () => void;
};
