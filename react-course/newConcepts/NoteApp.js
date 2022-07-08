import React, { useEffect, useReducer } from "react";
import { notesReducer } from "../reducers/notes";
import NoteList from "./NoteList";
import AddNoteForm from "./AddNoteForm";
import NotesContext from "../context/notes-context";

export const App = () => {
  // const [notes, setNotes] = useState(
  //   JSON.parse(localStorage.getItem("notes")) || []
  // );

  const notesStorage = JSON.parse(localStorage.getItem("notes"))
    ? JSON.parse(localStorage.getItem("notes"))
    : [];

  // second argument is the initialState
  const [notes, notesDispatch] = useReducer(notesReducer, notesStorage); // returns an array with the state and a dispatch function

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
    <NotesContext.Provider value={{ notes, notesDispatch }}>
      <NoteList />
      <AddNoteForm />
    </NotesContext.Provider>
  );
};

export default App;

// useEffect (like componentDidMount)
// can be used as many times as we want to
// Runs after render happens
// Runs after every render
// It can run without an array of dependencies, when any of the props or states changes
// Return clears the effect
// When the array of dependencies is empty, it will run on mount once
// Whatever we add to the dependencies array, it will trigger the useEffect when it changes
