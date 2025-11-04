// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'schools-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Schools from 'schools-sdk';

export const metadata: Metadata = {
  resource: 'schools',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/schools/city/{city}',
  operationId: 'getSchoolsByCity',
};

export const tool: Tool = {
  name: 'by_city_schools',
  description: 'Get schools by city',
  inputSchema: {
    type: 'object',
    properties: {
      city: {
        type: 'string',
      },
      limit: {
        type: 'integer',
      },
      page: {
        type: 'integer',
      },
    },
    required: ['city'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Schools, args: Record<string, unknown> | undefined) => {
  const { city, ...body } = args as any;
  const response = await client.schools.byCity(city, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
