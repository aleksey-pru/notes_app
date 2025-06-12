import mongoose from 'mongoose';

const NoteSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, default: '' }
  },
  { timestamps: true }
);
export default mongoose.model('Note', NoteSchema);
