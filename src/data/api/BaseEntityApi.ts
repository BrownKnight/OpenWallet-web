import type { ServiceResponse } from "@OWApi/src/service/responses/ServiceResponse";

export class BaseEntityApi<TEntity> {
  protected apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  async callService(endpoint: string): Promise<ServiceResponse<TEntity>> {
    const response = await fetch(`${this.apiUrl}/${endpoint}`);
    if (!response.ok) {
      console.error(
        `Called ${endpoint}, but received a non-successful status ${response.status}`
      );
    }
    const responseBody = await response.json();
    return responseBody;
  }

  async getAll(): Promise<TEntity[]> {
    return (await this.callService("/api/v1/accounts")).entities;
  }
}
