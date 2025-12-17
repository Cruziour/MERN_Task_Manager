import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask }) => {
  if (tasks.length === 0) {
    return (
      <p className="text-center text-xl text-gray-600 p-10 bg-white rounded-lg shadow">
        No tasks yet! Start adding one above.
      </p>
    );
  }

  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} deleteTask={deleteTask} />
      ))}
    </ul>
  );
};

export default TaskList;
