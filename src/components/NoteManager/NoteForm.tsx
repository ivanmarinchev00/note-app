import { Button, Form, Input } from 'antd';
import { useEffect, useState } from 'react';
import { Note } from '../../types/types';
import '../../styles/notes.css';


interface NoteProps {
    onSave: (note: Note) => void,
    note: Note | null;
}

const NoteForm = ({ onSave, note }: NoteProps) => {
    const [title, setTitle] = useState<string>(note?.title || '');
    const [content, setContent] = useState<string>(note?.content || '');


    useEffect(() => {
        if (note) {
            setTitle(note.title);
            setContent(note.content);
        };
    }, [note])

    const handleSave = () => {
        if (!title.trim() || !content.trim()) return alert('Please provide title and content of the note');
        const newNote = note ? { ...note, title, content } : { id: `${Date.now()}`, title, content, createdAt: new Date() }
        onSave(newNote);
        setTitle('');
        setContent('');
    }

    return (
        <Form layout='vertical' className='note-form'>
            <Form.Item label="Title">
                <Input value={title} onChange={e => setTitle(e.target.value)} />
            </Form.Item>
            <Form.Item label="Content">
                <Input.TextArea rows={4} value={content} onChange={e => setContent(e.target.value)} />
            </Form.Item>
            <Button type="primary" onClick={handleSave} className='note-form'>
                Save
            </Button>
        </Form>
    )
}

export default NoteForm;