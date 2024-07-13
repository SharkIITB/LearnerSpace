import React, { useState, useEffect } from 'react';

const NoteForm = ({ currentNote, onSave, onCancel }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title);
      setContent(currentNote.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [currentNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, content, id: currentNote ? currentNote.id : new Date().getTime() });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <button type="submit">{currentNote ? 'Update' : 'Add'}</button>
      {currentNote && <button onClick={onCancel}>Cancel</button>}
    </form>
  );
};

export default NoteForm;
