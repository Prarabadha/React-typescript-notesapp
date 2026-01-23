import React from "react";
import { NoteObj } from "../modals/note";

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

  const handleSaveEditNote = (id: number) => {
    handleSaveEdit(id);
  };

  return (
    <div
      style={{ backgroundColor: note.color }}
      className="relative w-72  rounded-xl overflow-hidden bg-white border border-black/5 shadow-sm hover:shadow-2xl  transition-all duration-300 mb-3"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#667eea] to-[#764ba2]"></div>
      <div className="p-4 text-[#4b5563]">
        {editIndex === note.id ? (
          <div>
            <h3 className="text-sm font-semibold text-black mb-3">Edit Note</h3>
            <textarea
              maxLength={50}
              value={editText}
              onChange={onValueChange}
              rows={3}
              className="w-full bg-transparent border-b-2 border-[#e0e7ff] focus:border-[#667eea] text-gray-800 placeholder-gray-400 focus:outline-none transition-colors duration-300 py-2 resize-none mb-3"
            />
            <div className="flex gap-2">
              <button
                onClick={() => handleSaveEditNote(note.id)}
                className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-semibold px-4 py-2 rounded text-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center gap-1"
              >
                ✓ Save
              </button>
              <button
                onClick={handleCancelEditNote}
                className="border-2 border-[#e0e7ff] text-gray-700 font-semibold px-4 py-2 rounded text-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center gap-1"
              >
                ✕ Cancel
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-lg font-bold text-black mb-2">{note.title}</h2>
            <p className="text-sm text-black leading-relaxed mb-3 overflow-hidden whitespace-nowrap text-ellipsis">
              {note.details}
            </p>
            <p className="text-xs text-black mb-4">{note.date}</p>
            <div className="flex gap-2">
              <button
                onClick={() => handleEditNote(note.id)}
                className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-semibold px-4 py-2 rounded text-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center gap-1"
              >
                ✎ Edit
              </button>
              <button
                onClick={() => handleDeleteNote(note.id)}
                className="border-2 border-red-200 text-red-600 font-semibold px-4 py-2 rounded text-sm hover:-translate-y-1 hover:bg-red-50 hover:shadow-lg transition-all duration-300 flex items-center gap-1"
              >
                🗑 Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteList;
