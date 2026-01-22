import { Box, Button, InputBase, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import { NoteObj } from "../modals/note";
import { v4 as uuid } from "uuid";

const Container = styled(Box)`
  & > * {
    margin: 21px 20px 20px 0;
  }
  & > div > input[type="text"] {
    border-bottom: 1px solid #111111;
    opacity: 0.4;
    width: 300px;
    padding-right: 25px;
  }
  & > div > input[type="color"] {
    width: 40px;
    height: 30px;
    position: relative;
    bottom: -10px;
  }
  & > span {
    position: relative;
    font-size: 10px;
    right: 40px;
  }
`;

const defaultObj = {
  id: 0,
  title: "",
  details: "",
  color: "",
  date: new Date().toLocaleString().toString(),
};

interface createNoteProps {
  addNotes: (note: NoteObj) => void;
}

const CreateNote: React.FC<createNoteProps> = ({ addNotes }) => {
  const [note, setNote] = useState<NoteObj>(defaultObj);
  const [error, setError] = useState<string>("");

  const onValueChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (error) {
      setError("");
    }
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const onCreateNote = () => {
    if (!note.title || !note.details) {
      setError("Please fill all fields");
      return;
    }
    addNotes({ ...note, id: uuid() });
    setNote(defaultObj);
  };

  return (
    <>
      <Container>
        <InputBase
          name="title"
          placeholder="Title"
          onChange={(e) => onValueChange(e)}
          value={note.title}
        />
        <Box component="span">30</Box>
        <InputBase
          name="details"
          placeholder="Details"
          onChange={(e) => onValueChange(e)}
          value={note.details}
        />
        <Box component="span">50</Box>
        <InputBase
          name="color"
          type="color"
          defaultValue={"#F5F5F5"}
          placeholder="Choose Color"
          onChange={(e) => onValueChange(e)}
        />
        <Button onClick={onCreateNote} variant="outlined">
          Create
        </Button>
        {error && <Typography className="text-red-600">{error}</Typography>}
      </Container>
    </>
  );
};

export default CreateNote;
