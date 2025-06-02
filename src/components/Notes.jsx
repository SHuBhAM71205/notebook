import React,{useEffect, useContext} from 'react'
import NoteItem from './NoteItem'; // Assuming NoteItem is in the same directory
import AddNoteContext from '../context/addNoteContext';
import EditOrAddNote from './EditOrAddNote'; // Assuming EditOrAddNote is in the same directory
import NoteContext from '../context/noteContext';
export default function Notes() {
    const context = useContext(NoteContext);
    const {notes ,getallNotes} = context;
    
    const contextofShowAddNote = useContext(AddNoteContext);
    const { showAddNote, setShowAddNote } = contextofShowAddNote;

    useEffect(() => {
        getallNotes();
    }, []);

    return (
        <div className='note-list container mt-5 flex flex-column align-items-center' style={{ position: 'relative', zIndex: 100 }}>
            {
                <ul className="list-group" style={{ width: '100%', position : 'relative', zIndex: 1 }}>
                    {
                        notes.map((note) => (
                            <NoteItem key={note._id} note={note} />
                        ))
                    }
                </ul>
            }
            
            {showAddNote && <EditOrAddNote />}
        </div>
    )
}

