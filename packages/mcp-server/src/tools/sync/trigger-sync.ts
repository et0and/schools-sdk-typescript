// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'schools-sdk-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'schools-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Schools from 'schools-sdk';

export const metadata: Metadata = {
  resource: 'sync',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/sync',
  operationId: 'triggerSync',
};

export const tool: Tool = {
  name: 'trigger_sync',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTrigger manual data sync\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/sync_trigger_response',\n  $defs: {\n    sync_trigger_response: {\n      type: 'object',\n      properties: {\n        error: {\n          type: 'string'\n        },\n        lastSync: {\n          type: 'string',\n          format: 'date-time'\n        },\n        recordCount: {\n          type: 'integer'\n        },\n        success: {\n          type: 'boolean'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: Schools, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.sync.trigger()));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
