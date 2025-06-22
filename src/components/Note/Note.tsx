import type { NoteProps } from './types.ts';

const Note = ({ onUpdate }: NoteProps) => {
  return <div className="min-h-[100px] p-2 text-stone-600 rounded"></div>;
};

export default Note;
