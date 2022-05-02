import { ApiError } from "./response";

export class BaseApiClient {
  protected async fetch(
    input: RequestInfo,
    init?: RequestInit
  ): Promise<Response> {
    let response: Response = await fetch(input, init);

    if (!response.ok) {
      let raw;
      try {
        raw = await response.json();
        raw.status = raw.status ?? response.status;
        raw.message = raw.errorMessage ?? raw.message;
      } catch (err) {
        raw = {
          status: response.status,
          message: response.statusText,
        };
      }
      throw new ApiError(raw);
    }
    return response;
  }
}
