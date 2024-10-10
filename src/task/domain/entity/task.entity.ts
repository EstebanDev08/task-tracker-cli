import { TaskID } from './props/taskID';
import { TaskStatus } from './props/taskStatus';

interface TaskProps {
  id: TaskID;
  description: string;
  status: TaskStatus;
  createdAt: Date;
  updatedAt: Date;
}

export class Task {
  readonly id: TaskID;

  readonly description: string;

  readonly status: TaskStatus;

  readonly createdAt: Date;

  readonly updatedAt: Date;

  constructor({ id, description, status, createdAt, updatedAt }: TaskProps) {
    this.id = id;
    this.description = description;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
