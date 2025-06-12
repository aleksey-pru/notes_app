import { FaTrash } from 'react-icons/fa';
import { RiAddLargeFill } from 'react-icons/ri';
import type { TNote } from 'types';

import type { NoteListProps } from './types.ts';

const NoteList = ({ notes, activeId, setActiveId, onDelete, onCreate }: NoteListProps) => {
  return (
    <>
      <div className="max-w-md mx-auto flex justify-end p-2">
        <button type="button" className="cursor-pointer" onClick={() => onCreate()}>
          <RiAddLargeFill size={20} />
        </button>
        <button
          type="button"
          aria-label="Delete item"
          disabled={!activeId}
          onClick={() => activeId && onDelete(activeId)}
          className={`transition-colors ${
            activeId ? 'text-red-500 cursor-pointer' : 'text-gray-400 cursor-not-allowed'
          } hover:text-red-500`}
        >
          <FaTrash size={20} />
        </button>
      </div>
      <ul className="max-w-md mx-auto bg-stone-800 rounded-md shadow-md divide-y divide-gray-700">
        {notes.map(({ id, title }: TNote) => {
          const isActive = activeId === id;
          return (
            <li
              key={id}
              onClick={() => setActiveId(id)}
              className={`px-4 py-2 cursor-pointer select-none transition-colors duration-200 ${
                isActive ? 'bg-stone-500 text-white' : 'text-gray-200 hover:bg-stone-500'
              }`}
            >
              {title}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NoteList;
