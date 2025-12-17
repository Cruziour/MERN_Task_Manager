import axiosInstance from '../api/axiosInstance.js';

export const createTaskService = async (payload) => {
  try {
    const { data } = await axiosInstance.post('/tasks', payload);
    return data;
  } catch (error) {
    console.error('createTaskService error:', error.response?.data || error.message);
    throw error;
  }
};
export const getAllTaskService = async () => {
  try {
    const { data } = await axiosInstance.get('/tasks');
    return data;
  } catch (error) {
    console.error('getAllTaskService error:', error.response?.data || error.message);
    throw error;
  }
};
export const deleteTaskByIdService = async (id) => {
  try {
    const { data } = await axiosInstance.delete(`/tasks/${id}`);
    return data;
  } catch (error) {
    console.error('deleteTaskByIdService error:', error.response?.data || error.message);
    throw error;
  }
};
