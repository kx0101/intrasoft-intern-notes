import React, { useState, useEffect, useReducer } from "react";

const notesReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE_NOTES": {
      return action.notes;
    }
    case "ADD_NOTE": {
      return [...state, action.note];
    }
    case "REMOVE_NOTE": {
      return state.filter((note) => note !== action.note);
    }
    default:
      return state;
  }
};

const App = () => {
  // const [notes, setNotes] = useState(
  //   JSON.parse(localStorage.getItem("notes")) || []
  // );

  const notesStorage = JSON.parse(localStorage.getItem("notes"))
    ? JSON.parse(localStorage.getItem("notes"))
    : [];

  // second argument is the initialState
  const [notes, notesDispatch] = useReducer(notesReducer, notesStorage); // returns an array with the state and a dispatch function

  const [note, setNote] = useState({
    title: "",
    body: "",
  });

  const addNote = (e) => {
    e.preventDefault();
    // setNotes([...notes, note]);
    notesDispatch({
      type: "ADD_NOTE",
      note,
    });
    setNote({
      title: "",
      body: "",
    });
  };

  const removeNote = (deletedNote) => {
    // setNotes(notes.filter((note) => note !== deletedNote));
    notesDispatch({
      type: "REMOVE_NOTE",
      note: deletedNote,
    });
  };

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));

    if (notes) {
      notesDispatch({ type: "POPULATE_NOTES", notes });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div>
      <h1>Notes</h1>
      <p>Add Note</p>
      {notes.map((note) => {
        return <Note key={note.title} note={note} removeNote={removeNote} />;
      })}
      <form onSubmit={(e) => addNote(e)}>
        <input
          value={note.title}
          onChange={(e) => setNote({ ...note, title: e.target.value })}
        />
        <textarea
          value={note.body}
          onChange={(e) => setNote({ ...note, body: e.target.value })}
        ></textarea>
        <button>Add note</button>
      </form>
    </div>
  );
};

export default App;

const Note = ({ note, removeNote }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    console.log(isMounted);
    return () => {
      setIsMounted(false);
      console.log(isMounted);
    };
  }, [isMounted]);

  return (
    <>
      <p>{note.title}</p>
      <p>{note.body}</p>
      <button onClick={() => removeNote(note)}>Remove</button>
    </>
  );
};

// useEffect (like componentDidMount)
// can be used as many times as we want to
// Runs after render happens
// Runs after every render
// It can run without an array of dependencies, when any of the props or states changes
// Return clears the effect
// When the array of dependencies is empty, it will run on mount once
// Whatever we add to the dependencies array, it will trigger the useEffect when it changes
