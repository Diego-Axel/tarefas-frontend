// src/components/TaskForm.jsx
import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return; // Não adiciona tarefa vazia
    onAddTask(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Adicionar nova tarefa..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ flexGrow: 1, padding: '8px' }}
      />
      <button type="submit" style={{ padding: '8px' }}>Adicionar</button>
    </form>
  );
}

export default TaskForm;