import { Note } from "../types/types";

const NOTES_KEY = 'notes';

export const saveNotes = (notes: Note[]) => {
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes))
}

export const loadNotes = (): Note[] => {
    const notes = localStorage.getItem(NOTES_KEY);
    return notes ? JSON.parse(notes) : [];
}