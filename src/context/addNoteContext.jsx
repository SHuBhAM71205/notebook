import React,{ createContext } from "react";

const AddNoteContext = createContext();

export default AddNoteContext;
export const AddNoteProvider = ({ children }) => {
    const[showAddNote, setShowAddNote] = React.useState(false);

    return (
        <AddNoteContext.Provider value={{ showAddNote, setShowAddNote }}>
            {children}
        </AddNoteContext.Provider>
    );
};