import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

//Mongose model
import { Notes } from './interfaces/notes.interface';
import { CreateNoteDTO } from "./dto/create_notes.dto";

@Injectable()
export class NotesService {
    constructor(@InjectModel('Notes') private readonly noteModel: Model<Notes>) {}

    //Get Notes
    async getNotes(): Promise<Notes[]> {
        let response = await this.noteModel.find();
        return response;
    }

    //Post Note
    async postNote(createNoteDTO: CreateNoteDTO): Promise<Notes> {
        let response = new this.noteModel(createNoteDTO);
        return response.save();
    }
    
    //Delete Note
    async deleteNote(id: string): Promise<any> {
        let response = await this.noteModel.findByIdAndDelete(id);
        return response;
    }
    
    //Put Note
    async putNote(id: string, createNoteDTO: CreateNoteDTO): Promise<Notes> {
        let response = await this.noteModel.findByIdAndUpdate(id, createNoteDTO, {new: true});
        return response;
    }
}
