import { BubbleMenu, EditorContent, FloatingMenu, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { debounce } from 'lodash';
import { useEffect, useRef } from 'react';

import type { NoteProps } from './types';

const Note = ({ content, onUpdate }: NoteProps) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    editorProps: {
      attributes: {
        class:
          'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none border-1 rounded-sm p-2'
      }
    }
  });
  useEffect(() => {
    if (editor && content) {
      editor.commands.setContent(content);
    }
  }, [editor, content]);

  const debouncedUpdate = useRef(
    debounce((editorInstance) => {
      const json = editorInstance.getJSON();
      onUpdate(json);
    }, 1000)
  ).current;

  useEffect(() => {
    if (!editor) return;

    const handleUpdate = () => {
      debouncedUpdate(editor);
    };

    editor.on('update', handleUpdate);

    return () => {
      editor.off('update', handleUpdate);
      debouncedUpdate.cancel();
    };
  }, [editor, debouncedUpdate, onUpdate]);
  return (
    <div className="min-h-[100px] p-2 text-stone-600 rounded">
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
