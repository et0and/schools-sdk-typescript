# Changelog

## 0.7.0 (2026-02-27)

Full Changelog: [v0.6.1...v0.7.0](https://github.com/et0and/schools-sdk-typescript/compare/v0.6.1...v0.7.0)

### Features

* **mcp:** add an option to disable code tool ([e7b5f7d](https://github.com/et0and/schools-sdk-typescript/commit/e7b5f7dfd00bd9d2dcb0e678f78432109093e554))
* **mcp:** add initial server instructions ([f4be8b9](https://github.com/et0and/schools-sdk-typescript/commit/f4be8b98038c940c2fa5f60c17902e7aa9b23150))


### Bug Fixes

* **client:** avoid memory leak with abort signals ([8e64f93](https://github.com/et0and/schools-sdk-typescript/commit/8e64f939b7d76239219f8ea6d5d9866e70d01ff8))
* **client:** avoid removing abort listener too early ([4cf9425](https://github.com/et0and/schools-sdk-typescript/commit/4cf9425497aa169e7af3944522cdc69a3e5e15e3))
* **docs/contributing:** correct pnpm link command ([910f9a9](https://github.com/et0and/schools-sdk-typescript/commit/910f9a9effb3d127bb53000f5d9e607fb5024daa))
* **mcp:** do not fallback on baseUrl if environment env variable is set ([dcb372a](https://github.com/et0and/schools-sdk-typescript/commit/dcb372abaf4cd0f147a0ea77302f466ce4f34fdb))
* **mcp:** initialize SDK lazily to avoid failing the connection on init errors ([6c239a6](https://github.com/et0and/schools-sdk-typescript/commit/6c239a6244dc628a8ca107c195113ed12e4caedd))
* **mcp:** update prompt ([ada0f8e](https://github.com/et0and/schools-sdk-typescript/commit/ada0f8ec89d202896f19777be0f56f2aeba2d079))


### Chores

* **client:** do not parse responses with empty content-length ([147b123](https://github.com/et0and/schools-sdk-typescript/commit/147b1235409064f43310b2646fb5d0b7e9f47ccd))
* **client:** restructure abort controller binding ([4279a43](https://github.com/et0and/schools-sdk-typescript/commit/4279a430cc315e09991c8330404c7ec1918cb8b2))
* **internal/client:** fix form-urlencoded requests ([023e0ca](https://github.com/et0and/schools-sdk-typescript/commit/023e0cab4b74e38a332a336bd99983d2b7a72014))
* **internal:** add health check to MCP server when running in HTTP mode ([b0762f6](https://github.com/et0and/schools-sdk-typescript/commit/b0762f60bca47605f403407d4d459d1a2fce9b64))
* **internal:** allow basic filtering of methods allowed for MCP code mode ([24a3c1f](https://github.com/et0and/schools-sdk-typescript/commit/24a3c1fbbb5fdd3a6808f9f54ad7410576b84421))
* **internal:** allow setting x-stainless-api-key header on mcp server requests ([c1fccf3](https://github.com/et0and/schools-sdk-typescript/commit/c1fccf35d1845e28bea7c0fb579b4bded4d749bc))
* **internal:** always generate MCP server dockerfiles and upgrade associated dependencies ([b3c594a](https://github.com/et0and/schools-sdk-typescript/commit/b3c594a07b5d85e85d0a243815769e6a07840459))
* **internal:** avoid type checking errors with ts-reset ([991df0a](https://github.com/et0and/schools-sdk-typescript/commit/991df0a33ac3481a6f7348a66671e9909806ba2b))
* **internal:** cache fetch instruction calls in MCP server ([ae8c300](https://github.com/et0and/schools-sdk-typescript/commit/ae8c30003746b48315907a2aaff9ae0abbed4413))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([b4237e5](https://github.com/et0and/schools-sdk-typescript/commit/b4237e5edd7a961f7bb21f44a6463b786755f86e))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([9218ce7](https://github.com/et0and/schools-sdk-typescript/commit/9218ce7f5395fba4e7af42286a43197df97b06a8))
* **internal:** improve layout of generated MCP server files ([4e0a792](https://github.com/et0and/schools-sdk-typescript/commit/4e0a792be5034d9e92d27d4966375bf460d43c99))
* **internal:** make MCP code execution location configurable via a flag ([fd74d9c](https://github.com/et0and/schools-sdk-typescript/commit/fd74d9c4c64c86b2027a2aa1f6d4ea76de94191b))
* **internal:** move stringifyQuery implementation to internal function ([944bd64](https://github.com/et0and/schools-sdk-typescript/commit/944bd642f066f0210598648d89f2cbabc5e05e64))
* **internal:** refactor flag parsing for MCP servers and add debug flag ([a7d6f09](https://github.com/et0and/schools-sdk-typescript/commit/a7d6f09548714831ef5a881d938d5b87e65a34d8))
* **internal:** remove mock server code ([38c907b](https://github.com/et0and/schools-sdk-typescript/commit/38c907b4e55a77cc72b4cb781d7f075e175366ce))
* **internal:** support oauth authorization code flow for MCP servers ([ebd4f4a](https://github.com/et0and/schools-sdk-typescript/commit/ebd4f4aa4be43a4044c0f321a4b1d90beb526bd1))
* **internal:** upgrade @modelcontextprotocol/sdk and hono ([eb24131](https://github.com/et0and/schools-sdk-typescript/commit/eb24131f1f7ef25ba6f9b90a01914068faf9185d))
* **mcp:** correctly update version in sync with sdk ([1930954](https://github.com/et0and/schools-sdk-typescript/commit/1930954ee9ce38a5bf5223c57a75a2209dce3118))
* **mcp:** forward STAINLESS_API_KEY to docs search endpoint ([b216143](https://github.com/et0and/schools-sdk-typescript/commit/b216143abac10aba134a6401597ebfeaa78c0fb4))
* update mock server docs ([760cc2b](https://github.com/et0and/schools-sdk-typescript/commit/760cc2b35963f4cc6a19d82c0fe75f674c1cdb8a))

## 0.6.1 (2026-01-29)

Full Changelog: [v0.6.0...v0.6.1](https://github.com/et0and/schools-sdk-typescript/compare/v0.6.0...v0.6.1)

### Bug Fixes

* **docs:** fix mcp installation instructions for remote servers ([c16560b](https://github.com/et0and/schools-sdk-typescript/commit/c16560b5b736188766245cda3253d10c72c1e1ea))
* **mcp:** allow falling back for required env variables ([0ef7111](https://github.com/et0and/schools-sdk-typescript/commit/0ef711141b61da9f3e8f53b7f5631e0488418a27))
* **mcp:** correct code tool api output types ([2ace6d0](https://github.com/et0and/schools-sdk-typescript/commit/2ace6d0f9f2ac4123ffdc5c7d3237a3041592ec5))
* **mcp:** fix options parsing ([86daf72](https://github.com/et0and/schools-sdk-typescript/commit/86daf7217ead96567fde5c38129be0c57978820f))
* **mcp:** update code tool prompt ([f2bb3cb](https://github.com/et0and/schools-sdk-typescript/commit/f2bb3cbccea5318ab4f86d05f6f3b40918a9c29c))


### Chores

* break long lines in snippets into multiline ([e775a1d](https://github.com/et0and/schools-sdk-typescript/commit/e775a1db6f874fb843be8a9e0ef70da3033349db))
* **ci:** upgrade `actions/github-script` ([67f241d](https://github.com/et0and/schools-sdk-typescript/commit/67f241d5df92519f6e68fe28aae324e7c61a6e51))
* **internal:** codegen related update ([10fce0c](https://github.com/et0and/schools-sdk-typescript/commit/10fce0c02b1f2e0e2bbab1108a8dfecf7c4e6b0b))
* **internal:** codegen related update ([4d303a2](https://github.com/et0and/schools-sdk-typescript/commit/4d303a2890b135b0c3d00cc0f7b0856238d68c85))
* **internal:** codegen related update ([8755503](https://github.com/et0and/schools-sdk-typescript/commit/8755503c9b769f62796529d2d6b837e9b44c1a7d))
* **internal:** codegen related update ([c4ab054](https://github.com/et0and/schools-sdk-typescript/commit/c4ab054359789a66b375b7236d07d627cb041977))
* **internal:** codegen related update ([75f5fef](https://github.com/et0and/schools-sdk-typescript/commit/75f5fef2aad0621cbef90241734bbb2fa97a1a5c))
* **internal:** fix dockerfile ([6dc5132](https://github.com/et0and/schools-sdk-typescript/commit/6dc5132e3d0cc3375e489c805df30264490808ab))
* **internal:** update `actions/checkout` version ([e73967e](https://github.com/et0and/schools-sdk-typescript/commit/e73967e333bb5b8a19301bd5c518c9af4914fda0))
* **internal:** update lock file ([ff2e148](https://github.com/et0and/schools-sdk-typescript/commit/ff2e14870594c21bea7789f45bad44248262908e))
* **internal:** upgrade babel, qs, js-yaml ([cb00ba5](https://github.com/et0and/schools-sdk-typescript/commit/cb00ba59d167f6c39e4acdbf56e5f4a0046f6d1b))
* **mcp:** add intent param to execute tool ([c973362](https://github.com/et0and/schools-sdk-typescript/commit/c973362d2927feda4a25cd4a2b0370ef82c3eebe))
* **mcp:** pass intent param to execute handler ([48e4d95](https://github.com/et0and/schools-sdk-typescript/commit/48e4d95f67e8212766cc0274661e908a4bac9914))
* **mcp:** up tsconfig lib version to es2022 ([c32c8e4](https://github.com/et0and/schools-sdk-typescript/commit/c32c8e4ab1b9811375a4a42e28eb51ae611ec471))
* **mcp:** upgrade dependencies ([25a174f](https://github.com/et0and/schools-sdk-typescript/commit/25a174f2e0db95c843b6b005e100bf015cd84170))


### Documentation

* prominently feature MCP server setup in root SDK readmes ([754be4d](https://github.com/et0and/schools-sdk-typescript/commit/754be4dccb2bbb30bd6c6c37c7c11b7990ccec02))

## 0.6.0 (2025-12-19)

Full Changelog: [v0.5.1...v0.6.0](https://github.com/et0and/schools-sdk-typescript/compare/v0.5.1...v0.6.0)

### ⚠ BREAKING CHANGES

* **mcp:** remove deprecated tool schemes
* **mcp:** **Migration:** To migrate, simply modify the command used to invoke the MCP server. Currently, the only supported tool scheme is code mode. Now, starting the server with just `node /path/to/mcp/server` or `npx package-name` will invoke code tools: changing your command to one of these is likely all you will need to do.

### Chores

* **mcp:** remove deprecated tool schemes ([0a562e5](https://github.com/et0and/schools-sdk-typescript/commit/0a562e5e95284f49f0883a34d1e09c5858d710aa))

## 0.5.1 (2025-12-18)

Full Changelog: [v0.5.0...v0.5.1](https://github.com/et0and/schools-sdk-typescript/compare/v0.5.0...v0.5.1)

### Bug Fixes

* **mcp:** pass base url to code tool ([dd25b93](https://github.com/et0and/schools-sdk-typescript/commit/dd25b93170ee520c32abc4361ed6694f7dc42f45))


### Chores

* **docs:** key needed for sdk ([a75cede](https://github.com/et0and/schools-sdk-typescript/commit/a75cede50540b14875bac5e178efd7474c2dd074))

## 0.5.0 (2025-12-11)

Full Changelog: [v0.4.0...v0.5.0](https://github.com/et0and/schools-sdk-typescript/compare/v0.4.0...v0.5.0)

### Features

* **mcp:** add typescript check to code execution tool ([163a4b9](https://github.com/et0and/schools-sdk-typescript/commit/163a4b9443450be09cc6017ec6d87acfc3bb2beb))
* **mcp:** handle code mode calls in the Stainless API ([c330db7](https://github.com/et0and/schools-sdk-typescript/commit/c330db7642103c295e5131f51f33d2805c7e454c))


### Bug Fixes

* **mcp:** add client instantiation options to code tool ([1fb376f](https://github.com/et0and/schools-sdk-typescript/commit/1fb376f345b87fdf530397808562a3accfdf09cc))
* **mcp:** correct code tool API endpoint ([2f7c6e9](https://github.com/et0and/schools-sdk-typescript/commit/2f7c6e904e1540f9e3ea0867f8d013765305703e))
* **mcp:** return correct lines on typescript errors ([011b89f](https://github.com/et0and/schools-sdk-typescript/commit/011b89f332e9c99c59c3f82359d5f392fa45b757))


### Chores

* **internal:** codegen related update ([39af283](https://github.com/et0and/schools-sdk-typescript/commit/39af283d033a83518185a67d08409349d7f3745d))
* **internal:** codegen related update ([f9ffa75](https://github.com/et0and/schools-sdk-typescript/commit/f9ffa75af156a50c7686057de3ee832872d6b4bb))
* **mcp:** update lockfile ([2c8d559](https://github.com/et0and/schools-sdk-typescript/commit/2c8d55914ba0975d2a57b44b6de466d7c13e3311))
* use latest @modelcontextprotocol/sdk ([7f90ba8](https://github.com/et0and/schools-sdk-typescript/commit/7f90ba84663f3c851a49932e4fc654bbe7c6e80a))

## 0.4.0 (2025-12-03)

Full Changelog: [v0.3.0...v0.4.0](https://github.com/et0and/schools-sdk-typescript/compare/v0.3.0...v0.4.0)

### Features

* **mcp:** return logs on code tool errors ([08b6d3f](https://github.com/et0and/schools-sdk-typescript/commit/08b6d3f89eeda8e72e03f0b38fb2952a8ec44cba))


### Bug Fixes

* **mcp:** return tool execution error on api error ([4292092](https://github.com/et0and/schools-sdk-typescript/commit/4292092d9a2ecc3eaf6310c78793ae843019a972))


### Chores

* **client:** fix logger property type ([0af84f8](https://github.com/et0and/schools-sdk-typescript/commit/0af84f8b5864500ba308a02819bb05bc2b67ac52))
* **internal:** upgrade eslint ([ac999d4](https://github.com/et0and/schools-sdk-typescript/commit/ac999d48f9b5deba37c472dfa7d72057f28bf505))

## 0.3.0 (2025-11-27)

Full Changelog: [v0.2.0...v0.3.0](https://github.com/et0and/schools-sdk-typescript/compare/v0.2.0...v0.3.0)

### Features

* **mcp:** add detail field to docs search tool ([8058211](https://github.com/et0and/schools-sdk-typescript/commit/80582118f5bf40a8b1c80ae293d409581c47bcc0))


### Bug Fixes

* **mcp:** return tool execution error on jq failure ([fad83c9](https://github.com/et0and/schools-sdk-typescript/commit/fad83c9fce3b5291927a303c74e6933e2dab9fe9))


### Chores

* **internal:** configure MCP Server hosting ([1666b70](https://github.com/et0and/schools-sdk-typescript/commit/1666b706f67d60486fb3b3cc6fb9312163d7eb42))
* **mcp:** upgrade jq-web ([8b7448e](https://github.com/et0and/schools-sdk-typescript/commit/8b7448e7555db5217d2157294d440c49915bc6bd))

## 0.2.0 (2025-11-11)

Full Changelog: [v0.1.2...v0.2.0](https://github.com/et0and/schools-sdk-typescript/compare/v0.1.2...v0.2.0)

### Features

* **mcp:** enable optional code execution tool on http mcp servers ([5bbd890](https://github.com/et0and/schools-sdk-typescript/commit/5bbd89039ea82960d7c1539d6b8fa1ad5199d3f0))


### Chores

* **internal:** codegen related update ([751a8bc](https://github.com/et0and/schools-sdk-typescript/commit/751a8bcb2d9668c9329d91570932632c2c51abd6))
* **internal:** codegen related update ([4eb4bfa](https://github.com/et0and/schools-sdk-typescript/commit/4eb4bfa27de902d6b8a91b9fb9f59587e1ab8453))
* **internal:** grammar fix (it's -&gt; its) ([434de9a](https://github.com/et0and/schools-sdk-typescript/commit/434de9a38ddc3ebf03218010a0d70435930a71ad))
* mcp code tool explicit error message when missing a run function ([af351f2](https://github.com/et0and/schools-sdk-typescript/commit/af351f271a45a657011a4fb2ebc2032afb342bd6))
* **mcp:** add friendlier MCP code tool errors on incorrect method invocations ([7d79cc2](https://github.com/et0and/schools-sdk-typescript/commit/7d79cc24a13024a0f67db2af18087a7136e23c8f))
* **mcp:** add line numbers to code tool errors ([e87f1c2](https://github.com/et0and/schools-sdk-typescript/commit/e87f1c26487a04da2d52a41fe2eb99fb7e9a118a))
* **mcp:** clarify http auth error ([48cb0a1](https://github.com/et0and/schools-sdk-typescript/commit/48cb0a10901cd354c01b13b637ded8539238ceaa))
* use structured error when code execution tool errors ([cf3abed](https://github.com/et0and/schools-sdk-typescript/commit/cf3abedc6165f162fb557e553ce66c8dcfea8057))


### Documentation

* **mcp:** add a README button for one-click add to Cursor ([6f693a4](https://github.com/et0and/schools-sdk-typescript/commit/6f693a4c862a71e9d48bf8cd3a65eacf76faaf5e))
* **mcp:** add a README link to add server to VS Code or Claude Code ([008f71a](https://github.com/et0and/schools-sdk-typescript/commit/008f71a5e012ab6bfdd69f0a933e1ea214c50b39))

## 0.1.2 (2025-11-04)

Full Changelog: [v0.1.1...v0.1.2](https://github.com/et0and/schools-sdk-typescript/compare/v0.1.1...v0.1.2)

### Chores

* update SDK settings ([683f8df](https://github.com/et0and/schools-sdk-typescript/commit/683f8df5588bcc68440b0c0374911c4e5323c94d))

## 0.1.1 (2025-11-04)

Full Changelog: [v0.1.0...v0.1.1](https://github.com/et0and/schools-sdk-typescript/compare/v0.1.0...v0.1.1)

### Chores

* configure new SDK language ([7b7101d](https://github.com/et0and/schools-sdk-typescript/commit/7b7101d3856f3ce0e338ce2e1af17248350feeb5))

## 0.1.0 (2025-10-17)

Full Changelog: [v0.0.1...v0.1.0](https://github.com/et0and/schools-sdk-typescript/compare/v0.0.1...v0.1.0)

### Features

* **api:** manual updates ([cd99efd](https://github.com/et0and/schools-sdk-typescript/commit/cd99efd4797422f65fed1e1c7ed225c1957e3fe1))


### Chores

* update SDK settings ([fc51a2d](https://github.com/et0and/schools-sdk-typescript/commit/fc51a2dc5e9141207aca19e2c76371520af1f6af))
