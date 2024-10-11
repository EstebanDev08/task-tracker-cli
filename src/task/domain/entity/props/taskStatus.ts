import { TaskStusError } from '../../errors/Status.error';

type StatusType = 'todo' | 'in-process' | 'done';

export class TaskStatus {
  constructor(readonly value: StatusType) {
    this.validateValue();
  }

  validateValue() {
    if (this.value === 'done' || this.value === 'in-process' || this.value === 'todo') {
      return;
    } else {
      throw new TaskStusError('Status Must Be: "todo" | "in-process" | "done"');
    }
  }
}
