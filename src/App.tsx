import { EditorState } from 'draft-js';
import { times } from 'es-toolkit/compat';
import { useState } from 'react';
import type { TNote, TNoteItem } from 'types';
import { v4 as uuidv4 } from 'uuid';

import Note from './components/Note/Note';
import Sidebar from './components/Sidebar/Sidebar';

const initialNotes: TNote[] = times(10, (i) => ({
  id: uuidv4(),
  title: `note ${i + 1}`,
  content: EditorState.createEmpty()
}));

const App = () => {
  const [notes, setNotes] = useState<TNoteItem>(() => {
    return initialNotes.reduce((acc, note) => {
      acc[note.id] = note;
      return acc;
    }, {} as TNoteItem);
  });

  const [activeId, setActiveId] = useState<string | null>(initialNotes[0]?.id ?? null);

  const activeNote = activeId ? notes[activeId] : undefined;

  const handleChangeNoteContent = (newContent: EditorState) => {
    if (!activeId) return;
    setNotes((prev) => ({
      ...prev,
      [activeId]: {
        ...prev[activeId],
        content: newContent
      }
    }));
  };

  const handleDelete = (id: string) => {
    setNotes((prev) => {
      const newNotes = { ...prev };
      delete newNotes[id];
      return newNotes;
    });
    if (activeId === id) {
      setActiveId(null);
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar
        notes={notes}
        activeId={activeId}
        setActiveId={setActiveId}
        onDelete={handleDelete}
      />
      <div className="flex-grow p-4 overflow-auto bg-stone-300">
        {activeNote ? (
          <Note editorState={activeNote.content} onChange={handleChangeNoteContent} />
        ) : (
          <div className="text-gray-400">Select a note</div>
        )}
      </div>
    </div>
  );
};

export default App;
