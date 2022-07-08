import React, { useState, useContext } from "react";
import NotesContext from "../context/notes-context";

const AddNoteForm = () => {
  const { notesDispatch } = useContext(NotesContext);

  const [note, setNote] = useState({
    title: "",
    body: "",
  });

  return (
    <form onSubmit={(e) => notesDispatch({ type: "ADD_NOTE", note })}>
      <p>Title</p>
      <input
        value={note.title}
        onChange={(e) => setNote({ ...note, title: e.target.value })}
      />
      <p>Description</p>
      <textarea
        value={note.body}
        onChange={(e) => setNote({ ...note, body: e.target.value })}
      ></textarea>
      <button>Add note</button>
    </form>
  );
};

export default AddNoteForm;
