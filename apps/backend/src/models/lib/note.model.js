import { Schema } from "mongoose";
import { v4 as uuid } from "uuid";
import { db } from "../../loaders/db.loader.js";

const NoteSchema = new Schema({
    uuid: {
        type: String,
        default: () => uuid()
    },
    title: {
        type: String,
        default: ''
    },
    content: {
        type: String,
        default: ''
    },
    user: {
        type: Schema.Types.String,
        // ref: 'User',
        required: true
    },
    page: {
        type: Schema.Types.ObjectId,
        ref: 'Page'
    }
}, {
    timestamps: true
});

NoteSchema.index({ date: 1, user: 1 }, { unique: true });
const Note = db.model('Note', NoteSchema, 'notes');

export {
    Note
}