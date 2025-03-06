import { notes } from "../../data";
import { Notes } from "../../model/notes.entity";
import { INoteService } from "../NotesService";

export class NoteServiceImpl implements INoteService {
  createNote(note: Notes): Notes {
    const findLastIndex: number = notes.length > 0 ? notes.length - 1 : 0;

    const lastId = notes[findLastIndex].getId();
    const newId: number = lastId + 1;

    note.setId(newId);

    notes.push(note);

    return notes.filter((note: Notes) => note.getId() === newId)[0];
  }

  getAllNotes(): Notes[] {
    return notes;
  }
}
