import { test, expect } from '@playwright/test';

// TODO: Mock API request to ensure always receiving same results
test('User is able to click on the grid and see the exchange on another page', async ({
  page,
}) => {
  // Go to http://localhost:3000/
  await page.goto('http://localhost:3000/');

  // Click text=Binance 2017 Cayman Islands No 10 1 1008512.6156085224
  await page.locator('text=Binance 2017 Cayman Islands No 10 1').click();
});
