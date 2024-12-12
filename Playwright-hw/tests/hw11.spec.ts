// Task1
import { test, expect } from "@playwright/test";

test("Google Search Test - Playwright", async ({ page }) => {
  await page.goto("https://www.google.com");
  const searchInput = page.locator('textarea[name="q"]');
  await searchInput.fill("Playwright");
  await searchInput.press("Enter");
  const results = page.locator("#search");
  await expect(results).toContainText("Playwright");
});

// Task2

test("Verify Playwright homepage and Get Started link", async ({ page }) => {
  // Перейдіть на домашню сторінку Playwright
  await page.goto("https://playwright.dev/");
  await expect(page).toHaveURL(/https:\/\/playwright\.dev.*/);
  const getStartedLinks = page.locator("a", { hasText: "Get started" });
  await expect(getStartedLinks).toHaveCount(1);
});

// Task3
test("Google search for Playwright", async ({ page }) => {
  await page.goto("https://www.google.com");

  const searchInput = page.locator('textarea[name="q"]');
  await searchInput.fill("Playwright");
  await searchInput.press("Enter");

  const firstResult = page.locator('#search a:has-text("Playwright")').first();
  await expect(firstResult).toBeVisible();
  const firstResultText = await firstResult.textContent();
  console.log("First result text:", firstResultText);
});

// Task4
test("Verify navigation and page title on Playwright site", async ({
  page,
}) => {
  await page.goto("https://playwright.dev/");
  await expect(page).toHaveTitle(/Playwright/);

  const getStartedLink = page.locator("a", { hasText: "Get started" });
  await getStartedLink.click();
  await expect(page).toHaveURL(/\/docs/);
});
