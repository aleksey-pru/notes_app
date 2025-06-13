import 'draft-js/dist/Draft.css';

import { Editor } from 'draft-js';
import { useEffect, useRef } from 'react';

import type { NoteProps } from './types.ts';

const Note = ({ editorState, onChange }: NoteProps) => {
  const editorRef = useRef<Editor | null>(null);

  useEffect(() => {
    editorRef.current?.focus();
  }, [editorState]);

  return (
    <div className="min-h-[100px] p-2 text-stone-600 rounded">
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
