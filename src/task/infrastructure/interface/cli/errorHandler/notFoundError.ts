/* eslint-disable no-console */
import { NotFoundError } from '#src/shared/errors/validation/notfound';
import { TaskNotFounInJsonFile } from '#src/task/infrastructure/repository/jsonFileStorageImpl/errors/notFoundTask';

export const notFoundErrorHandler = (error: NotFoundError) => {
  if (error instanceof TaskNotFounInJsonFile) {
    console.error(error.name + ': ' + error.message);
    return process.exit(1);
  }
};
