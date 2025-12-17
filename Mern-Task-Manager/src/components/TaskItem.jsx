import React from 'react';

const TaskItem = ({ task, deleteTask }) => {
  return (
    <li className="flex justify-between items-center p-5 mb-4 bg-slate-900 border-l-4 border-blue-600 rounded-xl shadow-md hover:bg-slate-800/80 transition-all group">
      <div className="flex flex-col">
        <span className="text-lg font-medium text-slate-100 group-hover:text-blue-400 transition-colors">
          {task.title}
        </span>
        <span className="text-xs text-slate-500 mt-1 uppercase tracking-wider">
          {new Date(task.createdAt).toLocaleDateString()}
        </span>
      </div>
      <button
        onClick={() => deleteTask(task._id)}
        className="opacity-100 group-hover:opacity-100 bg-red-500 hover:bg-red-800 text-white hover:text-white p-2 px-4 rounded-lg text-sm font-bold border border-red-500/20 transition-all duration-200"
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
