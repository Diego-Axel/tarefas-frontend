// src/App.jsx
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import api from './services/api'; // Nosso cliente Axios
import './index.css';

function App() {
  const [tasks, setTasks] = useState([]);

  // Função para buscar tarefas da API
  const fetchTasks = async () => {
    try {
      const response = await api.get('/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
    }
  };
  
  // useEffect para buscar as tarefas quando o componente montar
  useEffect(() => {
    fetchTasks();
  }, []);

  // Adicionar uma nova tarefa
  const handleAddTask = async (title) => {
    try {
      const response = await api.post('/tasks', { title });
      setTasks([...tasks, response.data]); // Adiciona a nova tarefa ao estado local
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
    }
  };

  // Deletar uma tarefa
  const handleDeleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      setTasks(tasks.filter(task => task._id !== id)); // Remove a tarefa do estado local
    } catch (error) {
      console.error("Erro ao deletar tarefa:", error);
    }
  };

  // Marcar/desmarcar como completa
  const handleToggleComplete = async (taskToUpdate) => {
    try {
      const updatedTask = { ...taskToUpdate, completed: !taskToUpdate.completed };
      const response = await api.put(`/tasks/${taskToUpdate._id}`, { completed: updatedTask.completed });
      setTasks(tasks.map(task => (task._id === taskToUpdate._id ? response.data : task)));
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
    }
  };

  return (
    <div className="app-container">
      <h1>Gerenciador de Tarefas</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onDelete={handleDeleteTask}
        onToggleComplete={handleToggleComplete}
      />
    </div>
  );
}

export default App;