/* eslint-disable no-console */

import { addTaskCliManager, updateTaskCliManager } from './dependecies';

const printHelp = () => {
  console.log('Usage: task <command> [options]');
  console.log('Available commands:');
  console.log('  add <description>             Add a new task');
  console.log('  update <id> <description>     Edit an existing task');
  // console.log('  list                          List all tasks');
  // console.log('  delete <id>                   Delete a task by ID');
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

    case 'help':
      printHelp();

      break;

    default:
      console.log(`Comando no reconocido: ${command}`);
      process.exit(1);
  }
};
