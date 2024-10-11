import { TaskID } from '#src/task/domain/entity/props/taskID';
import { TaskRespository } from '#src/task/domain/task.repository';

export class RemoveTaskUseCase {
  constructor(private readonly taskRepo: TaskRespository) {}

  async run(id: number) {
    const task = await this.taskRepo.getById(new TaskID(id));

    return this.taskRepo.removeTask(task.id);
  }
}
