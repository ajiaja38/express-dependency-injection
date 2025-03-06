import express from "express";
import { NoteServiceImpl } from "../service/impl/NotesServiceImpl";
import { NotesController } from "../controller/notesController";

export const noteRouter = (noteRouter: express.Router) => {
  const noteService: NoteServiceImpl = new NoteServiceImpl();
  const noteController: NotesController = new NotesController(noteService);

  noteRouter.post(
    "/note",
    noteController.createNoteHandler.bind(noteController)
  );
  noteRouter.get(
    "/notes",
    noteController.getAllNotesHandler.bind(noteController)
  );
};
