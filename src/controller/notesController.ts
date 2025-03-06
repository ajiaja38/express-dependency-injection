import { Notes } from "../model/notes.entity";
import { NoteServiceImpl } from "../service/impl/NotesServiceImpl";
import { Request, Response } from "express";
import { IResponse } from "../utils/types/interface/IResponse.interface";
import { ResponseDto } from "../dto/response.dto";

export class NotesController {
  constructor(private readonly noteService: NoteServiceImpl) {}

  public createNoteHandler(req: Request, res: Response): void {
    const note: Notes = req.body;

    const newNote: Notes = new Notes(note);
    const data: Notes = this.noteService.createNote(newNote);

    console.log(newNote.getTitle());

    const response: IResponse<Notes> = {
      code: 201,
      status: true,
      message: "Successfully created new note",
      data,
    };

    res.status(201).send(response);
  }

  public getAllNotesHandler(req: Request, res: Response): void {
    const data: Notes[] = this.noteService.getAllNotes();

    const response: ResponseDto<Notes[]> = new ResponseDto<Notes[]>(
      200,
      true,
      "All Notes Successfully fetched",
      data
    );

    res.status(200).send(response);
  }
}
