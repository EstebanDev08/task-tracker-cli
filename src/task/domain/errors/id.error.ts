import { ValidationError } from '#src/shared/errors/validation/validation';

export class TaskIdError extends ValidationError {
  constructor(msg: string) {
    super(msg);
    this.name = 'Task ID Error';
  }
}
