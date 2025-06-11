import { Router } from 'express';

import { createNote, getAll, removeNote, updateNote } from '../controllers/notes.js';

const router = new Router();

// Create Note
// http://localhost:3000/api/notes
router.post('/', createNote);

// Get All Notes
// http://localhost:3000/api/notes
router.get('/', getAll);

// Update Note
// http://localhost:3000/api/notes/:id
router.put('/:id', updateNote);

// Remove Note
// http://localhost:3000/api/notes/:id
router.delete('/:id', removeNote);

export default router;
