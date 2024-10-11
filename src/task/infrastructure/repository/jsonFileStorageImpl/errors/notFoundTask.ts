import { NotFoundError } from '#src/shared/errors/validation/notfound';

export class TaskNotFounInJsonFile extends NotFoundError {
  constructor(msg: string) {
    super(msg);
    this.name = 'Task not found in JSON file';
  }
}
