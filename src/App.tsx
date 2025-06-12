import { ContentState, convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import type { TNoteItem } from 'types';

import Note from './components/Note/Note';
import Sidebar from './components/Sidebar/Sidebar';
import { useAppDispatch } from './hooks/useAppDispatch';
import { createNote, handleGetNotes, selectNotes } from './store/notes';

const App = () => {
  const dispatch = useAppDispatch();
  const notesArray = useSelector(selectNotes);

  const notes = useMemo(() => {
    return notesArray.reduce((acc, note) => {
      acc[note.id] = {
        ...note,
        content: note.content
          ? EditorState.createWithContent(convertFromRaw(note.content))
          : EditorState.createEmpty()
      };
      return acc;
    }, {} as TNoteItem);
  }, [notesArray]);

  const [activeId, setActiveId] = useState<string | null>(null);
  const activeNote = activeId ? notes[activeId] : undefined;

  const handleCreateNote = async () => {
    const title = `Note ${Date.now()}`;
    const contentState = ContentState.createFromText('');
    const rawContent = convertToRaw(contentState);
    try {
      const response = await dispatch(createNote({ title, content: rawContent }));
      console.log('Note created:', response);
    } catch (error) {
      console.log('Error creating note:', error);
    }
  };

  const handleChangeNoteContent = (newContent: EditorState) => {
    // todo: add logic for dispatching new content
    console.log(newContent);
  };

  const handleDelete = (id: string) => {
    // todo: add logic for dispatching remove note by id
    setActiveId((prevId) => (prevId === id ? null : prevId));
  };

  useEffect(() => {
    try {
      dispatch(handleGetNotes());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  return (
    <div className="flex h-screen">
      <Sidebar
        notes={notes}
        activeId={activeId}
        setActiveId={setActiveId}
        onDelete={handleDelete}
        onCreate={handleCreateNote}
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
