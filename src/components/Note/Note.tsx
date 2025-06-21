import 'draft-js/dist/Draft.css';

import { BubbleMenu, Editor, EditorContent, FloatingMenu, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect, useRef } from 'react';

import type { NoteProps } from './types.ts';

const Note = ({ editorState, onUpdate }: NoteProps) => {
  const editorRef = useRef<Editor | null>(null);
  const content = '<p></p>';
  const extensions = [StarterKit];
  const editor = useEditor({
    extensions,
    content: content || { type: 'doc', content: [] },
    onUpdate: ({ editor }) => {
      const json = editor.getJSON();
      onUpdate(json);
    },
    autofocus: true
  });

  useEffect(() => {
    editorRef.current?.focus();
  }, [editorState]);

  return (
    <div className="min-h-[100px] p-2 text-stone-600 rounded">
      {/*<Editor*/}
      {/*  ref={editorRef}*/}
      {/*  editorState={editorState}*/}
      {/*  onChange={onChange}*/}
      {/*  placeholder="Write your note..."*/}
      {/*/>*/}

      <EditorContent editor={editor} />
      {editor && (
        <>
          <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
          <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu>
        </>
      )}
    </div>
  );
};

export default Note;
