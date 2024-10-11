export class SaveInFileError extends Error {
  constructor(msg: string) {
    super(msg);
    this.name = 'Error Saving Json File';
  }
}
