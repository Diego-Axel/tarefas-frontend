// src/components/TaskList.jsx
import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDelete, onToggleComplete }) {
  if (tasks.length === 0) {
    return <p>Nenhuma tarefa encontrada. Adicione uma!</p>;
  }
  
  return (
    <div>
      {tasks.map(task => (
        <TaskItem
          key={task._id}
          task={task}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
}

export default TaskList;