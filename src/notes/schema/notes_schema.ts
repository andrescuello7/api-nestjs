import { Schema } from "mongoose";

export const NotesScrema = new Schema({
    title: String,
    description: String,
    checked: Boolean,
    createdAt: { type: Date, default: Date.now }
})