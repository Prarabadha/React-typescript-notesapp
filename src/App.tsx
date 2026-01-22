import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import CreateNote from "./components/CreateNote";
import { Box } from "@mui/material";
import Notes from "./components/Notes";
import { NoteObj } from "./modals/note";

const App = () => {
  const [notes, setNotes] = useState<NoteObj[]>([]);
  const [editIndex, setEditIndex] = useState<number>(0);
  const [editText, setEditText] = useState<string>("");

  useEffect(() => {
    if (sessionStorage.getItem("notes")) {
      setNotes(JSON.parse(sessionStorage.getItem("notes") as string));
    }
  }, []);

  const addNotes = (note: NoteObj) => {
    setNotes([note, ...notes]);
    sessionStorage.setItem("notes", JSON.stringify([note, ...notes]));
  };

  const handleDelete = (id: number) => {
    const isDelete = notes.filter((note) => note.id !== id);
    setNotes(isDelete);
    sessionStorage.setItem("notes", JSON.stringify(isDelete));
  };

  const handleEdit = (id: number) => {
    const index = notes.findIndex((note) => note.id === id);
    const indexId = notes[index].id;
    setEditIndex(indexId);
    setEditText(notes[index].details);
  };

  const handleCancelEdit = () => {
    setEditIndex(0);
    setEditText("");
  };

  const onValueChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setEditText(e.target.value);
  };

  const handleSaveEdit = (id: number) => {
    const isIndex = notes.findIndex((note) => note.id === id);
    const updatedNotes = [...notes];
    updatedNotes[isIndex].details = editText;
    setNotes(updatedNotes);
    sessionStorage.setItem("notes", JSON.stringify(updatedNotes));
    setEditIndex(0);
    setEditText("");
  };

  return (
    <>
      <Header />
      <Box style={{ padding: "20px" }}>
        <CreateNote addNotes={addNotes} />
        <Notes
          notes={notes}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleCancelEdit={handleCancelEdit}
          onValueChange={onValueChange}
          editIndex={editIndex}
          editText={editText}
          handleSaveEdit={handleSaveEdit}
        />
      </Box>
    </>
  );
};

export default App;
