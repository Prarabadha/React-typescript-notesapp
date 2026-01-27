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
  setSearchValue: (value: string) => void;
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
  setSearchValue,
}) => {
  return (
    <div className="animate-fadeIn">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-6">
          📝 Your Notes
        </h2>
        <input
          type="search"
          placeholder="Search notes..."
          className="w-[300px] p-2 border border-gray-300 rounded-lg mt-4"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      {notes.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="text-lg font-medium">
            No notes yet. Create one to get started! ✨
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 py-5 animate-slideUp">
          {notes.map((note) => (
            <NoteList
              key={note.id}
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
        </div>
      )}
    </div>
  );
};

export default Notes;
