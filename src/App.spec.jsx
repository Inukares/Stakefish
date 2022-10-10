import { test, expect } from '@playwright/experimental-ct-react';
import App from './App';
import { mock, missingData } from './mockResponse';

test.use({ viewport: { width: 500, height: 500 } });

// TODO: Test for routing logic
test('should display perfect path', async ({ mount }) => {
  const component = await mount(<App></App>);
  await expect(component).toContainText('loading');
  for (let i = 0; i < mock.length; i++) {
    await expect(component).toContainText(mock[i].name);
    await expect(component).toContainText(mock[i].country);
    await expect(component).toContainText(mock[i].description);
    // await expect(component).toContainText(mock[i].url);
    await expect(
      component.locator(`data-test-id=${mock[i].name + '-img'}`)
    ).toBeVisible();
    await expect(component).toContainText(mock[i].has_trading_incentive);
    await expect(component).toContainText(mock[i].trust_score);
    await expect(component).toContainText(mock[i].trust_score_rank);
    await expect(component).toContainText(mock[i].trade_volume_24h_btc);
    await expect(component).toContainText(
      mock[i].trade_volume_24h_btc_normalized
    );
  }
});

// TODO: add mocking http call and providing default values
test.skip('should fallback to default values with insufficient data', async ({
  mount,
}) => {
  const component = await mount(<App></App>);
  await expect(component).toContainText('loading');
  const mock = missingData[0];
  await expect(component).toContainText('-');
  await expect(component).toContainText('Not specified');
  await expect(component).toContainText('-');
  await expect(component).toContainText('No');
  await expect(component).toContainText('-');
  await expect(component).toContainText('-');
  await expect(component).toContainText('Unknown');
  await expect(component).toContainText('Unknown');
});
