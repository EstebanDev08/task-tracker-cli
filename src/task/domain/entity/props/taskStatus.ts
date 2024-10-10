import { TaskStusError } from '../../errors/Status.error';

export class TaskStatus {
  constructor(readonly value: 'todo' | 'in-process' | 'done' = 'todo') {
    this.validateValue();
  }

  validateValue() {
    if (this.value === 'done' || this.value === 'in-process' || this.value === 'todo') return;

    throw new TaskStusError('Status Must Be: "todo" | "in-process" | "done"');
  }
}
