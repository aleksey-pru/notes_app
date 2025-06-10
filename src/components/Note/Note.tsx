import 'draft-js/dist/Draft.css';

import { Editor, EditorState } from 'draft-js';
import { useEffect, useRef } from 'react';

interface NoteProps {
  editorState: EditorState;
  onChange: (newState: EditorState) => void;
}

const Note = ({ editorState, onChange }: NoteProps) => {
  const editorRef = useRef<Editor | null>(null);

  useEffect(() => {
    editorRef.current?.focus();
  }, [editorState]);

  return (
    <div className="border min-h-[100px] p-2 bg-stone-50 text-stone-600 rounded">
      <Editor
        ref={editorRef}
        editorState={editorState}
        onChange={onChange}
        placeholder="Write your note..."
      />
    </div>
  );
};

export default Note;
