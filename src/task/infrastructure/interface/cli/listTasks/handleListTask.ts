/* eslint-disable no-console */

import { GetTaskUseCase } from '#src/task/app/getTask/getTask';
import { TaskJson } from '#src/task/app/getTask/task.dto';

import { cliErrorHandler } from '../errorHandler/index';

export class ListTasksCliManager {
  constructor(private readonly getTaskUseCase: GetTaskUseCase) {}

  async run(args: string[]) {
    try {
      this.validateArguments(args);

      const status: string | undefined = args[0];

      const tasks = await this.getTaskUseCase.run(status);

      this.printTasksInTable(tasks);
    } catch (error) {
      cliErrorHandler(error);
    }
  }

  private validateArguments(args: string[]) {
    if (args[0] === 'help') {
      this.printHelp();
      process.exit(0);
    }
  }

  private printHelp() {
    console.log('Usage: task-traker list <status>');
    console.log('Available commands:');
    console.log('  <empty>             List done task');
    console.log('  todo                List done task');
    console.log('  in-process          List done task');
    console.log('  done                List done task');
    process.exit(0);
  }

  private printTasksInTable(tasks: TaskJson[]) {
    const formattedTasks = tasks.map((task) => ({
      id: task.id,
      description: task.description,
      status: task.status,
      'created at': new Date(task.createdAt),
      'updated at': new Date(task.updatedAt),
    }));

    return console.table(formattedTasks);
  }
}
