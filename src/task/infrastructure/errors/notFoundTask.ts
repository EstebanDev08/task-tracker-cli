export class TaskNotFounInJsonFile extends Error {
  constructor(msg: string) {
    super(msg);
    this.name = 'Task not found in JSON file';
  }
}
