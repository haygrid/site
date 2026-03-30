import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  webServer: {
    command: "next dev -p 3333",
    url: "http://localhost:3333",
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: "http://localhost:3333",
  },
  projects: [
    {
      name: "desktop",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "mobile",
      use: { ...devices["Pixel 5"] },
    },
  ],
});
