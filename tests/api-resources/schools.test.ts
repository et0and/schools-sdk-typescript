// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Schools from 'schools';

const client = new Schools({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource schools', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.schools.retrieve('schoolId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.schools.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.schools.list(
        {
          authority: 'authority',
          city: 'city',
          limit: 1,
          name: 'name',
          org_type: 'org_type',
          page: 1,
          status: 'status',
          suburb: 'suburb',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Schools.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('byAuthority', async () => {
    const responsePromise = client.schools.byAuthority('authority');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('byAuthority: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.schools.byAuthority('authority', { limit: 1, page: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Schools.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('byCity', async () => {
    const responsePromise = client.schools.byCity('city');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('byCity: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.schools.byCity('city', { limit: 1, page: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Schools.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('byStatus', async () => {
    const responsePromise = client.schools.byStatus('status');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('byStatus: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.schools.byStatus('status', { limit: 1, page: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Schools.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('bySuburb', async () => {
    const responsePromise = client.schools.bySuburb('suburb');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('bySuburb: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.schools.bySuburb('suburb', { limit: 1, page: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Schools.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('search: only required params', async () => {
    const responsePromise = client.schools.search({ q: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('search: required and optional params', async () => {
    const response = await client.schools.search({ q: 'x', limit: 1, page: 1 });
  });
});
