import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { navLinks } from "@/data/portfolio";
import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

  it("matches a page for / instead of falling back to not found", () => {
    expect(router.matchRoutes("/").at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("opens every menu item as its own page", () => {
    expect(navLinks.map((l) => l.to)).toEqual([
      "/about",
      "/skills",
      "/experience",
      "/projects",
      "/education",
      "/contact",
    ]);
    for (const link of navLinks) {
      expect(router.matchRoutes(link.to).at(-1)?.routeId).toBe(link.to);
    }
  });
});
