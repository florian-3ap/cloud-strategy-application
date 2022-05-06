import { Person, PersonArrayJSON } from "../domain/person";
import { env } from "../use-env";
import { BaseApiClient } from "./base/base-api-client";
import { JSONApiResponse } from "./base/response";

class PersonManagementApiClient extends BaseApiClient {
  async getAll(): Promise<Person[]> {
    const response = await this.fetch(
      `${env.REACT_APP_BASE_URL}/person-management-service/all`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return new JSONApiResponse(response, PersonArrayJSON).value();
  }
}

export const PersonManagementApi = new PersonManagementApiClient();
