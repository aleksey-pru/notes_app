import Note from './components/Note/Note';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow p-4 overflow-auto">
        <Note />
      </div>
    </div>
  );
};

export default App;
