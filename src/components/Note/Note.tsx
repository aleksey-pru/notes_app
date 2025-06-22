import 'draft-js/dist/Draft.css';

import { BubbleMenu, Editor, EditorContent, FloatingMenu, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useRef } from 'react';

import type { NoteProps } from './types.ts';

const Note = ({ onUpdate }: NoteProps) => {
  const content = '<p></p>';
  const extensions = [StarterKit];
  const editor = useEditor({
    extensions,
    content: content || { type: 'doc', content: [] },
    autofocus: true
  });

  const handleBlur = () => {
    if (editor) {
      const text = editor.getText();
      const json = editor.getJSON();
      console.log('Blur, content:', json);
      onUpdate(json);
    }
  };

  return (
    <div className="min-h-[100px] p-2 text-stone-600 rounded">
      <EditorContent editor={editor} onBlur={handleBlur} />
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
