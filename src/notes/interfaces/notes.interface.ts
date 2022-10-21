import { Document } from "mongoose";

export interface Notes extends Document {
    readonly title: string;
    readonly description: string;
    readonly checked: boolean;
}
