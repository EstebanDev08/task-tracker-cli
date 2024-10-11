import { TaskID } from '#src/task/domain/entity/props/taskID';
import { TaskStatus } from '#src/task/domain/entity/props/taskStatus';
import { TaskRespository } from '#src/task/domain/task.repository';

type InputNewTask = {
  status?: string;
  description?: string;
};

export class EditTaskUseCase {
  constructor(private readonly taskRepo: TaskRespository) {}

  async run(id: number, editData: InputNewTask): Promise<void> {
    const taskforEdit = await this.taskRepo.getById(new TaskID(id));

    const taskEdited = taskforEdit.editTask({
      description: editData.description ?? taskforEdit.description,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ...(editData.status ? new TaskStatus(editData.status as any) : undefined),
    });

    await this.taskRepo.editTask(taskEdited);
  }
}
