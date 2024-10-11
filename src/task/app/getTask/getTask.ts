import { TaskStatus } from '#src/task/domain/entity/props/taskStatus';
import { Task } from '#src/task/domain/entity/task.entity';
import { TaskStusError } from '#src/task/domain/errors/Status.error';
import { TaskRespository } from '#src/task/domain/task.repository';

import { TaskJson } from './task.dto';

export class GetTaskUseCase {
  constructor(private readonly taskRepo: TaskRespository) {}

  async run(status?: string) {
    let tasks: Task[];

    if (status) {
      if (!this.validateStatus(status)) {
        throw new TaskStusError('Status Must Be: "todo" | "in-process" | "done"');
      }

      tasks = await this.taskRepo.getAllTask(new TaskStatus(status));
    }

    tasks = await this.taskRepo.getAllTask();

    return this.formatTask(tasks);
  }

  private formatTask(tasks: Task[]): TaskJson[] {
    return tasks.map((task) => ({
      id: task.id.value,
      description: task.description,
      status: task.status.value,
      createdAt: task.createdAt.toJSON(),
      updatedAt: task.updatedAt.toJSON(),
    }));
  }

  private validateStatus(status: string | undefined): status is 'todo' | 'in-process' | 'done' {
    if (status === 'todo' || status === 'in-process' || status === 'done') {
      return true;
    }
    return false;
  }
}
