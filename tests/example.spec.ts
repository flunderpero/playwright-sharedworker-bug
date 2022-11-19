import { test, expect } from "@playwright/test";

for (let i = 0; i < 3; i++) {
  test(`Run ${i}`, async ({ page }) => {
    await page.goto(
      "https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/"
    );
    await page.type("#number1", "4");
    await page.type("#number2", "5");
    const result = page.locator(".result1");
    await result.click();
    await expect(result).toHaveText("Result: 2000");
  });
}
