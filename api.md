# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> HealthCheckResponse</code>

# Root

Types:

- <code><a href="./src/resources/root.ts">RootRetrieveResponse</a></code>

Methods:

- <code title="get /">client.root.<a href="./src/resources/root.ts">retrieve</a>() -> RootRetrieveResponse</code>

# Schools

Types:

- <code><a href="./src/resources/schools.ts">SchoolRetrieveResponse</a></code>
- <code><a href="./src/resources/schools.ts">SchoolListResponse</a></code>
- <code><a href="./src/resources/schools.ts">SchoolSearchResponse</a></code>

Methods:

- <code title="get /v1/schools/id/{schoolId}">client.schools.<a href="./src/resources/schools.ts">retrieve</a>(schoolID) -> SchoolRetrieveResponse</code>
- <code title="get /v1/schools">client.schools.<a href="./src/resources/schools.ts">list</a>({ ...params }) -> SchoolListResponse</code>
- <code title="get /v1/schools/authority/{authority}">client.schools.<a href="./src/resources/schools.ts">byAuthority</a>(authority, { ...params }) -> void</code>
- <code title="get /v1/schools/city/{city}">client.schools.<a href="./src/resources/schools.ts">byCity</a>(city, { ...params }) -> void</code>
- <code title="get /v1/schools/status/{status}">client.schools.<a href="./src/resources/schools.ts">byStatus</a>(status, { ...params }) -> void</code>
- <code title="get /v1/schools/suburb/{suburb}">client.schools.<a href="./src/resources/schools.ts">bySuburb</a>(suburb, { ...params }) -> void</code>
- <code title="get /v1/schools/search">client.schools.<a href="./src/resources/schools.ts">search</a>({ ...params }) -> SchoolSearchResponse</code>

# Sync

Types:

- <code><a href="./src/resources/sync.ts">SyncGetStatusResponse</a></code>
- <code><a href="./src/resources/sync.ts">SyncTriggerResponse</a></code>

Methods:

- <code title="get /v1/sync/status">client.sync.<a href="./src/resources/sync.ts">getStatus</a>() -> SyncGetStatusResponse</code>
- <code title="post /v1/sync">client.sync.<a href="./src/resources/sync.ts">trigger</a>() -> SyncTriggerResponse</code>
