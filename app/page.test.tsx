import httpMocks from "node-mocks-http";

import { test, vi } from "vitest";
import { POST } from "./api/test/route";

vi.mock("server-only", () => {
  return {
    // mock server-only module
  };
});

test('can test api', async () => {
  const mockRequestData = { };
  const req = httpMocks.createRequest({
    method: "POST",
    url: "/api/test",
    body: mockRequestData,
  });
  const res = httpMocks.createResponse();

  // pass in res if needed and update res in api route
  await POST(req);
})
