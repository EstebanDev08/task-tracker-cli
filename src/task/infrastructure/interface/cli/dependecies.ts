import { AddTaskUseCase } from '#src/task/app/addTask/addTask';
import { EditTaskUseCase } from '#src/task/app/editTask/editTask';
import { GetTaskUseCase } from '#src/task/app/getTask/getTask';
import { RemoveTaskUseCase } from '#src/task/app/removeTask/removeTask';

import { InJsonFileStorageTaskImpl } from '../../repository/jsonFileStorageImpl/InJsonFileStoragetask.impl';

import { AddTaskCliManager } from './addTask/handleAddTask';
import { DeleteTaskCliManager } from './deleteTask/handleDeleteTask';
import { ListTasksCliManager } from './listTasks/handleListTask';
import { UpdateTaskCliManager } from './updateTask/handleUpdateTask';

const inJsonFileStorage = new InJsonFileStorageTaskImpl();

const addTaskUseCase = new AddTaskUseCase(inJsonFileStorage);
const editTaskUseCase = new EditTaskUseCase(inJsonFileStorage);
const deleteTaskUseCase = new RemoveTaskUseCase(inJsonFileStorage);
const listTaskUseCase = new GetTaskUseCase(inJsonFileStorage);

export const addTaskCliManager = new AddTaskCliManager(addTaskUseCase);
export const updateTaskCliManager = new UpdateTaskCliManager(editTaskUseCase);
export const removeTaskCliManager = new DeleteTaskCliManager(deleteTaskUseCase);
export const listTaskCliManager = new ListTasksCliManager(listTaskUseCase);
