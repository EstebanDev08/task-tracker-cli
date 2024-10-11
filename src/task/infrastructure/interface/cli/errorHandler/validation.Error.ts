/* eslint-disable no-console */
import { ValidationError } from '#src/shared/errors/validation/validation';
import { TaskDescriptionError } from '#src/task/domain/errors/description';

export const validationErrorHandler = (error: ValidationError) => {
  if (error instanceof TaskDescriptionError) {
    console.error(error.name + ': ' + error.message);
    return process.exit(1);
  }
};
