import React from 'react';

const Note = ({ note, onEdit, onDelete }) => {
  return (
    <div className="note">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={() => onEdit(note)}>Edit</button>
      <button onClick={() => onDelete(note.id)}>Delete</button>
    </div>
  );
};

export default Note;
