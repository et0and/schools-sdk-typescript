import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.health.check',
    fullyQualifiedName: 'health.check',
    httpMethod: 'get',
    httpPath: '/health',
  },
  {
    clientCallName: 'client.root.retrieve',
    fullyQualifiedName: 'root.retrieve',
    httpMethod: 'get',
    httpPath: '/',
  },
  {
    clientCallName: 'client.schools.retrieve',
    fullyQualifiedName: 'schools.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/schools/id/{schoolId}',
  },
  {
    clientCallName: 'client.schools.list',
    fullyQualifiedName: 'schools.list',
    httpMethod: 'get',
    httpPath: '/v1/schools',
  },
  {
    clientCallName: 'client.schools.byAuthority',
    fullyQualifiedName: 'schools.byAuthority',
    httpMethod: 'get',
    httpPath: '/v1/schools/authority/{authority}',
  },
  {
    clientCallName: 'client.schools.byCity',
    fullyQualifiedName: 'schools.byCity',
    httpMethod: 'get',
    httpPath: '/v1/schools/city/{city}',
  },
  {
    clientCallName: 'client.schools.byStatus',
    fullyQualifiedName: 'schools.byStatus',
    httpMethod: 'get',
    httpPath: '/v1/schools/status/{status}',
  },
  {
    clientCallName: 'client.schools.bySuburb',
    fullyQualifiedName: 'schools.bySuburb',
    httpMethod: 'get',
    httpPath: '/v1/schools/suburb/{suburb}',
  },
  {
    clientCallName: 'client.schools.search',
    fullyQualifiedName: 'schools.search',
    httpMethod: 'get',
    httpPath: '/v1/schools/search',
  },
  {
    clientCallName: 'client.sync.getStatus',
    fullyQualifiedName: 'sync.getStatus',
    httpMethod: 'get',
    httpPath: '/v1/sync/status',
  },
  {
    clientCallName: 'client.sync.trigger',
    fullyQualifiedName: 'sync.trigger',
    httpMethod: 'post',
    httpPath: '/v1/sync',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
