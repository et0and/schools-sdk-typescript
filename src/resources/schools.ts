// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SchoolsResource extends APIResource {
  /**
   * Get school by School ID
   */
  retrieve(schoolID: string, options?: RequestOptions): APIPromise<SchoolRetrieveResponse> {
    return this._client.get(path`/v1/schools/id/${schoolID}`, options);
  }

  /**
   * Get all schools with filtering
   */
  list(
    query: SchoolListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SchoolListResponse> {
    return this._client.get('/v1/schools', { query, ...options });
  }

  /**
   * Get schools by authority
   */
  byAuthority(
    authority: string,
    query: SchoolByAuthorityParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/v1/schools/authority/${authority}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get schools by city
   */
  byCity(
    city: string,
    query: SchoolByCityParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/v1/schools/city/${city}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get schools by status
   */
  byStatus(
    status: string,
    query: SchoolByStatusParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/v1/schools/status/${status}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get schools by suburb
   */
  bySuburb(
    suburb: string,
    query: SchoolBySuburbParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/v1/schools/suburb/${suburb}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Full-text search schools by name
   */
  search(query: SchoolSearchParams, options?: RequestOptions): APIPromise<SchoolSearchResponse> {
    return this._client.get('/v1/schools/search', { query, ...options });
  }
}

export interface SchoolRetrieveResponse {
  data?: unknown;
}

export interface SchoolListResponse {
  data?: Array<unknown>;

  pagination?: SchoolListResponse.Pagination;
}

export namespace SchoolListResponse {
  export interface Pagination {
    limit?: number;

    page?: number;

    total?: number;

    totalPages?: number;
  }
}

export interface SchoolSearchResponse {
  data?: Array<unknown>;

  pagination?: SchoolSearchResponse.Pagination;
}

export namespace SchoolSearchResponse {
  export interface Pagination {
    limit?: number;

    page?: number;

    total?: number;

    totalPages?: number;
  }
}

export interface SchoolListParams {
  /**
   * Filter by education authority
   */
  authority?: string;

  /**
   * Filter by city (partial match)
   */
  city?: string;

  /**
   * Results per page (default: 20, max: 100)
   */
  limit?: number;

  /**
   * Filter by school name (partial match)
   */
  name?: string;

  /**
   * Filter by organization type
   */
  org_type?: string;

  /**
   * Page number (default: 1)
   */
  page?: number;

  /**
   * Filter by school status
   */
  status?: string;

  /**
   * Filter by suburb (partial match)
   */
  suburb?: string;
}

export interface SchoolByAuthorityParams {
  limit?: number;

  page?: number;
}

export interface SchoolByCityParams {
  limit?: number;

  page?: number;
}

export interface SchoolByStatusParams {
  limit?: number;

  page?: number;
}

export interface SchoolBySuburbParams {
  limit?: number;

  page?: number;
}

export interface SchoolSearchParams {
  /**
   * Search query
   */
  q: string;

  /**
   * Results per page (default: 20, max: 100)
   */
  limit?: number;

  /**
   * Page number (default: 1)
   */
  page?: number;
}

export declare namespace SchoolsResource {
  export {
    type SchoolRetrieveResponse as SchoolRetrieveResponse,
    type SchoolListResponse as SchoolListResponse,
    type SchoolSearchResponse as SchoolSearchResponse,
    type SchoolListParams as SchoolListParams,
    type SchoolByAuthorityParams as SchoolByAuthorityParams,
    type SchoolByCityParams as SchoolByCityParams,
    type SchoolByStatusParams as SchoolByStatusParams,
    type SchoolBySuburbParams as SchoolBySuburbParams,
    type SchoolSearchParams as SchoolSearchParams,
  };
}
