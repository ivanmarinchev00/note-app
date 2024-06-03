import { Divider } from "antd";
import { useEffect, useState } from "react";
import NoteHelper from "../../utils/NoteHelper";
import { Note } from "../../types/types";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import '../../styles/notes.css';


const NoteManager = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [editingNote, setEditingNote] = useState<Note | null>(null);
    const [page, setPage] = useState(1);
    const pageSize = 3;

    useEffect(() => {
        setNotes(NoteHelper.initializeNotes());
    }, []);

    const handleSaveNote = (note: Note) => {
        const updatedNotes = NoteHelper.saveNote(notes, note);
        setNotes(updatedNotes);
        setEditingNote(null);
    };

    const handleDeleteNote = (id: string) => {
        const updatedNotes = NoteHelper.deleteNote(notes, id);
        setNotes(updatedNotes);
    };

    const handlePageChange = (page: number) => {
        setPage(page);
    };

    return (
        <div className="note-form">
            <NoteForm onSave={handleSaveNote} note={editingNote} />
            <Divider />
            <NoteList
                notes={notes}
                onPageChange={handlePageChange}
                onDelete={handleDeleteNote}
                page={page}
                pageSize={pageSize}
            />
        </div>
    );
}

export default NoteManager;