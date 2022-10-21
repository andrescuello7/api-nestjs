import { Controller, Res, NotFoundException, Query, HttpStatus, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateNoteDTO } from "./dto/create_notes.dto";

import { NotesService } from "./notes.service";

@Controller('notes')
export class NotesController {

    constructor(private noteService: NotesService) { }

    @Get('/')
    async getNotes(@Res() res) {
        const response = await this.noteService.getNotes();
        return res.status(HttpStatus.OK).json(response);
    }

    @Post('/')
    async postNotes(@Res() res, @Body() createNote: CreateNoteDTO) {
        const response = await this.noteService.postNote(createNote);
        return res.status(HttpStatus.OK).json({
            message: "Note save!",
            response
        });
    }

    @Delete('/')
    async deleteNotes(@Res() res, @Query('NoteID') NoteID) {
        const response = await this.noteService.deleteNote(NoteID);
        if (!response) throw new NotFoundException("Note does not exist!");
        return res.status(HttpStatus.OK).json({
            message: "Your note delete!",
            response
        });
    }

    @Put(':id')
    async putNotes(@Res() res, @Body() putNote: CreateNoteDTO, @Param('id') id) {
        const response = await this.noteService.putNote(id, putNote);
        if (!response) throw new NotFoundException("Note does not exist")
        return res.status(HttpStatus.OK).json(response);
    }
}
