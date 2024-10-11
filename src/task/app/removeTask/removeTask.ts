import { TaskID } from '#src/task/domain/entity/props/taskID';
import { TaskRespository } from '#src/task/domain/task.repository';

export class RemoveTaskUseCase {
  constructor(private readonly taskRepo: TaskRespository) {}

  async run(id: number) {
    return this.taskRepo.removeTask(new TaskID(id));
  }
}
