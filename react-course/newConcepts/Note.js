import React, { useEffect, useContext } from "react";
import NotesContext from "../context/notes-context";
import useMousePosition from "../hooks/useMousePosition";

export const Note = ({ note }) => {
  const { notesDispatch } = useContext(NotesContext);

  const position = useMousePosition();

  useEffect(() => {
    console.log("Setting up effect");

    return () => {
      console.log("Cleaning up effect");
    };
  }, []);

  return (
    <>
      <p>Title: {note.title}</p>
      <p>Description: {note.body}</p>
      <p>
        {position.x} , {position.y}
      </p>
      <button onClick={() => notesDispatch({ type: "REMOVE_NOTE", note })}>
        Remove
      </button>
    </>
  );
};
