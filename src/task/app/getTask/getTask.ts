import { TaskStatus } from '#src/task/domain/entity/props/taskStatus';
import { TaskRespository } from '#src/task/domain/task.repository';

export class GetTaskUseCase {
  constructor(private readonly taskRepo: TaskRespository) {}

  async run(status?: string) {
    if (!this.validateStatus(status)) {
      return [];
    }

    return this.taskRepo.getAllTask(new TaskStatus(status));
  }

  private validateStatus(status: string | undefined): status is 'todo' | 'in-process' | 'done' {
    if (status === 'todo' || status === 'in-process' || status === 'done') {
      return true;
    }
    return false;
  }
}
