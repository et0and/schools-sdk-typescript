// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Root extends APIResource {
  /**
   * API root information
   */
  retrieve(options?: RequestOptions): APIPromise<RootRetrieveResponse> {
    return this._client.get('/', options);
  }
}

export interface RootRetrieveResponse {
  docs?: string;

  endpoints?: unknown;

  message?: string;

  version?: string;
}

export declare namespace Root {
  export { type RootRetrieveResponse as RootRetrieveResponse };
}
