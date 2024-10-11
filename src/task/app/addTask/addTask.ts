import { TaskID } from '#src/task/domain/entity/props/taskID';
import { TaskStatus } from '#src/task/domain/entity/props/taskStatus';
import { Task } from '#src/task/domain/entity/task.entity';
import { TaskRespository } from '#src/task/domain/task.repository';

type InputNewTask = {
  id: number;
  description: string;
  status: TaskStatus;
  createdAt: Date;
  updatedAt: Date;
};

export class AddTaskUseCase {
  constructor(private readonly taskRepo: TaskRespository) {}

  async run({ id, description, status, createdAt, updatedAt }: InputNewTask): Promise<void> {
    const newTask = new Task({ id: new TaskID(id), description, status, createdAt, updatedAt });

    await this.taskRepo.addTask(newTask);
  }
}
