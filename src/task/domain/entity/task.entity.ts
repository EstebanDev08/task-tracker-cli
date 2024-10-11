import { TaskDescriptionError } from '../errors/description';

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
    this.description = description.trim();
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.validateDescription();
  }

  editTask(newData: Partial<Pick<TaskProps, 'description' | 'status'>>) {
    return new Task({
      id: this.id,
      description: newData.description ?? this.description,
      createdAt: this.createdAt,
      updatedAt: new Date(),
      status: newData.status ?? this.status,
    });
  }

  private validateDescription() {
    if (this.description.length === 0) {
      throw new TaskDescriptionError('Description cannot be empty');
    }
  }
}
