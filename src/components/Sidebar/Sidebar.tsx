import NoteList from '../NoteList/NoteList';
import type { SidebarProps } from './types.ts';

const Sidebar = ({ notes, activeId, setActiveId, onDelete }: SidebarProps) => (
  <div className="w-64 border-r h-full p-4 overflow-y-auto bg-stone-300">
    <NoteList
      notes={Object.values(notes)}
      activeId={activeId}
      setActiveId={setActiveId}
      onDelete={onDelete}
    />
  </div>
);

export default Sidebar;
