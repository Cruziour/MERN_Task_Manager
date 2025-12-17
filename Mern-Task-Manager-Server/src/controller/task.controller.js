import { Task } from '../models/task.model.js';
import { ApiError, ApiResponse, asyncHandler } from '../utils/index.js';

const getAllTasks = asyncHandler(async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    if (!tasks) {
      throw new ApiError(500, 'Database query failed to return data.');
    }
    return res.status(200).json(new ApiResponse(200, tasks, 'Tasks retrieved successfully'));
  } catch (error) {
    throw new ApiError(500, `Internal Server error: ${error.message}`);
  }
});

const createNewTask = asyncHandler(async (req, res) => {
  const { title } = req.body;
  if (!title || title === '') {
    throw new ApiError(401, 'Please fill Task title.');
  }
  try {
    const newTask = new Task({ title });
    const task = await newTask.save();
    if (!task) {
      throw new ApiError(500, 'Server error');
    }
    return res.status(201).json(new ApiResponse(201, task, 'Task saved successfully.'));
  } catch (error) {
    throw new ApiError(500, `Failed to add task: ${error.message}`);
  }
});

const deleteTask = asyncHandler(async (req, res) => {
  const taskId = req.params.id;
  if (!taskId || taskId === '') {
    throw new ApiError(401, 'Please provide task id.');
  }
  try {
    const deletedTask = await Task.findByIdAndDelete(taskId);
    if (!deletedTask) {
      throw new ApiError(404, 'Task not found');
    }
    return res.status(200).json(new ApiResponse(200, { id: taskId }, 'Task deleted successfully'));
  } catch (error) {
    if (error.name === 'CastError') {
      throw new ApiError(400, 'Invalid Task ID format');
    }
    throw new ApiError(500, `Failed to delete task: ${error.message}`);
  }
});

export { getAllTasks, createNewTask, deleteTask };
