// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'schools-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Schools from 'schools-sdk';

export const metadata: Metadata = {
  resource: 'schools',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/schools/authority/{authority}',
  operationId: 'getSchoolsByAuthority',
};

export const tool: Tool = {
  name: 'by_authority_schools',
  description: 'Get schools by authority',
  inputSchema: {
    type: 'object',
    properties: {
      authority: {
        type: 'string',
      },
      limit: {
        type: 'integer',
      },
      page: {
        type: 'integer',
      },
    },
    required: ['authority'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Schools, args: Record<string, unknown> | undefined) => {
  const { authority, ...body } = args as any;
  const response = await client.schools.byAuthority(authority, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
