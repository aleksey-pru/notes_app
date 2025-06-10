import { times } from 'es-toolkit/compat';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const ids = times(10, () => uuidv4());

const NoteList = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <>
      <div className="max-w-md mx-auto flex justify-end p-2">
        <button
          type="button"
          aria-label="Delete item"
          disabled={!activeId}
          className={`transition-colors ${
            activeId ? 'text-red-500 cursor-pointer' : 'text-gray-400 cursor-not-allowed'
          } hover:text-red-500`}
        >
          <FaTrash size={20} />
        </button>
      </div>
      <ul className="max-w-md mx-auto bg-gray-900 rounded-md shadow-md divide-y divide-gray-700">
        {ids.map((id, index) => {
          const isActive = activeId === id;
          return (
            <li
              key={id}
              onClick={() => setActiveId(id)}
              className={`px-4 py-2 cursor-pointer select-none transition-colors duration-200 ${
                isActive ? 'bg-gray-700 text-white' : 'text-gray-200 hover:bg-gray-800'
              }`}
            >
              {`note ${index + 1}`}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NoteList;
