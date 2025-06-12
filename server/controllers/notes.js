import Note from '../models/Note.js';

// Create Note
export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    const newNote = new Note({
      title,
      content
    });
    await newNote.save();
    res.status(201).json({
      id: newNote._id,
      title: newNote.title,
      content: newNote.content
    });
    res.json(newNote);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Get All Notes
export const getAll = async (req, res) => {
  try {
    const notes = await Note.find().sort('-createdAt');

    if (!notes) {
      return res.json({ message: 'Not Found Notes' });
    }

    res.json({ notes });
  } catch (e) {
    res.json({ message: e.message });
  }
};

// Remove note
export const removeNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) return res.json({ message: `Note doesn't exists with id: ${req.params.id}` });

    res.json({ message: 'Note' });
  } catch (e) {
    res.json({ message: e.message });
  }
};

// Update note
export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = await Note.findById(req.params.id);

    note.title = title;
    note.content = content;

    await note.save();

    res.json(note);
  } catch (e) {
    res.json({ message: e.message });
  }
};
