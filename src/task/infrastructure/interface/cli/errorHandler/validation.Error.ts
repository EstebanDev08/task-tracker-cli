/* eslint-disable no-console */
import { ValidationError } from '#src/shared/errors/validation/validation';
import { TaskDescriptionError } from '#src/task/domain/errors/description';
import { TaskIdError } from '#src/task/domain/errors/id.error';
import { TaskStusError } from '#src/task/domain/errors/Status.error';

export const validationErrorHandler = (error: ValidationError) => {
  if (error instanceof TaskDescriptionError) {
    console.error(error.name + ': ' + error.message);
    return process.exit(1);
  }
  if (error instanceof TaskStusError) {
    console.error(error.name + ': ' + error.message);
    return process.exit(1);
  }
  if (error instanceof TaskIdError) {
    console.error(error.name + ': ' + error.message);
    return process.exit(1);
  }
};
