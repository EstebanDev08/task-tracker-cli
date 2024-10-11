import { TaskID } from '#src/task/domain/entity/props/taskID';
import { TaskStatus } from '#src/task/domain/entity/props/taskStatus';
import { Task } from '#src/task/domain/entity/task.entity';
import { TaskRespository } from '#src/task/domain/task.repository';

type InputNewTask = {
  description: string;
};

export class AddTaskUseCase {
  constructor(private readonly taskRepo: TaskRespository) {}

  async run({ description }: InputNewTask): Promise<number> {
    const existingTask = await this.taskRepo.getAllTask();

    const lastTaskId = existingTask[existingTask.length - 1]?.id?.value ?? 0;

    const newTaskId = new TaskID(lastTaskId + 1);

    const newTask = new Task({
      id: newTaskId,
      description,
      status: new TaskStatus('todo'),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await this.taskRepo.addTask(newTask);

    return newTaskId.value;
  }
}
