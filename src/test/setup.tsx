import "@testing-library/jest-dom/vitest";

/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";

import { fetch, Request, Response } from "@remix-run/web-fetch";

declare global {
  namespace Vi {
    // @ts-ignore
    interface JestAssertion<T = any>
      extends jest.Matchers<void, T>,
        TestingLibraryMatchers<T, void> {}
  }
}

if (!globalThis.fetch) {
  // Built-in lib.dom.d.ts expects `fetch(Request | string, ...)` but the web
  // fetch API allows a URL so @remix-run/web-fetch defines
  // `fetch(string | URL | Request, ...)`
  // @ts-expect-error
  globalThis.fetch = fetch;
  // Same as above, lib.dom.d.ts doesn't allow a URL to the Request constructor
  // @ts-expect-error
  globalThis.Request = Request;
  // web-std/fetch Response does not currently implement Response.error()
  // @ts-expect-error
  globalThis.Response = Response;
}
