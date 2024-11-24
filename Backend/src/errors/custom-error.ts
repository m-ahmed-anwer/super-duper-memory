export class CustomError extends Error {
  status: number;

  constructor(public message: string, status: number = 400) {
    // Default to 400 if not provided
    super(message);
    this.status = status;

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  serializeErrors() {
    return { message: this.message };
  }
}
