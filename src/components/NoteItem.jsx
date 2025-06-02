import React, { useContext, useState } from 'react';
import NoteContext from '../context/noteContext';

export default function NoteItem({ note }) {
    const { deleteNote,setNotes } = useContext(NoteContext);
   
    const [editMode, setEditMode] = useState(false);
    const [editedNote, setEditedNote] = useState({ title: note.title, description: note.description });

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this note?")) {
            deleteNote(note._id);
        }
    };

    const handleEditToggle = () => {
        setEditMode(true);
    };

    const handleChange = (e) => {
        setEditedNote({ ...editedNote, [e.target.name]: e.target.value });
    };

    const handleUpdate = () => {
        setNotes(note._id, editedNote.title, editedNote.description);
        setEditMode(false);
    };

    const handleCancel = () => {
        setEditMode(false);
        setEditedNote({ title: note.title, description: note.description });
    };

    return (
        <div className="note-item card shadow-sm mb-3" style={{ zIndex: 1, position: "relative" }}>
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex align-items-center mb-2 w-100 justify-content-between">
                    <div className="d-flex align-items-center">
                        <i className="bi bi-sticky me-2"></i>
                        
                        {editMode ? (
                            <>
                            <label class="">title:</label>
                            <input
                                type="text"
                                name="title"
                                value={editedNote.title}
                                onChange={handleChange}
                                className="form-control form-control-sm"
                            />
                            </>
                        ) : (
                            <h5 className="card-title fw-bold mb-0" onClick={handleEditToggle} style={{ cursor: 'pointer' }}>
                                {note.title}
                            </h5>
                        )}
                    </div>
                    <div>
                        {editMode ? (
                            <>
                                <button className="btn btn-success btn-sm me-1" onClick={handleUpdate}>Save</button>
                                <button className="btn btn-secondary btn-sm" onClick={handleCancel}>Cancel</button>
                            </>
                        ) : (
                            <>
                                <button className="btn btn-primary btn-sm me-1" title="Edit" onClick={handleEditToggle}>
                                    <i className="fa fa-pencil-square"></i>
                                </button>
                                <button className="btn btn-danger btn-sm me-1" title="Delete" onClick={handleDelete}>
                                    <i className="fa fa-trash"></i>
                                </button>
                            </>
                        )}
                    </div>
                </div>
                {editMode ? (
                    <>
                        <label>Description:</label>
                    <textarea
                        name="description"
                        value={editedNote.description}
                        onChange={handleChange}
                        className="form-control"
                        rows="3"
                    />
                
                        </>
                    ) : (

                    <p className="card-text text-muted w-100" onClick={handleEditToggle} style={{ cursor: 'pointer' }}>
                        {note.description}
                    </p>
                )}
            </div>
        </div>
    );
}
