export interface ApiResponse<T> {
  raw: Response;

  value(): Promise<T>;
}

export interface ResponseMapper<T> {
  (json: any): T;
}

export class JSONApiResponse<T> implements ApiResponse<T> {
  constructor(
    public raw: Response,
    private mapper: ResponseMapper<T> = (json: any) => json
  ) {}

  async value(): Promise<T> {
    return this.mapper(await this.raw.json());
  }
}

export class ApiError implements Error {
  constructor(
    public raw: {
      message: string;
      messages: Array<string>;
      trace: string;
      error: string;
      status: number;
    }
  ) {}

  get message() {
    return this.raw.message;
  }

  get messages() {
    return this.raw.messages || ["Something went wrong."];
  }

  get name() {
    return `[ApiError: ${JSON.stringify({
      message: this.message,
      messages: this.messages,
      error: this.error,
      status: this.status,
    })}]`;
  }

  get stack() {
    return this.raw.trace;
  }

  get status() {
    return this.raw.status;
  }

  get error() {
    return this.raw.error;
  }
}
