import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesinital = [
    {
      _id: "65d6ee86891e07912030d4fe",
      user: "65d347c87394510f12a483ec",
      title: "My title",
      description: "Please wakeup early !",
      tag: "personal",
      date: "2024-02-22T06:49:42.813Z",
      __v: 0,
    },

    {
      _id: "65d6ee86891e07912030d4fe1",
      user: "65d347c87394510f12a483ec",
      title: "My title",
      description: "Please wakeup early !",
      tag: "personal",
      date: "2024-02-22T06:49:42.813Z",
      __v: 0,
    },

    {
      _id: "65d6ee86891e07912030d4fe2",
      user: "65d347c87394510f12a483ec",
      title: "My title",
      description: "Please wakeup early !",
      tag: "personal",
      date: "2024-02-22T06:49:42.813Z",
      __v: 0,
    },

    {
      _id: "65d6ee86891e07912030d4fe3",
      user: "65d347c87394510f12a483ec",
      title: "My title",
      description: "Please wakeup early !",
      tag: "personal",
      date: "2024-02-22T06:49:42.813Z",
      __v: 0,
    },
    {
      _id: "65d6ee86891e07912030d4fe4",
      user: "65d347c87394510f12a483ec",
      title: "My title",
      description: "Please wakeup early !",
      tag: "personal",
      date: "2024-02-22T06:49:42.813Z",
      __v: 0,
    },
    {
      _id: "65d6ee86891e07912030d4fe5",
      user: "65d347c87394510f12a483ec",
      title: "My title",
      description: "Please wakeup early !",
      tag: "personal",
      date: "2024-02-22T06:49:42.813Z",
      __v: 0,
    },
    {
      _id: "65d6ee86891e07912030d4fe6",
      user: "65d347c87394510f12a483ec",
      title: "My title",
      description: "Please wakeup early !",
      tag: "personal",
      date: "2024-02-22T06:49:42.813Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesinital);
  //Add a Note
  const addNote = (title, description, tag) => {
    //TODO:API Call
    console.log("Adding a new note")
   const note = {
      _id: "65d6ee86891e07912030d4fe6",
      user: "65d347c87394510f12a483ec4",
      title: "My title:Added",
      description: "Please wakeup early[added] !",
      tag: "personal",
      date: "2024-02-22T06:49:42.813Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  //Delete a Note
  const deleteNote = () => {
   
  };
  //Edit a Note
  const editNote = () => {};

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
