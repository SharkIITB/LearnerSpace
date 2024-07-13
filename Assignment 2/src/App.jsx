import React, { useState } from 'react';
import Note from './components/Note';
import NoteForm from './components/NoteForm';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSaveNote = (note) => {
    if (currentNote) {
      setNotes(notes.map(n => n.id === note.id ? note : n));
      setCurrentNote(null);
    } else {
      setNotes([...notes, note]);
    }
  };

  const handleEditNote = (note) => {
    setCurrentNote(note);
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const handleCancelEdit = () => {
    setCurrentNote(null);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="container">
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <h1>Google Keep Clone</h1>
      <button onClick={toggleTheme}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <NoteForm
        currentNote={currentNote}
        onSave={handleSaveNote}
        onCancel={handleCancelEdit}
      />
      <div className="notes-list">
        {notes.map(note => (
          <Note
            key={note.id}
            note={note}
            onEdit={handleEditNote}
            onDelete={handleDeleteNote}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default App;

