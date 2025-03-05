export class ResponseDto<T> {
  private code: number;
  private status: boolean;
  private message: string;
  private data?: T;

  constructor(code: number, status: boolean, message: string, data?: T) {
    this.code = code;
    this.status = status;
    this.message = message;
    this.data = data;
  }
}

export class ResponseMessageWrapper {
  private code: number;
  private status: boolean;
  private message: string;

  constructor(code: number, status: boolean, message: string) {
    this.code = code;
    this.status = status;
    this.message = message;
  }
}
