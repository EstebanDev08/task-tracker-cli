import { TaskIdError } from '../../errors/id.error';

export class TaskID {
  constructor(readonly value: number) {
    this.validation();
  }

  private validation() {
    if (this.value < 1) {
      throw new TaskIdError(`Task ID "${this.value}" Must Be Greater Than 0 `);
    }
    if (!Number.isInteger(this.value)) {
      throw new TaskIdError(`Task ID ${this.value} Must Be Integer`);
    }
  }
}
