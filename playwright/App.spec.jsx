import { test, expect } from '@playwright/test';

// TODO: Mock API request to ensure always receiving same results
test('test', async ({ page }) => {
  // Go to http://localhost:3000/
  await page.goto('http://localhost:3000/');

  // Click text=Binance >> nth=0
  await page.locator('text=Binance').first().click();

  // Click [data-test-id="Binance-img"]
  await page.locator('[data-test-id="Binance-img"]').click();

  // Click text=2017
  await page.locator('text=2017').click();

  // Click text=Cayman Islands
  await page.locator('text=Cayman Islands').click();

  // Click .item > div:nth-child(5) >> nth=0
  await page.locator('.item > div:nth-child(5)').first().click();

  // Click .item > div:nth-child(6) >> nth=0
  await page.locator('.item > div:nth-child(6)').first().click();

  // Click .item > div:nth-child(7) >> nth=0
  await page.locator('.item > div:nth-child(7)').first().click();

  // Click text=Binance 2017 Cayman Islands No 10 1 1008512.6156085224
  await page.locator('text=Binance 2017 Cayman Islands No 10 1').click();
});
