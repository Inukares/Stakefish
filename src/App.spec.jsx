import { test, expect } from '@playwright/experimental-ct-react';
import App from './App';
import { mock, missingData } from './mockResponse';

test.use({ viewport: { width: 500, height: 500 } });

// TODO: Test for routing logic
// TODO: Should mock returned data so that the test is robust. Should
// also provide better granularity with data-test-ids or in other similar way.
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
