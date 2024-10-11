/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

import { TaskID } from '../../../domain/entity/props/taskID';
import { TaskStatus } from '../../../domain/entity/props/taskStatus';
import { Task } from '../../../domain/entity/task.entity';
import { TaskRespository } from '../../../domain/task.repository';

import { InvalidExtFile } from './errors/invalidExtFile';
import { InvalidTaskStoragedInFile } from './errors/invalidTaskInJson';
import { TaskNotFounInJsonFile } from './errors/notFoundTask';
import { SaveInFileError } from './errors/saveInFile';

export class InJsonFileStorageTaskImpl implements TaskRespository {
  private readonly filePath: string;

  private readonly fileName: string;

  private readonly relativePath: string;

  constructor() {
    this.fileName = 'task.json';
    this.relativePath = 'src/shared/storages/file';
    this.filePath = path.resolve(this.relativePath, this.fileName);
    this.validateExtFile();
  }

  async getById(id: TaskID): Promise<Task> {
    const existingTask = await this.getAllTask();

    const foundTask = existingTask.find((task) => task.id.value === id.value);

    if (!foundTask) {
      throw new TaskNotFounInJsonFile('The task does not exist');
    }
    return foundTask;
  }

  async addTask(task: Task): Promise<void> {
    const existingTask = await this.getAllTask();

    existingTask.push(task);

    await this.saveData(existingTask);
  }

  async removeTask(id: TaskID): Promise<void> {
    const existingTask = await this.getAllTask();

    const tasks = existingTask.filter((item) => item.id.value !== id.value);

    await this.saveData(tasks);
  }

  async editTask(task: Task): Promise<void> {
    const existingTask = await this.getAllTask();

    const taskIndex = existingTask.findIndex((item) => item.id.value === task.id.value);
    if (taskIndex !== -1) {
      existingTask[taskIndex] = task;
    } else {
      throw new TaskNotFounInJsonFile('The task does not exist');
    }

    await this.saveData(existingTask);
  }

  async getAllTask(stutus?: TaskStatus): Promise<Task[]> {
    if (!fs.existsSync(this.filePath)) {
      await writeFile(this.filePath, JSON.stringify([]));
    }
    const data = JSON.parse(await readFile(this.filePath, 'utf-8'));

    if (!this.isValidTaskArray(data)) {
      if (data.length === 0) {
        return [];
      }

      throw new InvalidTaskStoragedInFile(
        'The data in the file does not have the expected structure.',
      );
    }

    const tasks = data.map(
      (task) =>
        new Task({
          id: new TaskID(task.id),
          description: task.description,
          status: new TaskStatus(task.status),
          createdAt: new Date(task.createdAt),
          updatedAt: new Date(task.updatedAt),
        }),
    );

    if (stutus) {
      return tasks.filter((task) => task.status.value === stutus.value);
    }
    return tasks;
  }

  private async saveData(data: Task[]) {
    try {
      const formatedTask = data.map((task) => this.formatTask(task));

      await writeFile(this.filePath, JSON.stringify(formatedTask, null, 2));
    } catch (error) {
      throw new SaveInFileError(`Error al guardar datos en archivo`);
    }
  }

  private validateExtFile() {
    const nameParts = this.fileName.split('.');
    if (nameParts.length === 1) {
      throw new InvalidExtFile('The extencion of the file to save data must be ".json"');
    }
    if (nameParts[1] !== 'json') {
      throw new InvalidExtFile('The extencion of the file to save data must be ".json"');
    }
  }

  private isValidTask(data: any): data is TaskJson {
    return (
      typeof data.id === 'number' &&
      typeof data.description === 'string' &&
      (data.status === 'todo' || data.status === 'in-process' || data.status === 'done') &&
      typeof data.createdAt === 'string' &&
      typeof data.updatedAt === 'string'
    );
  }

  private isValidTaskArray(data: any): data is TaskJson[] {
    return Array.isArray(data) && data.every(this.isValidTask);
  }

  private formatTask(task: Task): TaskJson {
    return {
      id: task.id.value,
      description: task.description,
      status: task.status.value,
      createdAt: task.createdAt.toJSON(),
      updatedAt: task.updatedAt.toJSON(),
    };
  }
}

interface TaskJson {
  id: number;
  description: string;
  status: 'todo' | 'in-process' | 'done';
  createdAt: string; // Usamos string porque JSON almacena fechas como cadenas
  updatedAt: string;
}
