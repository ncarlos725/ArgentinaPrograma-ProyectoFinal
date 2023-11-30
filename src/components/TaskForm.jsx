// TaskForm.jsx
import React, { useState } from 'react';

const TaskForm = ({ handleAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() !== '') {
      handleAddTask(taskName);
      setTaskName('');
    }
  };

  return (
    <div>
      <h2>Agregar Nueva Tarea</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de la tarea"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default TaskForm;
