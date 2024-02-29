import React , { useContext }from 'react'
import noteContext from "../context/notes/noteContext";
import NoteItem from './NoteItem'
import AddNote from "./AddNote";

const Notes = () => {
     const context = useContext(noteContext)
   const{notes,addNote}=context
  return (
    <>
    <AddNote/> 
    <div>
          <div className="row my-1">
        <h1>Your Notes</h1>
        {notes.map((note)=>{
           return <NoteItem key={note.id} note ={note}/>
        }
          )}
      </div>
    </div>
    </>
  )
}

export default Notes