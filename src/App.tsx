import { Routes } from "react-router";
import Sidebar from "./components/Sidebar/Sidebar";
import Note from "./components/Note/Note";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow p-4 overflow-auto">
        <Note />
        {/* <Routes></Routes> */}
      </div>
    </div>
  );
}

export default App;
