/* eslint-disable no-console */

import { RemoveTaskUseCase } from '#src/task/app/removeTask/removeTask';

import { cliErrorHandler } from '../errorHandler/index';

export class DeleteTaskCliManager {
  constructor(private readonly deleteTaskUseCase: RemoveTaskUseCase) {}

  async run(args: string[]) {
    try {
      this.validateArguments(args);

      const id = parseInt(args[0]);

      await this.deleteTaskUseCase.run(id);
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
    console.log('Uso: task-traker delete <id>');
    process.exit(0);
  }
}
