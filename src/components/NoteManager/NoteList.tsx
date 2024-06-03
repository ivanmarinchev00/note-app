import { Button, List, Pagination } from "antd";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Note } from "../../types/types";
import '../../styles/notes.css';

interface NoteListProps {
    notes: Note[];
    onDelete: (id: string) => void;
    page: number;
    pageSize: number;
    onPageChange: (page: number, pageSize?: number) => void;
}

const NoteList = ({
    notes,
    onDelete,
    page,
    pageSize,
    onPageChange
}: NoteListProps) => {

    const paginatedNotes = useMemo(() => {
        return notes.slice((page - 1) * pageSize, page * pageSize);
    }, [notes, page, pageSize]);

    return (
        <>
            <List
                itemLayout="horizontal"
                dataSource={paginatedNotes}
                renderItem={note => (
                    <List.Item
                        actions={[
                            <Link to={`/note/${note.id}`}>Edit</Link>,
                            <Button type="link" onClick={() => onDelete(note.id)}>Delete</Button>
                        ]}
                        className="note-list-item"
                    >
                        <List.Item.Meta
                            title={<Link to={`/note/${note.id}`}>{note.title}</Link>}
                            description={note.content}
                        />
                    </List.Item>
                )}
                className="note-list-item"
            />
            <Pagination
                current={page}
                pageSize={pageSize}
                total={notes.length}
                onChange={onPageChange}
                className="note-list-pagination"
            />
        </>
    )
};

export default NoteList;