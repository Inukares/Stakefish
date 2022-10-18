import { test } from '@playwright/test';

test('Not found routes', async ({ page }) => {
  // Go to http://localhost:3000/notexistingpage
  await page.goto('http://localhost:3000/notexistingpage');

  // Click text=We didn't find the page you were looking for. Better luck next time!
  await page
    .locator(
      "text=We didn't find the page you were looking for. Better luck next time!"
    )
    .click();

  await page.locator(
    'body:has-text("We didn\'t find the page you were looking for. Better luck next time!")'
  );

  await page.locator(
    'body:has-text("We didn\'t find the page you were looking for. Better luck next time!")'
  );

  // Go to http://localhost:3000/exchange/notexistingexchange
  await page.goto('http://localhost:3000/exchange/notexistingexchange');

  // Click text=Sorry, couldn't find matching exhange
  await page.locator("text=Sorry, couldn't find matching exhange");

  // Click text=Oops!
  await page.locator('text=Oops!');

  // Go to http://localhost:3000/exchange/
  await page.goto('http://localhost:3000/exchange/');

  // Click text=We didn't find the page you were looking for. Better luck next time!
  await page
    .locator(
      "text=We didn't find the page you were looking for. Better luck next time!"
    )
    .click();

  // Go to http://localhost:3000/exchange/notexistingexchange/anotherpageafterthat
  await page.goto(
    'http://localhost:3000/exchange/notexistingexchange/anotherpageafterthat'
  );

  // Click text=We didn't find the page you were looking for. Better luck next time!
  await page
    .locator(
      "text=We didn't find the page you were looking for. Better luck next time!"
    )
    .click();
});
