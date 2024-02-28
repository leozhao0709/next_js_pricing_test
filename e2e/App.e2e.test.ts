import { test, expect } from '@playwright/test';

test('it should show title', async ({ page }) => {
  await page.goto('localhost:3000');

  await expect(page.locator('h1')).toHaveText('mycli generated project');
});
