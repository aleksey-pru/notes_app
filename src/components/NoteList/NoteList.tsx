import { FaTrash } from 'react-icons/fa';
import type { TNote } from 'types';

import type { NoteListProps } from './types.ts';
import { formatNoteDate } from './utils';

const NoteList = ({ notes, activeId, setActiveId, onDelete }: NoteListProps) => {
  return (
    <>
      <div className="max-w-md mx-auto flex justify-end p-2">
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
        {notes.map(({ id, title, createdAt }: TNote) => {
          const isActive = activeId === id;
          return (
            <li
              key={id}
              onClick={() => setActiveId(id)}
              className={`px-4 py-2 cursor-pointer select-none transition-colors duration-200 ${
                isActive
                  ? 'bg-stone-500 text-black rounded-md font-bold'
                  : 'text-gray-200 hover:bg-stone-500 rounded-md'
              }`}
            >
              {title}
              <span
                className={`block text-xs transition-colors duration-200, ${isActive ? 'text-black' : 'text-white'}`}
              >
                {formatNoteDate(createdAt)}
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NoteList;
