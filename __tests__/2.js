import { test, expect } from 'vitest';
import { willRicardoSucceed } from '../2';

test('willRicardoSucceed', () => {
  expect(willRicardoSucceed(1, 10, 10, 0)).toBe(true);

  expect(willRicardoSucceed(1, 10, 10, 10)).toBe(false);

  expect(willRicardoSucceed(2, 20, 10, 0)).toBe(true);

  expect(willRicardoSucceed(2, 20, 10, 1)).toBe(false);
});
