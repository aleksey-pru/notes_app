import type { TNoteItem } from 'types';

export type SidebarProps = {
  notes: TNoteItem;
  activeId: string | null;
  setActiveId: (id: string) => void;
  onDelete: (id: string) => void;
};
