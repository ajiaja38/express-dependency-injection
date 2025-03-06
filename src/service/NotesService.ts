import { Notes } from "../model/notes.entity";

export interface INoteService {
  createNote(note: Notes): Notes;
  getAllNotes(): Notes[];
}
