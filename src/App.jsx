// App.jsx
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Lógica para mostrar un mensaje cuando cambie el estado de las tareas
    console.log('Estado de tareas actualizado:', tasks);
  }, [tasks]);

  const handleComplete = (taskId) => {
    // Lógica para marcar una tarea como completada
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (taskId) => {
    // Lógica para eliminar una tarea
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = (taskName) => {
    // Lógica para agregar una nueva tarea
    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <TaskForm handleAddTask={handleAddTask} />
      <TaskList tasks={tasks} handleComplete={handleComplete} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
