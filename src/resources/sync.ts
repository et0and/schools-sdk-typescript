// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Sync extends APIResource {
  /**
   * Get sync status
   */
  getStatus(options?: RequestOptions): APIPromise<SyncGetStatusResponse> {
    return this._client.get('/v1/sync/status', options);
  }

  /**
   * Trigger manual data sync
   */
  trigger(options?: RequestOptions): APIPromise<SyncTriggerResponse> {
    return this._client.post('/v1/sync', options);
  }
}

export interface SyncGetStatusResponse {
  isStale?: boolean;

  lastSync?: string | null;

  recordCount?: number;
}

export interface SyncTriggerResponse {
  error?: string;

  lastSync?: string;

  recordCount?: number;

  success?: boolean;
}

export declare namespace Sync {
  export {
    type SyncGetStatusResponse as SyncGetStatusResponse,
    type SyncTriggerResponse as SyncTriggerResponse,
  };
}
