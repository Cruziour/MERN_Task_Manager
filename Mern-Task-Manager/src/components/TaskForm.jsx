import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (title.trim() === '') {
      setError('Task title cannot be empty.');
      return;
    }

    addTask(title);
    setTitle(''); 
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 p-6 bg-slate-900 border border-slate-800 shadow-2xl rounded-2xl"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="grow p-4 bg-slate-800 border border-slate-700 text-white placeholder-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-8 rounded-xl shadow-lg shadow-blue-900/20 transition-all active:scale-95"
        >
          Add Task
        </button>
      </div>
      {error && <p className="mt-2 text-sm text-red-500 font-medium">{error}</p>}
    </form>
  );
};

export default TaskForm;
