import { test, expect } from '@playwright/test';

test('Happy path - clicking on exchange, going back with a button.', async ({
  page,
}) => {
  // Go to http://localhost:3000/
  await page.goto('http://localhost:3000/');

  // Click text=Kraken United States https://r.kraken.com/c/2223866/687155/10583 7
  await page
    .locator(
      'text=Kraken United States https://r.kraken.com/c/2223866/687155/10583 7'
    )
    .click();
  await expect(page).toHaveURL('http://localhost:3000/exchange/kraken');

  // Click text=NameKrakenYear Established2011CountryUnited StatesDescription-Incentivies Tradin
  await page
    .locator(
      'text=NameKrakenYear Established2011CountryUnited StatesDescription-Incentivies Tradin'
    )
    .click();

  // Click text=https://www.kraken.com/redirect?url=https://linkedin.com/company/kraken-exchange
  await page
    .locator(
      'text=https://www.kraken.com/redirect?url=https://linkedin.com/company/kraken-exchange'
    )
    .click();

  // Click text=Go Back to Main page
  await page.locator('text=Go Back to Main page').click();
  await expect(page).toHaveURL('http://localhost:3000/');

  // Click text=ExchangeCountryImageURLTrust score rank
  await page.locator('text=ExchangeCountryImageURLTrust score rank').click();
});
