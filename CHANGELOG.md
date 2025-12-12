# Changelog

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
