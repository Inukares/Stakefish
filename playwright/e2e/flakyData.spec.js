import { test, expect } from '@playwright/test';
import { missingData } from '../mock';

test('Happy path - clicking on exchange, going back with a button.', async ({
  page,
}) => {
  await page.goto('http://localhost:3000/');

  await page.route(
    'https://api.coingecko.com/api/v3/exchanges?per_page=10',
    async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(missingData),
        headers: {
          accept: '*/*',
        },
      });
    }
  );

  // Click text=Kraken United States https://r.kraken.com/c/2223866/687155/10583 7
  await page.locator('text= - Unknown -');

  await page.route(
    'https://api.coingecko.com/api/v3/exchanges/exchangeWithMissingData',
    async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(missingData),
        headers: {
          accept: '*/*',
        },
      });
    }
  );
  await page.goto('http://localhost:3000/exchange/exchangeWithMissingData');

  await page.locator('text=Unknown>>nth=0').click();

  await expect(page).toHaveURL(
    'http://localhost:3000/exchange/exchangeWithMissingData'
  );
});
