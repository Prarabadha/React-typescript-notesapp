import { useState } from "react";
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
  const [currentPage, setCurrentPage] = useState(1);
  const notesPerPage = 6;

  const totalPages = Math.ceil(notes.length / notesPerPage);
  const startIndex = (currentPage - 1) * notesPerPage;
  const endIndex = startIndex + notesPerPage;
  const paginatedNotes = notes.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="animate-fadeIn w-full">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 md:mb-4 mt-4 md:mt-6">
          📝 Your Notes
        </h2>
        <input
          type="search"
          placeholder="Search notes..."
          className="w-full md:w-[300px] p-2 border border-gray-300 rounded-lg text-sm md:text-base"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      {notes.length === 0 ? (
        <div className="text-center py-12 sm:py-16 text-gray-400 h-[400px] flex flex-col justify-center items-center gap-4">
          <p className="text-base sm:text-lg font-medium">
            No notes yet. Create one to get started! ✨
          </p>
        </div>
      ) : (
        <>
          {/* Notes Grid */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 py-4 sm:py-5 animate-slideUp">
              {paginatedNotes.map((note) => (
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
          </div>

          {/* Pagination Controls */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:px-0">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-blue-500 text-white text-sm sm:text-base rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-200 font-medium"
            >
              ← Prev
            </button>

            <span className="text-gray-700 font-semibold text-sm sm:text-base px-2 py-2 sm:py-0 bg-gray-100 rounded-lg sm:bg-transparent">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-blue-500 text-white text-sm sm:text-base rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-200 font-medium"
            >
              Next →
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Notes;
