import { describe, expect, it } from "vitest";
import { profile } from "@/data/portfolio";
import { buildContactMailto } from "@/lib/contact";

const msg = { name: "Ravi", email: "ravi@example.com", subject: "Hello there", message: "Hi Pallavi" };

describe("contact form", () => {
  it("does not send anywhere when no email is configured", () => {
    expect(buildContactMailto(null, msg)).toBeNull();
    expect(buildContactMailto("  ", msg)).toBeNull();
  });

  it("links to Pallavi's actual LinkedIn profile", () => {
    expect(profile.linkedin).toBe("https://www.linkedin.com/in/pallavi-kondapalli-825152295/");
  });

  it("addresses messages to Pallavi's email", () => {
    expect(profile.email).toBe("pallavikondapalli30@gmail.com");
    const href = buildContactMailto(profile.email, msg);
    expect(href?.startsWith("mailto:pallavikondapalli30@gmail.com?")).toBe(true);
    expect(href).toContain("subject=Hello%20there");
  });
});
