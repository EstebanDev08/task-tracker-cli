import { AddTaskUseCase } from '#src/task/app/addTask/addTask';
import { EditTaskUseCase } from '#src/task/app/editTask/editTask';

import { InJsonFileStorageTaskImpl } from '../../repository/jsonFileStorageImpl/InJsonFileStoragetask.impl';

import { AddTaskCliManager } from './addTask/handleAddTask';
import { UpdateTaskCliManager } from './updateTask/handleAddTask';

const inJsonFileStorage = new InJsonFileStorageTaskImpl();

const addTaskUseCase = new AddTaskUseCase(inJsonFileStorage);
const editTaskUseCase = new EditTaskUseCase(inJsonFileStorage);

export const addTaskCliManager = new AddTaskCliManager(addTaskUseCase);
export const updateTaskCliManager = new UpdateTaskCliManager(editTaskUseCase);
