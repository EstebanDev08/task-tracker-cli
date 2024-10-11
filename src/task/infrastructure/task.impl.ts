/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

import { TaskID } from '../domain/entity/props/taskID';
import { TaskStatus } from '../domain/entity/props/taskStatus';
import { Task } from '../domain/entity/task.entity';
import { TaskRespository } from '../domain/task.repository';

import { InvalidExtFile } from './errors/invalidExtFile';
import { InvalidTaskStoragedInFile } from './errors/invalidTaskInJson';

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

  addTask(task: Task): Promise<void> {
    console.log(task);

    throw new Error('Method not implemented.');
  }

  removeTask(id: TaskID): Promise<void> {
    throw new Error('Method not implemented.');
  }

  editTask(task: Task): Promise<void> {
    throw new Error('Method not implemented.');
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
}

interface TaskJson {
  id: number;
  description: string;
  status: 'todo' | 'in-process' | 'done';
  createdAt: string; // Usamos string porque JSON almacena fechas como cadenas
  updatedAt: string;
}
