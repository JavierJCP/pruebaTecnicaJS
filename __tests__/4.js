import { test, expect } from 'vitest';
import { calaculateDaysToPayDebts } from '../4';

test('calculateDaysToPayDebts', () => {
  expect(calaculateDaysToPayDebts([1])).toStrictEqual([1]);
});
