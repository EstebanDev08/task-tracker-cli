import { ValidationError } from '#src/shared/errors/validation/validation';

import { validationErrorHandler } from './validation.Error';

export const cliErrorHandler = (error: Error | unknown) => {
  if (error instanceof ValidationError) {
    return validationErrorHandler(error);
  }

  console.error(error);
};
