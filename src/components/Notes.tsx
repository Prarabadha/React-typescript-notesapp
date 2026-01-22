import { Box, Typography } from "@mui/material";
import { NoteObj } from "../modals/note";
import NoteList from "./NoteList";

interface noteListProps {
  notes: NoteObj[];
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

const Notes: React.FC<noteListProps> = ({
  notes,
  handleDelete,
  handleEdit,
  handleCancelEdit,
  onValueChange,
  editIndex,
  editText,
  handleSaveEdit,
}) => {
  return (
    <>
      <Box>
        <Typography variant="h5">Notes</Typography>
        <Box>
          {notes.map((note) => (
            <NoteList
              note={note}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleCancelEdit={handleCancelEdit}
              onValueChange={onValueChange}
              editIndex={editIndex}
              editText={editText}
              handleSaveEdit={handleSaveEdit}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Notes;
