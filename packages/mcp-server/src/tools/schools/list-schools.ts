// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'schools-sdk-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'schools-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Schools from 'schools-sdk';

export const metadata: Metadata = {
  resource: 'schools',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/schools',
  operationId: 'getAllSchools',
};

export const tool: Tool = {
  name: 'list_schools',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet all schools with filtering\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/school_list_response',\n  $defs: {\n    school_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            additionalProperties: true\n          }\n        },\n        pagination: {\n          type: 'object',\n          properties: {\n            limit: {\n              type: 'integer'\n            },\n            page: {\n              type: 'integer'\n            },\n            total: {\n              type: 'integer'\n            },\n            totalPages: {\n              type: 'integer'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      authority: {
        type: 'string',
        description: 'Filter by education authority',
      },
      city: {
        type: 'string',
        description: 'Filter by city (partial match)',
      },
      limit: {
        type: 'integer',
        description: 'Results per page (default: 20, max: 100)',
      },
      name: {
        type: 'string',
        description: 'Filter by school name (partial match)',
      },
      org_type: {
        type: 'string',
        description: 'Filter by organization type',
      },
      page: {
        type: 'integer',
        description: 'Page number (default: 1)',
      },
      status: {
        type: 'string',
        description: 'Filter by school status',
      },
      suburb: {
        type: 'string',
        description: 'Filter by suburb (partial match)',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Schools, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.schools.list(body)));
  } catch (error) {
    if (error instanceof Schools.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
