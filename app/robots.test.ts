// @vitest-environment node
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import robots from "./robots";

describe("robots", () => {
  let originalEnv: string | undefined;

  beforeEach(() => {
    originalEnv = process.env.ROBOTS_NOINDEX;
  });

  afterEach(() => {
    if (originalEnv === undefined) {
      delete process.env.ROBOTS_NOINDEX;
    } else {
      process.env.ROBOTS_NOINDEX = originalEnv;
    }
  });

  it("disallows all crawlers when ROBOTS_NOINDEX=true", () => {
    process.env.ROBOTS_NOINDEX = "true";
    expect(robots()).toEqual({
      rules: { userAgent: "*", disallow: "/" },
    });
  });

  it("returns empty rules when ROBOTS_NOINDEX is unset", () => {
    delete process.env.ROBOTS_NOINDEX;
    expect(robots()).toEqual({ rules: [] });
  });

  it("returns empty rules when ROBOTS_NOINDEX is set to something other than 'true'", () => {
    process.env.ROBOTS_NOINDEX = "false";
    expect(robots()).toEqual({ rules: [] });
  });
});
