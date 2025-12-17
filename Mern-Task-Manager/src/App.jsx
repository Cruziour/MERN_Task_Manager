import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { createTaskService, deleteTaskByIdService, getAllTaskService } from './services/index.js';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getAllTaskService();
      if (!response.success) {
        alert('Some error occurs when task load.');
        return;
      }
      setTasks(response.data);
    } catch (err) {
      console.error('Fetch Error:', err);
      setError('Failed to load tasks. Please check the backend connection.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (title) => {
    setError(null);
    try {
      setLoading(true);
      const response = await createTaskService({ title });
      setTasks([response.data, ...tasks]);
      setLoading(false);
    } catch (err) {
      console.error('Add Task Error:', err.response ? err.response.data.message : err.message);
      setError(err.response ? err.response.data.message : 'Failed to add task.');
      setLoading(false);
    }
  };

  const deleteTask = async (id) => {
    setError(null);
    try {
      setTasks(tasks.filter((task) => task._id !== id));
      const response = await deleteTaskByIdService(id);
      if (!response.success) {
        alert('Some error when delete task');
        return;
      }
      fetchTasks();
    } catch (err) {
      console.error('Delete Error:', err);
      setError('Failed to delete task.');
      fetchTasks();
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 p-4 md:p-8 transition-colors duration-300">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center tracking-tight">
          <span className="text-blue-500">📝 MERN</span> Task Manager
        </h1>

        <TaskForm addTask={addTask} />
        {error && (
          <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
            <span className="font-medium">Error:</span> {error}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center mt-10">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-500"></div>
          </div>
        ) : (
          <TaskList tasks={tasks} deleteTask={deleteTask} />
        )}
      </div>
    </div>
  );
}

export default App;
