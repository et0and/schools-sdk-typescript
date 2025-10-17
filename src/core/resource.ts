// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Schools } from '../client';

export abstract class APIResource {
  protected _client: Schools;

  constructor(client: Schools) {
    this._client = client;
  }
}
