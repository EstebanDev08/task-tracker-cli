import { ValidationError } from '#src/shared/errors/validation/validation';

export class TaskDescriptionError extends ValidationError {
  constructor(msg: string) {
    super(msg);
    this.name = 'Task Description Error';
  }
}
