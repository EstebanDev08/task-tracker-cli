import { NotFoundError } from '#src/shared/errors/validation/notfound';
import { ValidationError } from '#src/shared/errors/validation/validation';

import { notFoundErrorHandler } from './notFoundError';
import { validationErrorHandler } from './validation.Error';

export const cliErrorHandler = (error: Error | unknown) => {
  if (error instanceof ValidationError) {
    return validationErrorHandler(error);
  }

  if (error instanceof NotFoundError) {
    return notFoundErrorHandler(error);
  }
};
