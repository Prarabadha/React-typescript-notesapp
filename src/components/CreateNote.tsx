import React, { useState } from "react";
import { NoteObj } from "../modals/note";
import { v4 as uuid } from "uuid";

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
      <div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-6">
            💬 Create Notes
          </h2>
        </div>
        <div className="h-[400px] w-[350px] mt-8  bg-gradient-to-br from-white to-[#f8f9ff] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-7 max-w-md">
          <div className="mb-4">
            <label className="text-sm font-semibold text-[#667eea] block mb-2">
              Note Title
            </label>
            <input
              maxLength={30}
              name="title"
              placeholder="Enter your title here..."
              onChange={(e) => onValueChange(e)}
              value={note.title}
              className="w-full bg-transparent border-b-2 border-[#e0e7ff] focus:border-[#667eea] text-gray-800 placeholder-gray-400 focus:outline-none transition-colors duration-300 py-2"
            />
            <span className="text-xs text-gray-400 block mt-1">
              {note.title.length}/30
            </span>
          </div>

          <div className="mb-4">
            <label className="text-sm font-semibold text-[#667eea] block mb-2">
              Note Details
            </label>
            <textarea
              maxLength={50}
              name="details"
              placeholder="Enter your note details here..."
              onChange={(e) => onValueChange(e)}
              value={note.details}
              rows={4}
              className="w-full h-20 bg-transparent border-b-2 border-[#e0e7ff] focus:border-[#667eea] text-gray-800 placeholder-gray-400 focus:outline-none transition-colors duration-300 py-2 resize-none"
            />
            <span className="text-xs text-gray-400 block mt-1">
              {note.details.length}/50
            </span>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <div>
              <label className="text-sm font-semibold text-[#667eea] block mb-2">
                Color
              </label>
              <input
                name="color"
                type="color"
                defaultValue={"#F5F5F5"}
                placeholder="Choose Color"
                onChange={(e) => onValueChange(e)}
                className="w-12 h-10 border-2 border-[#e0e7ff] rounded-lg cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300"
              />
            </div>
            <button
              onClick={onCreateNote}
              className="mt-5 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-semibold px-8 py-2 rounded-lg hover:-translate-y-1 hover:shadow-lg active:translate-y-0 transition-all duration-300 capitalize"
            >
              + Create Note
            </button>
          </div>

          {error && (
            <div className="text-red-500 text-sm mt-4 animate-slideIn">
              {error}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CreateNote;
