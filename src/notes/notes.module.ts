import { Module } from '@nestjs/common';
import { NotesService } from "./notes.service";
import { NotesController } from "./notes.controller";

//Service Mongoose
import { NotesScrema } from "./schema/notes_schema";
import { MongooseModule } from "@nestjs/mongoose";


@Module({
    imports: [MongooseModule.forFeature([{ name: "Notes", schema: NotesScrema }])],
    providers: [NotesService],
    controllers: [NotesController]
})
export class NotesModule {}
