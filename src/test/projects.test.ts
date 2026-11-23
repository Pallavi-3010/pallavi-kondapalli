import { describe, expect, it } from "vitest";
import { projects } from "@/data/portfolio";

const expected: Record<string, string> = {
  WebScour: "https://github.com/Pallavi-3010/Webscour_Distributed-Web-Crawler",
  BigFeat: "https://github.com/Pallavi-3010/Feature_engineering_using_automl",
  "Brain Tumor Detection": "https://github.com/Pallavi-3010/brain-tumor-detection",
  "Employee Management System": "https://github.com/Pallavi-3010/Use-case-1",
};

describe("project repository links", () => {
  for (const [title, url] of Object.entries(expected)) {
    it(`links ${title} to its repository`, () => {
      expect(projects.find((p) => p.title === title)?.repoUrl).toBe(url);
    });
  }

  it("shows no repository button for projects without a real link", () => {
    expect(projects.find((p) => p.title === "Gaming Hub")?.repoUrl).toBeUndefined();
  });

  it("only ever points at Pallavi's own repositories", () => {
    for (const p of projects) {
      if (p.repoUrl) expect(p.repoUrl.startsWith("https://github.com/Pallavi-3010/")).toBe(true);
    }
  });
});
