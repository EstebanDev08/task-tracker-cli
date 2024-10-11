import { ValidationError } from '#src/shared/errors/validation/validation';

export class InvalidExtFile extends ValidationError {
  constructor(msg: string) {
    super(msg);
    this.name = 'Name File Storage Invalid';
  }
}
