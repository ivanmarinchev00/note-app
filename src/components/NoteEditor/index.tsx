import { useNavigate, useParams } from "react-router-dom";
import NoteHelper from "../../utils/NoteHelper";
import { Note } from "../../types/types";
import NoteForm from "../NoteManager/NoteForm";

const NoteEditor = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const notes = NoteHelper.initializeNotes();
    const note = notes.find(n => n.id === id) || null;

    const handleSave = (note: Note) => {
        NoteHelper.saveNote(notes, note);
        navigate('/');
    }

    return <NoteForm onSave={handleSave} note={note} />;
};

export default NoteEditor;