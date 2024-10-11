/* eslint-disable no-console */

import { AddTaskUseCase } from '#src/task/app/addTask/addTask';

import { cliErrorHandler } from '../errorHandler/index';

export class AddTaskCliManager {
  constructor(private readonly addTaskUseCase: AddTaskUseCase) {}

  async run(args: string[]) {
    try {
      this.validateArguments(args);

      const description = args[0];

      const id = await this.addTaskUseCase.run({ description });

      return console.log(`Task added successfully (ID: ${id})`);
    } catch (error) {
      cliErrorHandler(error);
    }
  }

  private validateArguments(args: string[]) {
    if (args.length === 0) {
      this.printHelp();
      process.exit(0);
    }
  }

  private printHelp() {
    console.log('Uso: task-traker add <description>');
    process.exit(0);
  }
}
