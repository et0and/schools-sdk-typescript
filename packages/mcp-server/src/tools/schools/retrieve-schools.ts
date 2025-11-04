// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'schools-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'schools-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Schools from 'schools-sdk';

export const metadata: Metadata = {
  resource: 'schools',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/schools/id/{schoolId}',
  operationId: 'getSchoolById',
};

export const tool: Tool = {
  name: 'retrieve_schools',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet school by School ID\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/school_retrieve_response',\n  $defs: {\n    school_retrieve_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          additionalProperties: true\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      schoolId: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['schoolId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Schools, args: Record<string, unknown> | undefined) => {
  const { schoolId, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.schools.retrieve(schoolId)));
};

export default { metadata, tool, handler };
