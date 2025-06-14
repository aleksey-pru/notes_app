import { ContentState, convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import type { TNoteItem } from 'types';

import Note from './components/Note/Note';
import Sidebar from './components/Sidebar/Sidebar';
import { useAppDispatch } from './hooks/useAppDispatch';
import {
  handleCreateNote,
  handleDeleteNote,
  handleGetNotes,
  handleUpdateNote,
  selectNotes
} from './store/notes';

const App = () => {
  const dispatch = useAppDispatch();
  const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());
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

  const handleCreate = useCallback(() => {
    const title = `Note ${Date.now()}`;
    const contentState = ContentState.createFromText('');
    const plainText = contentState.getPlainText();

    dispatch(handleCreateNote(title, plainText));
    console.log('use dispatch to create note');
  }, [dispatch]);

  const handleDelete = (id: string) => {
    dispatch(handleDeleteNote(id));
    dispatch(handleGetNotes());
    setActiveId((prevId) => (prevId === id ? null : prevId));
  };

  const handleChangeNoteContent = (newContent: EditorState) => {
    const id = activeId;
    console.log(activeNote.content);
    setEditorState(newContent);
    const content = newContent.getCurrentContent();
    const rawContent = convertToRaw(content);
    dispatch(handleUpdateNote(id, rawContent));
    console.log(content.getPlainText());
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
        onCreate={handleCreate}
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
