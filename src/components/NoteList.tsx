import React from "react";
import { NoteObj } from "../modals/note";
import {
  Box,
  Button,
  Card,
  CardContent,
  InputBase,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
interface iNoteProps {
  note: NoteObj;
  handleDelete: (id: number) => void;
  handleEdit: (id: number) => void;
  handleCancelEdit: () => void;
  onValueChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  editIndex: number;
  editText: string;
  handleSaveEdit: (id: number) => void;
}

const StyleCard = styled(Card)`
  margin: 15px;
  width: 300px;
  borderradius: 10px;
`;

const Wrapper = styled(Box)`
  color: #cccccc;
  & > button {
    margin-top: 10px;
    background: #ffffff;
  }
  & > div > input[type="text"] {
    border-bottom: 1px solid #111111;
    opacity: 0.4;
    width: 300px;
    padding-right: 25px;
  }
`;

const NoteList: React.FC<iNoteProps> = ({
  note,
  handleDelete,
  handleEdit,
  handleCancelEdit,
  onValueChange,
  editIndex,
  editText,
  handleSaveEdit,
}) => {
  const handleDeleteNote = (id: number) => {
    handleDelete(id);
  };

  const handleEditNote = (id: number) => {
    handleEdit(id);
  };

  const handleCancelEditNote = () => {
    handleCancelEdit();
  };

  return (
    <>
      <StyleCard style={{ backgroundColor: note.color }}>
        <CardContent>
          {editIndex === note.id ? (
            <>
              <Wrapper>
                <InputBase
                  type="text"
                  value={editText}
                  onChange={onValueChange}
                  className="w-[200px]"
                />
                <Button
                  variant="outlined"
                  onClick={() => handleSaveEdit(note.id)}
                >
                  Save
                </Button>
                <Button variant="outlined" onClick={handleCancelEditNote}>
                  Cancel
                </Button>
              </Wrapper>
            </>
          ) : (
            <Wrapper>
              <Typography>{note.title}</Typography>
              <Typography>{note.details}</Typography>
              <Typography>{note.date}</Typography>
              <Button
                onClick={() => handleDeleteNote(note.id)}
                variant="outlined"
              >
                Delete
              </Button>
              <Button
                onClick={() => handleEditNote(note.id)}
                variant="outlined"
              >
                Edit
              </Button>
            </Wrapper>
          )}
        </CardContent>
      </StyleCard>
    </>
  );
};

export default NoteList;
