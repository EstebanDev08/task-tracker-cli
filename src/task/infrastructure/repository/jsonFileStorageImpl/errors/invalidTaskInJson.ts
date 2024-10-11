import { ValidationError } from '#src/shared/errors/validation/validation';

export class InvalidTaskStoragedInFile extends ValidationError {
  constructor(msg: string) {
    super(msg);
    this.name = 'Invalid Task storage In Json File';
  }
}
