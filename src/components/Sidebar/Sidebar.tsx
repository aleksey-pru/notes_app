import NoteList from '../NoteList/NoteList';

const Sidebar = () => {
  return (
    <div>
      <div className="w-64 border-r h-full p-4 overflow-y-auto">
        <NoteList />
      </div>
    </div>
  );
};

export default Sidebar;
