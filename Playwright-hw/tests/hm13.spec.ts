import { test, expect, request } from "@playwright/test";

// Task1
test("Task 1 - API Testing with Playwright", async () => {
  const apiContext = await request.newContext({
    ignoreHTTPSErrors: true,
  });
  const response = await apiContext.get("https://reqres.in/api/users/2");
  await expect(response.status()).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.data.first_name).toBe("Janet");
  expect(responseBody.data.last_name).toBe("Weaver");
  expect(responseBody.data.email).toBe("janet.weaver@reqres.in");
});

// Task 2
test("Task 2 - API Testing with POST Request", async () => {
  const apiContext = await request.newContext({
    ignoreHTTPSErrors: true,
  });

  const endpoint = "https://dummyjson.com/posts/add";
  const requestBody = {
    title: "Awesome title",
    userId: 10,
  };
  const response = await apiContext.post(endpoint, {
    data: requestBody,
  });
  await expect(response.status()).toBe(201);
  const responseBody = await response.json();
  expect(responseBody.title).toBe("Awesome title");
  expect(responseBody.userId).toBe(10);
});

// Task3
test("Task 3* - Parameterized GET Request", async () => {
  const apiContext = await request.newContext({
    ignoreHTTPSErrors: true,
  });
  const endpoint = "https://dummyjson.com/products";
  const params = {
    skip: 10,
    limit: 5,
  };

  const response = await apiContext.get(endpoint, {
    params,
  });

  await expect(response.status()).toBe(200);
  const responseBody = await response.json();
  const products = responseBody.products;
  expect(products.length).toBe(5);
  expect(products[0].price).toBe(1899.99);
  expect(products[1].rating).toBeLessThan(4);
  expect(products[products.length - 1].stock).toBeGreaterThan(10);
  expect(products[0]).toHaveProperty("returnPolicy");
});
