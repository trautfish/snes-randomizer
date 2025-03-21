import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/');

  await expect(page).toHaveTitle(/SNES Randomizer/);
});

test('has link that goes to RAWG Games API site', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/');
  
  await expect(page.getByText('RAWG Games API')).toBeVisible();

  await page.getByText('RAWG Games API').click();

  await expect(page).toHaveURL('https://rawg.io/apidocs');
});
