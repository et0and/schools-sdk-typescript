// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'schools-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Schools from 'schools-sdk';

export const metadata: Metadata = {
  resource: 'schools',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/schools/status/{status}',
  operationId: 'getSchoolsByStatus',
};

export const tool: Tool = {
  name: 'by_status_schools',
  description: 'Get schools by status',
  inputSchema: {
    type: 'object',
    properties: {
      status: {
        type: 'string',
      },
      limit: {
        type: 'integer',
      },
      page: {
        type: 'integer',
      },
    },
    required: ['status'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Schools, args: Record<string, unknown> | undefined) => {
  const { status, ...body } = args as any;
  const response = await client.schools.byStatus(status, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
