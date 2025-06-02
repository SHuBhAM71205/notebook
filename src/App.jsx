import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import AddNoteContext, { AddNoteProvider } from './context/addNoteContext'
import NoteContext from './context/noteContext'
import AuthForm from './components/AuthForm'

const URL = import.meta.env.VITE_backend;


function App() {
  const [notes, setNotes] = useState([]);
  
  
  const updateNotes = async(id,title,description) => {
    
    const fetchData=await fetch(`${URL}api/notes/updatenotes/${id}`,{
      method:"PUT",
      headers:{
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem("auth-token")
      },
      body:JSON.stringify({
        "title":title,
        "description":description
      })
    })
    location.reload(true);
  }

  const deleteNote = async (id) => {
    setNotes((Note) => Note.filter(note => note._id !== id));
    const responce = await fetch(`${URL}api/notes/deletenotes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem("auth-token")
      },

    })

  }

  const getallNotes = async () => {

    const responce = await fetch(`${URL}api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem("auth-token")
      }
    });
    const data = await responce.json();
    console.log(data);
    setNotes(data);
  }

  const addNote = async (title, discription) => {

  
    try {
      const fetchdata = await fetch(`${URL}api/notes/addnotes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token")
        },
        body:JSON.stringify( {
          "title": title,
          "description": discription,
          
        })
      })
    } catch (error) {
      console.log(error, fetchdata.json())
    }
    location.reload(true);
  }

  return (
    <AddNoteProvider>

      <NoteContext.Provider value={{ notes, setNotes: updateNotes, addNote, getallNotes, deleteNote }}>
        <Router>
          <div className={`App min-vh-100`} style={{ transition: 'background-color 0.3s ease' }}>
            <Navbar />
            <div className="container py-4">
              <Routes>
                <Route path="/" element={
                  <Home />
                } />
                <Route path="/about" element={
                  <About />
                } />
                <Route path="/AuthForm" element={
                    <AuthForm/>
                } />
                
                <Route path="*" element={
                  <div className="text-center">
                    <h2>404 Not Found</h2>
                    <p>The page you are looking for does not exist.</p>
                  </div>
                } />
              </Routes>
            </div>
          </div>

        </Router>
      </NoteContext.Provider>
    </AddNoteProvider>

  )
}

export default App
