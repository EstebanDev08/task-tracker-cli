import { AddTaskUseCase } from '#src/task/app/addTask/addTask';

import { InJsonFileStorageTaskImpl } from '../../repository/jsonFileStorageImpl/InJsonFileStoragetask.impl';

import { AddTaskCliManager } from './addTask/handleAddTask';

const inJsonFileStorage = new InJsonFileStorageTaskImpl();

const addTaskUseCase = new AddTaskUseCase(inJsonFileStorage);

export const addTaskCliManager = new AddTaskCliManager(addTaskUseCase);
