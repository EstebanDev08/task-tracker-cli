#!/usr/bin/env node

import { taskCliManager } from '#src/task/infrastructure/interface/cli/index';

/* eslint-disable no-console */

const args = process.argv.slice(2);

// Verificar si se pasó un comando
if (args.length === 0) {
  console.log('Uso: task-tracker <modulo> <comando> [opciones]');
  console.log('Módulos disponibles:');
  console.log('  task         Comandos para manejar tareas');
  process.exit(0);
}

// El primer argumento debe ser el nombre del módulo
const moduleName = args[0];
//const moduleArgs = args.slice(1); // Los argumentos restantes (comandos y opciones)
const moduleArgs = args.slice(1);

switch (moduleName) {
  case 'task':
    taskCliManager(moduleArgs);

    break;

  default:
    console.log(`Módulo no reconocido: ${moduleName}`);
    process.exit(0);
}
