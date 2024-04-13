import React from "react";
import Note from "./Note";
import { Note as NoteType } from "../models/Note";

interface NotesListProps {
  notes: NoteType[];
  onEdit?: (note: NoteType | null) => void; // Adjust the type to accept null for new notes
  onDelete?: (_id: string) => void;
}

function NotesList({ notes, onEdit, onDelete }: NotesListProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",  // Changed to column to stack notes vertically
        alignItems: "center",     // Center aligns the child divs
      }}
    >
      {notes.map((note, index) => (
        <div
          key={index}
          style={{ width: "100%", marginBottom: "16px" }} // Changed width to 100% for full width
        >
          <Note
            note={note}
            onEdit={onEdit ? () => onEdit(note) : undefined} // Check if onEdit is defined before calling
            onDelete={onDelete ? () => onDelete(note._id) : undefined} // Check if onDelete is defined before calling
          />
        </div>
      ))}
    </div>
  );
}

export default NotesList;
