import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
  await page.goto(process.env.baseURL || "http://localhost:5173");
  console.log("Base URL:", process.env.baseURL);
  await page.locator("div.Tatooine").click();
  await expect(page.locator(".SWCard-selected.Tatooine .title")).toHaveText("Tatooine");
});