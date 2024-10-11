/* eslint-disable no-console */

import { AddTaskUseCase } from './task/app/addTask/addTask';
import { GetTaskUseCase } from './task/app/getTask/getTask';
import { InJsonFileStorageTaskImpl } from './task/infrastructure/task.impl';

const i = new InJsonFileStorageTaskImpl();

const usea = new GetTaskUseCase(i);
const create = new AddTaskUseCase(i);

(async () => {
  await create.run({ description: 'test' });
  const a = await usea.run('todo');
  console.log(a);
})();
