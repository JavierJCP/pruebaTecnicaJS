import { test, expect } from 'vitest';
import { maxInstruccions } from '../1';

test('maxInstruccions', () => {
  expect(maxInstruccions(['R', 'R', 'U', 'U'])).toBe(4);

  expect(maxInstruccions(['R', 'R', 'U', 'L'])).toBe(3);

  expect(maxInstruccions(['L', 'L', 'L', 'L', 'L'])).toBe(5);

  expect(maxInstruccions(['R', 'U', 'L', 'D'])).toBe(2);
});
