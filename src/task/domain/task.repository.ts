import { TaskID } from './entity/props/taskID';
import { TaskStatus } from './entity/props/taskStatus';
import { Task } from './entity/task.entity';

export interface TaskRespository {
  addTask(task: Task): Promise<void>;
  removeTask(id: TaskID): Promise<void>;
  editTask(task: Task): Promise<void>;
  getAllTask(stutus?: TaskStatus): Promise<Task[]>;
}
