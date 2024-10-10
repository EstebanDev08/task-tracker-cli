import { TaskID } from './props/taskID';
import { TaskStatus } from './props/taskStatus';

export class Task {
  constructor(
    readonly id: TaskID,
    readonly description: string,
    readonly status: TaskStatus,
    readonly createdAt: Date,
    readonly updatedAt: Date,
  ) {}
}
