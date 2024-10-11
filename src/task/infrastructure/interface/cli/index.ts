/* eslint-disable no-console */

import {
  addTaskCliManager,
  listTaskCliManager,
  removeTaskCliManager,
  updateTaskCliManager,
} from './dependecies';

const printHelp = () => {
  console.log('Usage: task <command> [options]');
  console.log('Available commands:');
  console.log('  add <description>             Add a new task');
  console.log('  update <id> <description>     Edit an existing task');
  console.log('  list <status>                 List all tasks');
  console.log('  delete <id>                   Delete a task by ID');
  console.log('  help                          Show available commands');
  process.exit(0);
};

export const taskCliManager = async (args: string[]) => {
  if (args.length === 0) {
    printHelp();
  }

  // Obtener el comando
  const command = args[0];
  const commandArgs = args.slice(1);

  // Procesar el comando
  switch (command) {
    case 'add':
      await addTaskCliManager.run(commandArgs);

      break;

    case 'update':
      await updateTaskCliManager.run(commandArgs, false);

      break;

    case 'mark-in-process':
      commandArgs.push('in-process');
      await updateTaskCliManager.run(commandArgs, true);

      break;

    case 'mark-done':
      commandArgs.push('done');
      await updateTaskCliManager.run(commandArgs, true);

      break;

    case 'list':
      await listTaskCliManager.run(commandArgs);

      break;

    case 'delete':
      await removeTaskCliManager.run(commandArgs);

      break;

    case 'help':
      printHelp();

      break;

    default:
      console.log(`Comando no reconocido: ${command}`);
      process.exit(1);
  }
};
