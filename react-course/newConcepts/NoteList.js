import React, { useContext } from "react";
import { Note } from "./Note";
import NotesContext from "../context/notes-context";

const NoteList = () => {
  const { notes } = useContext(NotesContext);

  return (
    <>
      <h1>Notes</h1>
      <p>Add Note</p>
      {notes.map((note) => {
        return <Note key={note.title} note={note} />;
      })}
    </>
  );
};

export default NoteList;
