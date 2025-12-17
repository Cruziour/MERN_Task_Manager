import { Router } from 'express';
import { createNewTask, deleteTask, getAllTasks } from '../controller/task.controller.js';

const router = Router();

router.route('/tasks').post(createNewTask).get(getAllTasks);
router.route('/tasks/:id').delete(deleteTask);

export default router;
