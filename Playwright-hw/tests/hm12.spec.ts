// Task1
import { test, expect } from "@playwright/test";

test("Task1 - Login and logout", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");
  await page.fill("#username", "invalidUser");
  await page.fill("#password", "invalidPassword");
  await page.click('button[type="submit"]');
  const errorMessage = page.locator("#flash");
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText("Your username is invalid!");
  await page.fill("#username", "tomsmith");
  await page.fill("#password", "SuperSecretPassword!");
  await page.click('button[type="submit"]');
  const successMessage = page.locator("#flash");
  await expect(successMessage).toBeVisible();
  await expect(successMessage).toContainText("You logged into a secure area!");
  await expect(page).toHaveURL("https://the-internet.herokuapp.com/secure");
  await page.click('a[href="/logout"]');
  const logoutMessage = page.locator("#flash");
  await expect(logoutMessage).toBeVisible();
  await expect(logoutMessage).toContainText(
    "You logged out of the secure area!"
  );
  await expect(page).toHaveURL("https://the-internet.herokuapp.com/login");
});

// Task 2

test("Task2 - Interact with checkboxes", async ({ page }) => {
  await page.goto("https://demo.guru99.com/test/radio.html");

  const checkboxes = [
    page.locator("#vfb-6-0"),
    page.locator("#vfb-6-1"),
    page.locator("#vfb-6-2"),
  ];

  for (const checkbox of checkboxes) {
    await checkbox.check();
    expect(await checkbox.isChecked()).toBe(true);
  }
  for (const checkbox of checkboxes) {
    await checkbox.uncheck();
    expect(await checkbox.isChecked()).toBe(false);
  }
});

// Task 3

test("Task 3 - Interact with iframe and dropdown", async ({ page }) => {
  await page.goto(
    "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select"
  );
  const acceptAll = page.locator("#accept-choices");
  await acceptAll.click();
  const iframe = page.frameLocator("iframe#iframeResult");
  const dropdown = iframe.locator("select");
  await dropdown.selectOption("saab");
  const selectedOption = await dropdown.inputValue();
  expect(selectedOption).toBe("saab");

  const submitButton = iframe.locator('input[type="submit"]');
  await submitButton.click();
  await expect(iframe.locator("html")).toContainText("cars=saab");
});

// Task 4

test("Task 4 - Fill and Submit Form", async ({ page }) => {
  await page.goto("http://formy-project.herokuapp.com/form");
  await page.fill("input#first-name", "Sam");
  await page.fill("input#last-name", "Robertson");
  await page.fill("input#job-title", "Test Automation Engineer");
  await page.check("input#radio-button-2");
  await page.check("input#checkbox-1");
  await page.selectOption("select#select-menu", { label: "5-9" });
  await page.fill("input#datepicker", "14/12/2024");
  await page.click("a.btn.btn-lg.btn-primary");
  const successMessage = page.locator("div.alert.alert-success");
  await expect(successMessage).toHaveText(
    "The form was successfully submitted!"
  );
});

// Task 5
// test("Task 5 - E-commerce site test", async ({ page }) => {
//   await page.goto(
//     "https://ecommerce-playground.lambdatest.io/index.php?route=common/home"
//   );

//   page.click("#entry_217832 > a");
//   const phonesCategory = page.getByText("Phone, Tablets & Ipod");
//   await phonesCategory.click();
//   await expect(page).toHaveURL(/.*route=product\/category&path=57/);

//   const minPriceInput = page.getByPlaceholder("Minimum Price").last();
//   const maxPriceInput = page.getByPlaceholder("Maximum Price").last();

//   await minPriceInput.fill("146");
//   await maxPriceInput.fill("150");
//   await page.keyboard.press("Enter");

//   const productList = page.locator(".product-thumb");
//   await expect(productList).toHaveCount(8, { timeout: 5000 });

//   const htcTouchHd = productList.locator(':has-text("HTC Touch HD")');
//   await expect(htcTouchHd).toBeVisible({ timeout: 5000 });

//   const addToCartButton = htcTouchHd.locator('button[onclick*="cart.add"]');
//   await addToCartButton.click();

//   const cartNotification = page.locator(".alert-success");
//   await expect(cartNotification).toBeVisible({ timeout: 5000 });
//   await expect(cartNotification).toHaveText(
//     /Success: You have added HTC Touch HD to your shopping cart/,
//     { timeout: 5000 }
//   );

//   const cartButton = page.locator("#cart");
//   await cartButton.click();

//   const cartItem = page.locator(
//     '#cart .dropdown-menu:has-text("HTC Touch HD")'
//   );
//   await expect(cartItem).toBeVisible({ timeout: 5000 });
//   await expect(cartItem).toHaveText(/146\.00/, { timeout: 5000 });
// });
