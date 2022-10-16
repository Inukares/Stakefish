import { test, expect } from '@playwright/experimental-ct-react';
import { Table } from '../../src/Table/Table';
import { missingData } from '../../src/shared/mockResponse';

test('should fallbick to default values with insufficient data', async ({
  mount,
}) => {
  // TODO: get better granularity with data-test-id. ommited this due to time constraint
  const component = await mount(<Table exchanges={missingData}></Table>);
  await expect(component).toContainText('-');
  await expect(component).toContainText('Not specified');
  await expect(component).toContainText('No');
  await expect(component).toContainText('Unknown');
});
