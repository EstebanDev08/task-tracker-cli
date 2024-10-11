/* eslint-disable no-console */

import { EditTaskUseCase } from '#src/task/app/editTask/editTask';

import { cliErrorHandler } from '../errorHandler/index';

export class UpdateTaskCliManager {
  constructor(private readonly editUseCase: EditTaskUseCase) {}

  async run(args: string[], editStatus: boolean) {
    try {
      this.validateArguments(args);

      const id = parseInt(args[0]);
      const field = args[1];

      if (editStatus) {
        await this.editUseCase.run(id, { status: field });
      } else {
        await this.editUseCase.run(id, { description: field });
      }

      return console.log(`Task edited successfully`);
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
    console.log('Uso: task-traker update <id> <description>');
    process.exit(0);
  }
}
