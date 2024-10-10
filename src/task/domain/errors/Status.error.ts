import { ValidationError } from '#src/shared/errors/validation/validation';

export class TaskStusError extends ValidationError {
  constructor(msg: string) {
    super(msg);
    this.name = 'Task Status Error';
  }
}
