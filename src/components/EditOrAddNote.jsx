import React, { useContext } from 'react'
import './edit.css'
import NoteContext from '../context/noteContext';
import AddNoteContext from '../context/addNoteContext';
import PropTypes from 'prop-types';

export default function EditOrAddNote(props) {
        const context = useContext(NoteContext);
        const { addNote } = context;
        const context2 = useContext(AddNoteContext);
        const { showAddNote, setShowAddNote } = context2;
        const handleSubmit = (e) => {
                e.preventDefault();
              
                const title = document.getElementById('noteTitle').value;
                const content = document.getElementById('noteContent').value;
                if (title && content) {
                        addNote(title,content);
                        setTimeout(() => {
                        setShowAddNote(!showAddNote)
                        }
                        , 1000); // Hide the form after 1 second
                        
                        document.getElementById('noteTitle').value = '';
                        document.getElementById('noteContent').value = '';
                } else {
                        alert("Please fill in all fields.");
                }

                 // Toggle the visibility of the form after submission

        }
        return (
                <>
                        <div className="edit-note-container container mt-5">
                                <h2 className="edit-note-title text-center mb-4">Edit or Add Note</h2>
                                <form className="edit-note-form">
                                        
                                        <div className="mb-3">
                                                <label htmlFor="noteTitle" className="form-label edit-note-label">Title</label>
                                                <input type="text" className="form-control edit-note-input" id="noteTitle" placeholder="Enter note title" />
                                        </div>
                                        <div className="mb-3">
                                                <label htmlFor="noteContent" className="form-label edit-note-label">Content</label>
                                                <textarea className="form-control edit-note-textarea" id="noteContent" rows="3" placeholder="Enter note content"></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary edit-note-button" onClick={handleSubmit}>Save Note</button>
                                </form>
                        </div>
                </>
        )
}

// PropTypes.propTypes = {
//         title: PropTypes.string.isRequired,
//         content: PropTypes.string.isRequired
// };