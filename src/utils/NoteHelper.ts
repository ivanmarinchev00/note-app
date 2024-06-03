import { loadNotes, saveNotes } from "./localStorage";
import { Note } from "../types/types";

class NoteHelper {
    static initializeNotes(): Note[] {
        return loadNotes();
      }
    
      static saveNote = (notes: Note[], note: Note): Note[] => {
        const updatedNotes = notes.find(n => n.id === note.id)
          ? notes.map(n => n.id === note.id ? note : n)
          : [...notes, note];
        saveNotes(updatedNotes);
        return updatedNotes;
      };
    
      static deleteNote = (notes: Note[], id: string): Note[] => {
        const updatedNotes = notes.filter(note => note.id !== id);
        saveNotes(updatedNotes);
        return updatedNotes;
      };
}

export default NoteHelper;