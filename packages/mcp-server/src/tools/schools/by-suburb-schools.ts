// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'schools-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Schools from 'schools-sdk';

export const metadata: Metadata = {
  resource: 'schools',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/schools/suburb/{suburb}',
  operationId: 'getSchoolsBySuburb',
};

export const tool: Tool = {
  name: 'by_suburb_schools',
  description: 'Get schools by suburb',
  inputSchema: {
    type: 'object',
    properties: {
      suburb: {
        type: 'string',
      },
      limit: {
        type: 'integer',
      },
      page: {
        type: 'integer',
      },
    },
    required: ['suburb'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Schools, args: Record<string, unknown> | undefined) => {
  const { suburb, ...body } = args as any;
  const response = await client.schools.bySuburb(suburb, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
