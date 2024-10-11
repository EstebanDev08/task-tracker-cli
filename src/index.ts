// eslint-disable-next-line no-console

import { GetTaskUseCase } from './task/app/getTask/getTask';
import { InJsonFileStorageTaskImpl } from './task/infrastructure/task.impl';

const i = new InJsonFileStorageTaskImpl();

const usea = new GetTaskUseCase(i);

(async () => {
  const a = await usea.run('todo');

  // eslint-disable-next-line no-console
  console.log(a);
})();
