// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'check',
    endpoint: '/health',
    httpMethod: 'get',
    summary: 'API health check',
    description: 'API health check',
    stainlessPath: '(resource) health > (method) check',
    qualified: 'client.health.check',
    response: '{ status?: string; timestamp?: string; }',
    markdown:
      "## check\n\n`client.health.check(): { status?: string; timestamp?: string; }`\n\n**get** `/health`\n\nAPI health check\n\n### Returns\n\n- `{ status?: string; timestamp?: string; }`\n\n  - `status?: string`\n  - `timestamp?: string`\n\n### Example\n\n```typescript\nimport Schools from 'schools-sdk';\n\nconst client = new Schools();\n\nconst response = await client.health.check();\n\nconsole.log(response);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/',
    httpMethod: 'get',
    summary: 'API root information',
    description: 'API root information',
    stainlessPath: '(resource) root > (method) retrieve',
    qualified: 'client.root.retrieve',
    response: '{ docs?: string; endpoints?: object; message?: string; version?: string; }',
    markdown:
      "## retrieve\n\n`client.root.retrieve(): { docs?: string; endpoints?: object; message?: string; version?: string; }`\n\n**get** `/`\n\nAPI root information\n\n### Returns\n\n- `{ docs?: string; endpoints?: object; message?: string; version?: string; }`\n\n  - `docs?: string`\n  - `endpoints?: object`\n  - `message?: string`\n  - `version?: string`\n\n### Example\n\n```typescript\nimport Schools from 'schools-sdk';\n\nconst client = new Schools();\n\nconst root = await client.root.retrieve();\n\nconsole.log(root);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v1/schools/id/{schoolId}',
    httpMethod: 'get',
    summary: 'Get school by School ID',
    description: 'Get school by School ID',
    stainlessPath: '(resource) schools > (method) retrieve',
    qualified: 'client.schools.retrieve',
    params: ['schoolId: string;'],
    response: '{ data?: object; }',
    markdown:
      "## retrieve\n\n`client.schools.retrieve(schoolId: string): { data?: object; }`\n\n**get** `/v1/schools/id/{schoolId}`\n\nGet school by School ID\n\n### Parameters\n\n- `schoolId: string`\n\n### Returns\n\n- `{ data?: object; }`\n\n  - `data?: object`\n\n### Example\n\n```typescript\nimport Schools from 'schools-sdk';\n\nconst client = new Schools();\n\nconst school = await client.schools.retrieve('schoolId');\n\nconsole.log(school);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/schools',
    httpMethod: 'get',
    summary: 'Get all schools with filtering',
    description: 'Get all schools with filtering',
    stainlessPath: '(resource) schools > (method) list',
    qualified: 'client.schools.list',
    params: [
      'authority?: string;',
      'city?: string;',
      'limit?: number;',
      'name?: string;',
      'org_type?: string;',
      'page?: number;',
      'status?: string;',
      'suburb?: string;',
    ],
    response:
      '{ data?: object[]; pagination?: { limit?: number; page?: number; total?: number; totalPages?: number; }; }',
    markdown:
      "## list\n\n`client.schools.list(authority?: string, city?: string, limit?: number, name?: string, org_type?: string, page?: number, status?: string, suburb?: string): { data?: object[]; pagination?: object; }`\n\n**get** `/v1/schools`\n\nGet all schools with filtering\n\n### Parameters\n\n- `authority?: string`\n  Filter by education authority\n\n- `city?: string`\n  Filter by city (partial match)\n\n- `limit?: number`\n  Results per page (default: 20, max: 100)\n\n- `name?: string`\n  Filter by school name (partial match)\n\n- `org_type?: string`\n  Filter by organization type\n\n- `page?: number`\n  Page number (default: 1)\n\n- `status?: string`\n  Filter by school status\n\n- `suburb?: string`\n  Filter by suburb (partial match)\n\n### Returns\n\n- `{ data?: object[]; pagination?: { limit?: number; page?: number; total?: number; totalPages?: number; }; }`\n\n  - `data?: object[]`\n  - `pagination?: { limit?: number; page?: number; total?: number; totalPages?: number; }`\n\n### Example\n\n```typescript\nimport Schools from 'schools-sdk';\n\nconst client = new Schools();\n\nconst schools = await client.schools.list();\n\nconsole.log(schools);\n```",
  },
  {
    name: 'by_authority',
    endpoint: '/v1/schools/authority/{authority}',
    httpMethod: 'get',
    summary: 'Get schools by authority',
    description: 'Get schools by authority',
    stainlessPath: '(resource) schools > (method) by_authority',
    qualified: 'client.schools.byAuthority',
    params: ['authority: string;', 'limit?: number;', 'page?: number;'],
    markdown:
      "## by_authority\n\n`client.schools.byAuthority(authority: string, limit?: number, page?: number): void`\n\n**get** `/v1/schools/authority/{authority}`\n\nGet schools by authority\n\n### Parameters\n\n- `authority: string`\n\n- `limit?: number`\n\n- `page?: number`\n\n### Example\n\n```typescript\nimport Schools from 'schools-sdk';\n\nconst client = new Schools();\n\nawait client.schools.byAuthority('authority')\n```",
  },
  {
    name: 'by_city',
    endpoint: '/v1/schools/city/{city}',
    httpMethod: 'get',
    summary: 'Get schools by city',
    description: 'Get schools by city',
    stainlessPath: '(resource) schools > (method) by_city',
    qualified: 'client.schools.byCity',
    params: ['city: string;', 'limit?: number;', 'page?: number;'],
    markdown:
      "## by_city\n\n`client.schools.byCity(city: string, limit?: number, page?: number): void`\n\n**get** `/v1/schools/city/{city}`\n\nGet schools by city\n\n### Parameters\n\n- `city: string`\n\n- `limit?: number`\n\n- `page?: number`\n\n### Example\n\n```typescript\nimport Schools from 'schools-sdk';\n\nconst client = new Schools();\n\nawait client.schools.byCity('city')\n```",
  },
  {
    name: 'by_status',
    endpoint: '/v1/schools/status/{status}',
    httpMethod: 'get',
    summary: 'Get schools by status',
    description: 'Get schools by status',
    stainlessPath: '(resource) schools > (method) by_status',
    qualified: 'client.schools.byStatus',
    params: ['status: string;', 'limit?: number;', 'page?: number;'],
    markdown:
      "## by_status\n\n`client.schools.byStatus(status: string, limit?: number, page?: number): void`\n\n**get** `/v1/schools/status/{status}`\n\nGet schools by status\n\n### Parameters\n\n- `status: string`\n\n- `limit?: number`\n\n- `page?: number`\n\n### Example\n\n```typescript\nimport Schools from 'schools-sdk';\n\nconst client = new Schools();\n\nawait client.schools.byStatus('status')\n```",
  },
  {
    name: 'by_suburb',
    endpoint: '/v1/schools/suburb/{suburb}',
    httpMethod: 'get',
    summary: 'Get schools by suburb',
    description: 'Get schools by suburb',
    stainlessPath: '(resource) schools > (method) by_suburb',
    qualified: 'client.schools.bySuburb',
    params: ['suburb: string;', 'limit?: number;', 'page?: number;'],
    markdown:
      "## by_suburb\n\n`client.schools.bySuburb(suburb: string, limit?: number, page?: number): void`\n\n**get** `/v1/schools/suburb/{suburb}`\n\nGet schools by suburb\n\n### Parameters\n\n- `suburb: string`\n\n- `limit?: number`\n\n- `page?: number`\n\n### Example\n\n```typescript\nimport Schools from 'schools-sdk';\n\nconst client = new Schools();\n\nawait client.schools.bySuburb('suburb')\n```",
  },
  {
    name: 'search',
    endpoint: '/v1/schools/search',
    httpMethod: 'get',
    summary: 'Full-text search schools by name',
    description: 'Full-text search schools by name',
    stainlessPath: '(resource) schools > (method) search',
    qualified: 'client.schools.search',
    params: ['q: string;', 'limit?: number;', 'page?: number;'],
    response:
      '{ data?: object[]; pagination?: { limit?: number; page?: number; total?: number; totalPages?: number; }; }',
    markdown:
      "## search\n\n`client.schools.search(q: string, limit?: number, page?: number): { data?: object[]; pagination?: object; }`\n\n**get** `/v1/schools/search`\n\nFull-text search schools by name\n\n### Parameters\n\n- `q: string`\n  Search query\n\n- `limit?: number`\n  Results per page (default: 20, max: 100)\n\n- `page?: number`\n  Page number (default: 1)\n\n### Returns\n\n- `{ data?: object[]; pagination?: { limit?: number; page?: number; total?: number; totalPages?: number; }; }`\n\n  - `data?: object[]`\n  - `pagination?: { limit?: number; page?: number; total?: number; totalPages?: number; }`\n\n### Example\n\n```typescript\nimport Schools from 'schools-sdk';\n\nconst client = new Schools();\n\nconst response = await client.schools.search({ q: 'x' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'get_status',
    endpoint: '/v1/sync/status',
    httpMethod: 'get',
    summary: 'Get sync status',
    description: 'Get sync status',
    stainlessPath: '(resource) sync > (method) get_status',
    qualified: 'client.sync.getStatus',
    response: '{ isStale?: boolean; lastSync?: string; recordCount?: number; }',
    markdown:
      "## get_status\n\n`client.sync.getStatus(): { isStale?: boolean; lastSync?: string; recordCount?: number; }`\n\n**get** `/v1/sync/status`\n\nGet sync status\n\n### Returns\n\n- `{ isStale?: boolean; lastSync?: string; recordCount?: number; }`\n\n  - `isStale?: boolean`\n  - `lastSync?: string`\n  - `recordCount?: number`\n\n### Example\n\n```typescript\nimport Schools from 'schools-sdk';\n\nconst client = new Schools();\n\nconst response = await client.sync.getStatus();\n\nconsole.log(response);\n```",
  },
  {
    name: 'trigger',
    endpoint: '/v1/sync',
    httpMethod: 'post',
    summary: 'Trigger manual data sync',
    description: 'Trigger manual data sync',
    stainlessPath: '(resource) sync > (method) trigger',
    qualified: 'client.sync.trigger',
    response: '{ error?: string; lastSync?: string; recordCount?: number; success?: boolean; }',
    markdown:
      "## trigger\n\n`client.sync.trigger(): { error?: string; lastSync?: string; recordCount?: number; success?: boolean; }`\n\n**post** `/v1/sync`\n\nTrigger manual data sync\n\n### Returns\n\n- `{ error?: string; lastSync?: string; recordCount?: number; success?: boolean; }`\n\n  - `error?: string`\n  - `lastSync?: string`\n  - `recordCount?: number`\n  - `success?: boolean`\n\n### Example\n\n```typescript\nimport Schools from 'schools-sdk';\n\nconst client = new Schools();\n\nconst response = await client.sync.trigger();\n\nconsole.log(response);\n```",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
    boost: {
      name: 3,
      endpoint: 2,
      summary: 2,
      qualified: 2,
      content: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  // Note: Language is accepted for interface consistency with remote search, but currently has no
  // effect since this local search only supports TypeScript docs.
  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex.search(query).map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          fullResults.push({
            method: m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          this.indexProse(content, file.name);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}
