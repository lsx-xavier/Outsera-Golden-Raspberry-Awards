import { describe, test, expect } from "vitest";
import { AppPage } from "./Page";

function setup() {
  const page = new AppPage({
    path: "/foo",
    params: ["module", "id"],
    element: "element",
  });

  return page;
}

describe("AppPage", () => {
  test("get path", () => {
    const page = setup();
    expect(page.path).toBe("/foo/:module/:id");
  });
  test("get navigation path", () => {
    const page = setup();

    expect(page.getNavigationPath("bar/1")).toBe("/foo/bar/1");
  });
  test("get element", () => {
    const page = setup();

    expect(page.element).toBe("element");
  });
});
