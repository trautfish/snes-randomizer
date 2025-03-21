import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/SNES Randomizer/);
});

test('has game image', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('#image')).toBeVisible();

  await page.waitForFunction(() => {
    const img = document.querySelector('#image') as HTMLImageElement;
    return img && img.complete && img.naturalWidth > 0;
  });

  const imageSrc = await page.locator('#image').getAttribute('src');
  expect(imageSrc).not.toBeNull();
  expect(imageSrc).not.toBe('');
});

test('has link that goes to RAWG Games API site', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByText('RAWG Games API')).toBeVisible();

  await page.getByRole('link', { name: 'RAWG Games API' }).click();

  await expect(page).toHaveURL('https://rawg.io/apidocs');
});

test('has Randomize button', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('button', { name: 'Randomize' })).toBeVisible();
});
