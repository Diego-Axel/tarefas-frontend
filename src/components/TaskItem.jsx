// src/components/TaskItem.jsx
import React from 'react';

function TaskItem({ task, onDelete, onToggleComplete }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px', borderBottom: '1-px solid #ccc' }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task)}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none', flexGrow: 1 }}>
        {task.title}
      </span>
      <button onClick={() => onDelete(task._id)}>Deletar</button>
    </div>
  );
}

export default TaskItem;